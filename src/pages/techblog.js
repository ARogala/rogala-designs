import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';

import blogImg from '../img/blogPostImage.jpg';

function TechBlog({data}) {
	//console.log(data);
	let recentPosts = data.allMarkdownRemark.edges.slice(0,10);
	return (
		<Layout>
			<div className="techblog">
				<h1 className="techblog__title">Web Development Blog</h1>
				<h2 className="techblog__recent">Recent Posts:</h2>
				{recentPosts.map(({node}) => (
					<div key={node.id} className="techblog__post">
						<div className="techblog__imgbox">
							<img src={blogImg} alt="" />
						</div>
						<div>
							<Link to={node.fields.slug}>{node.frontmatter.title}</Link><br/>
							<span>Category: {node.frontmatter.category}</span><br/>
							<span>SubCategory: {node.frontmatter.subCategory}</span><br/>
							<span>{node.frontmatter.date}</span><br/>
							<p>Excerpt: {node.excerpt}</p>
						</div>
					</div>
				))}
				<Link to='/techblog-archive'>Blog Archive: {data.allMarkdownRemark.totalCount} Posts</Link>
			</div>
		</Layout>
	);
}

export default TechBlog;

//each node has a unique id
export const query = graphql`
	query {
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC } filter: { frontmatter: { category: {ne: null}}}) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
						date(formatString: "DD MMMM, YYYY")
						author
						category
						subCategory
					}
					excerpt(pruneLength: 70)
					fields {
						slug
					}
				}
			}
		}
	}
`
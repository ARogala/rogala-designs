import React from 'react';
import { Link, graphql } from 'gatsby';

import groupBy from '../groupBy.js';
import Layout from '../components/layout';

import blogImg from '../img/blogPostImage.jpg';

function TechBlog({data}) {
	//console.log(data);
	//add category to edges so nodes(blog posts) can be sorted by category
	data.allMarkdownRemark.edges.map(({node}, index) => {
		return data.allMarkdownRemark.edges[index].category = node.frontmatter.category + ' - ' + node.frontmatter.subCategory;
	});

	const groupedPosts = groupBy(data.allMarkdownRemark.edges, 'category');
	//console.log(groupedPosts);
	const allCategories = Object.keys(groupedPosts);
	//console.log(allCategories);

	/*
		for each post category if the number of posts is greater than 1
		build the DOM
	*/
	const dropDownUL = [];
	for(let i = 0; i < allCategories.length; i++ ) {
		if(groupedPosts[allCategories[i]].length > 1) {
			//build the dropDownUL
			dropDownUL.push(
				<li key={i} className="dropdown">
					<span className="dropdown__btn">{allCategories[i]}:</span>
					<ul aria-label="submenu" className="dropdown__ul">
						{groupedPosts[allCategories[i]].map((post) => {
							//console.log(post.node);
							return (
								<li key={post.node.id}>
									<Link to={post.node.fields.slug}>
										{post.node.frontmatter.title}
									</Link>
								</li>
							);
						})}
					</ul>
				</li>
			);
		}
	}

	//build the DOM for the categories with one post
	const singlePost = [];
	for(let i = 0; i < allCategories.length; i++) {
		if(groupedPosts[allCategories[i]].length === 1) {
			//console.log(groupedPosts[allCategories[i]][0]);
			singlePost.push(
				<li key={groupedPosts[allCategories[i]][0].node.id}>
					<Link to={groupedPosts[allCategories[i]][0].node.fields.slug}>
						{groupedPosts[allCategories[i]][0].node.frontmatter.title}
					</Link>
				</li>
			);
		}
	}
	let recentPosts = data.allMarkdownRemark.edges.slice(0,10);
	return (
		<Layout>
			<div className="techblog">
				<h1 className="techblog__title">Web Development Blog</h1>
				<h2 className="techblog__recent">Recent Posts:</h2>
				{recentPosts.map(({node}) => (
					<div key={node.id} className="techblog__post">
						<div className="techblog__imgbox">
							<img src={blogImg} />
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
				<h2>Archived Posts: {data.allMarkdownRemark.totalCount}</h2>
				<span>Multiple Posts in SubCategory:</span>
				{dropDownUL}
				<span>Single Post in SubCategory:</span>
				{singlePost}
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
					html
					fields {
						slug
					}
				}
			}
		}
	}
`
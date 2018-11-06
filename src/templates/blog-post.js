import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

function BlogPost({data}) {
	const post = data.markdownRemark;
	return (
		<Layout>
			<div className="blogpostContainer">
				<h1>{post.frontmatter.title}</h1>
				<div dangerouslySetInnerHTML={{ __html: post.html }}></div>
			</div>
			<div className="linkbox">
				<Link to="/techblog" className="linkbox__link">Back To Blog</Link>
				<Link to="/techblog-archive" className="linkbox__link">Blog Archive</Link>
			</div>
		</Layout>
	);
}

export default BlogPost;

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: {slug: {eq: $slug}}) {
			html
			frontmatter {
				title
				date
				author
			}
		}
	}
`
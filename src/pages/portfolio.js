import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

function Portfolio({data}) {
	//console.log(data.allMarkdownRemark.edges[0].node);
	const content = data.allMarkdownRemark.edges[0].node;
	return (
		<Layout>
			<h3 className="heading-tertiary">Portfolio</h3>
			<div dangerouslySetInnerHTML={{ __html: content.html }}></div>
		</Layout>
	);
}


export default Portfolio;

//query just the featured work content
export const query = graphql`
	query {
		allMarkdownRemark(filter: {frontmatter: {title: {eq:"Portfolio"}}}) {
			edges {
				node {
					html
				}
			}
		}
	}
`

import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

function About({data}) {
	//console.log(data.allMarkdownRemark.edges[0].node);
	const content = data.allMarkdownRemark.edges[0].node
	return (
		<Layout>
			<div dangerouslySetInnerHTML={{ __html: content.html }}></div>
		</Layout>
	);
}

export default About;

//query just the about me page
export const query = graphql`
	query {
		allMarkdownRemark(filter: {frontmatter: {title: {eq:"About Me"}}}) {
			edges {
				node {
					html
				}
			}
		}
	}
`
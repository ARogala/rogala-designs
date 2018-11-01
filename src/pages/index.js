import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

function Home({data}) {
	//console.log(data.allMarkdownRemark.edges[0].node);
	const content = data.allMarkdownRemark.edges[0].node;
	return (
		<Layout>
			<div className="typewriter-box">
				<p id="typewriter"></p><span className="blink-caret"></span>
			</div>
			<h3 className="heading-tertiary">Featured Work</h3>
			<div dangerouslySetInnerHTML={{ __html: content.html }}></div>
		</Layout>
	);
}

export default Home;

//query just the featured work content
export const query = graphql`
	query {
		allMarkdownRemark(filter: {frontmatter: {title: {eq:"Featured Work"}}}) {
			edges {
				node {
					html
				}
			}
		}
	}
`

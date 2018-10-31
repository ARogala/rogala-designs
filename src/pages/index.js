import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

function Home({data}) {
	return (
		<Layout>
			<div className="typewriter-box">
				<p id="typewriter"></p><span className="blink-caret"></span>
			</div>
			<h3 className="heading-tertiary">Featured Work</h3>

		</Layout>
	);
}

export default Home;

export const query = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`

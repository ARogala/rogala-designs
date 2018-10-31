import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

function Home({data}) {
	return (
		<Layout>
			<div>
				<p id="typewriter"></p><span className="blink-caret"></span>
				<h3>Featured Work</h3>
			</div>
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

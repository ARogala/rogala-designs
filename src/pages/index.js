import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

function Home({data}) {
	return (
		<Layout>
			<div>
				<p>Hi, My name is Andrew! I am a Front-End Web developer specializing in
				React JavaScript and the JAM (JavaScript API's and Markdown) Stack.
				I love making custom web sites for businesses or individuals.
				Contact me if you need a business page or custom personal blog.</p>
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

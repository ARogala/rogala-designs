import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

function Home({data}) {
	return (
		<Layout>
			<div>
				<p className="typewriter">Hi, My name is Andrew! I am a Front-End Web developer specializing in
				React JavaScript and the JAM (JavaScript API's and Markdown) Stack.
				I love making custom web sites, blogs, and web apps.
				Check out some of my work below.</p>
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

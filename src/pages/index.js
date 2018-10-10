import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

function Home({data}) {
	return (
		<Layout>
			<div>
				<h1>{data.site.siteMetadata.title}</h1>
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

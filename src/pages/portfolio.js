import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

import 'aos/dist/aos.css';

class Portfolio extends React.Component {
	componentDidMount() {
		const isBrowser = typeof window !== 'undefined';
		const AOS = isBrowser ? require('aos') : undefined;

		this.aos = AOS;
		this.aos.init();
	}

	componentDidUpdate() {
		this.aos.refresh();
	}

	render() {
		//console.log(this.props.data.allMarkdownRemark.edges[0].node);
		const content = this.props.data.allMarkdownRemark.edges[0].node;
		return (
			<Layout>
				<h3 className="heading-tertiary">Portfolio</h3>
				<div dangerouslySetInnerHTML={{ __html: content.html }}></div>
			</Layout>
		);
	}
}


export default Portfolio;

//query just the portfolio work content
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

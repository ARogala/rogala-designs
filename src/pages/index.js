import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

import 'aos/dist/aos.css';

class Home extends React.Component {
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
				<div className="typewriter-box">
					<p id="typewriter"></p><span className="blink-caret"></span>
				</div>
				<h3 className="heading-tertiary">Featured Work</h3>
				<div dangerouslySetInnerHTML={{ __html: content.html }}></div>
			</Layout>
		);
	}
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

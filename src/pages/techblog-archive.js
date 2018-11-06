import React from 'react';

import { Link, graphql } from 'gatsby';

import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

import groupBy from '../groupBy.js';
import Layout from '../components/layout';

class TechBlogArchive extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	filterText: ''
	    };
  	}

  	handleFilterTextChange(filterText) {
    	this.setState({filterText: filterText});
  	}

	render() {
		let posts = this.props.data.allMarkdownRemark.edges;
		let filterText = this.state.filterText.trim();
		//remove all spaces g is a global modifier (in other words replace all spaces with '')
		filterText = filterText.replace(/ /g, '');

		//console.log(posts);
		//add category to edges so nodes(blog posts) can be sorted by category
		posts.map(({node}, index) => {
			return posts[index].category = node.frontmatter.category + ' - ' + node.frontmatter.subCategory;
		});

		return (
			<Layout>
				<div className="searchBarContainer">
					<label htmlFor="filterPosts">Filter Posts:</label>
					<input
						type="text"
						className="searchInput"
						id="filterPosts"
						placeholder="Search Posts..."
						value={filterText}
						onChange={(e) => this.handleFilterTextChange(e.target.value)}
					/>
				</div>
			</Layout>
		);
	}
}

export default TechBlogArchive;

//each node has a unique id
export const query = graphql`
	query {
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC } filter: { frontmatter: { category: {ne: null}}}) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
						date(formatString: "DD MMMM, YYYY")
						author
						category
						subCategory
					}
					excerpt(pruneLength: 70)
					html
					fields {
						slug
					}
				}
			}
		}
	}
`
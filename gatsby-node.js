/*
Creating new pages has two steps:

1. Generate the “path” or “slug” for the page.
2. Create the page.

Note: Often data sources will directly provide a slug or pathname for content
— when working with one of those systems (e.g. a CMS),
you don’t need to create the slugs yourself like you do with markdown files.

thus when you add netlify CMS you will need to remove the slug


To create your markdown pages, you’ll learn to use two Gatsby APIs onCreateNode
and createPages. These are two workhorse APIs
you’ll see used in many sites and plugins.

We do our best to make Gatsby APIs simple to implement.
To implement an API, you export a function with the name
of the API from gatsby-node.js.
*/

/*
step One generate the slug
add your new slugs directly onto the MarkdownRemark nodes
any data you add to nodes is available to query later with GraphQL.
So it’ll be easy to get the slug when it comes time to create the pages.
*/
const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions;
	if (node.internal.type === `MarkdownRemark`) {
		const slug = createFilePath({ node, getNode, basePath: `src` });
		createNodeField({
			node,
			name: 'slug',
			value: slug
		});
	}
}
/*
in step step Two we must
Query data with GraphQL
Map the query results to pages

*/
exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;
	return new Promise((resolve, reject) => {
		graphql(`
		  {
		    allMarkdownRemark {
		      edges {
		        node {
		          fields {
		            slug
		          }
		        }
		      }
		    }
		  }
		`
		).then(result => {
			result.data.allMarkdownRemark.edges.forEach(({node}) => {
				createPage({
					path: node.fields.slug,
					component: path.resolve('./src/templates/blog-post.js'),
					context: {
						// Data passed to context is available
            			// in page queries as GraphQL variables.
            			slug: node.fields.slug
					}
				});
			});
			resolve();
		})
	});
}
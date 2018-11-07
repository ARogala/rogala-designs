import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

class BlogPost extends React.Component {
	render() {
		const post = this.props.data.markdownRemark;
		const { previous, next } = this.props.pageContext;
		return (
			<Layout>
				<div className="blogpostContainer">
					<h1>{post.frontmatter.title}</h1>
					<span>{post.frontmatter.date}</span>
					<div dangerouslySetInnerHTML={{ __html: post.html }}></div>
				</div>

				<div className="linkbox">
					{ previous &&
					<Link to={previous.fields.slug} rel="prev">
						Previous Post {previous.frontmatter.title}
					</Link>
					}
					<Link to="/techblog" className="linkbox__link">Back To Blog</Link>
					<Link to="/techblog-archive" className="linkbox__link">Blog Archive</Link>
					{ next &&
					<Link to={next.fields.slug} rel="next">
						Next Post {next.frontmatter.title}
					</Link>
					}
				</div>
			</Layout>
		);
	}
}

export default BlogPost;

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: {slug: {eq: $slug}}) {
			html
			frontmatter {
				title
				date(formatString: "MMMM DD, YYYY")
				author
			}
		}
	}
`
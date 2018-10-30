import React from 'react';
import { StaticQuery, Link, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import icon from '../img/tabIcon.png';

import '../styles/main.scss';

export default ({children}) => (
	<StaticQuery
		query={graphql`
			query {
				site {
					siteMetadata {
						title
						description
					}
				}
			}
		`}
		render={data => (
			<div>
				<Helmet>
					<html lang="en" />
					<meta charSet="utf-8" />
					<title>{data.site.siteMetadata.title}</title>
					<meta name="description" content={data.site.siteMetadata.description} />
					<meta name="theme-color" content=""/>

		  			<meta name="robots" content="noindex, nofollow, noarchive" />

		  			<link rel="shortcut icon" href={icon} />
		  			<link href="https://fonts.googleapis.com/css?family=Mali:500,700" rel="stylesheet" />
				</Helmet>
				<header>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/portfolio">Portfolio</Link>
						</li>
						<li>
							<Link to="/techblog">Tech Blog</Link>
						</li>
						<li>
							<Link to="/about">About Me</Link>
						</li>
					</ul>
				</header>
				{children}
				<footer>
					<h2>Footer</h2>
				</footer>
			</div>
		)}
	/>
);


import React from 'react';
import { StaticQuery, Link, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import icon from '../img/tabIcon.png';

import '../styles/main.scss';

function toggleNav() {
	const toggleNav = document.getElementById('navi-toggle').checked;
	//console.log(toggleNav);
	if(toggleNav === false) {
		document.getElementById('navi-toggle').checked = true;
	}
	else {
		document.getElementById('navi-toggle').checked = false;
	}
}

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

				<nav className="nav">
					<input type="checkbox" className="nav__checkbox" id="navi-toggle" />
					<label htmlFor="navi-toggle" className="nav__button" aria-haspopup="true" role="button" tabIndex="0" aria-label="navigation menu" onKeyPress={()=>toggleNav()}>
						<span className="nav__icon">&nbsp;</span>
					</label>
					<ul className="nav__list">
						<div className="nav__item-container">
							<li className="nav__item-1"><Link to="/"          className="nav__link">Home</Link></li>
							<li className="nav__item-2"><Link to="/portfolio" className="nav__link">Portfolio</Link></li>
							<li className="nav__item-3"><Link to="/techblog"  className="nav__link">Tech Blog</Link></li>
							<li className="nav__item-4"><Link to="/about"    className="nav__link">About</Link></li>
						</div>
					</ul>
				</nav>

				<header>

				</header>
				{children}
				<footer>
					<h2>Footer</h2>
				</footer>
			</div>
		)}
	/>
);


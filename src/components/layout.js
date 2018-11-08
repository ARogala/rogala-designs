import React from 'react';
import { StaticQuery, Link, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import icon from '../img/tabIcon.png';
import GitHub from '../img/github.svg';
import LinkedIn from '../img/linkedin.svg';

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
					<meta name="theme-color" content="#09037d"/>

		  			<link rel="shortcut icon" href={icon} />
		  			<link href="https://fonts.googleapis.com/css?family=Mali:500,700" rel="stylesheet" />
				</Helmet>

				<header className="header">
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
					<div className="header__titleBox">
						<h1 className="header__title-1">{data.site.siteMetadata.title}</h1>
						<h2 className="header__title-2">Front-End Development</h2>
					</div>
				</header>

				<div className="container">
					<main className="main" role="main">
						{children}
					</main>

					<footer className="footer">
						<div className="footer__icons">
							<span>Find me on:</span>
							<a href="https://github.com/ARogala"><img src={GitHub} alt="Find Me on GitHub"/></a>
							<a href="https://www.linkedin.com/in/andrew-rogala"><img src={LinkedIn} alt="Find Me on LinkedIn"/></a>
						</div>
					</footer>
				</div>

			</div>
		)}
	/>
);


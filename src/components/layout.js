import React from 'react';
import { Link } from 'gatsby';

function Layout({children}) {
	return (
		<div>
			<header>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/portfolio">Portfolio</Link>
					</li>
					<li>
						<Link to="/techblog">Tech Blog</Link>
					</li>
				</ul>
			</header>
			{children}
			<footer>
				<h2>Footer</h2>
			</footer>
		</div>
	);
}

export default Layout;

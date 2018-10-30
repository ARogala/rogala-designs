import React from 'react';
import { Link } from 'gatsby';

import '../styles/main.scss';

function Layout({children}) {
	return (
		<div>
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
	);
}

export default Layout;

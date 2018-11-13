import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

import avatar from '../img/avatar.svg';
import JS from '../img/JS.png';
import CSS from '../img/CSS.png';
import SASS from '../img/sass.svg';
import HTML from '../img/HTML.png';

import Star from '../img/star.svg';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function About({data}) {
	//console.log(data.allMarkdownRemark.edges[0].node);
	//const content = data.allMarkdownRemark.edges[0].node;
	return (
		<Layout>
			<div className="avatarbox">
				<img className="avatar" src={avatar} alt="avatar" />
				<h3 className="heading-tertiary">Welcome</h3>
				<p>Hi, my name is Andrew Rogala. Thanks for checking out my Portfolio site;
				I am glad you found me! Below you can learn more
				about me, my skill levels in core Web Development Technologies,
				my educational and work experience, and most importanly what drives me to
				the exciting field of Web and Software Development!</p>
			</div>
			<section>
				<div className="skills">
					<p className="skills__tip">Click the icons to see my skill levels</p>
					<div className="skills__levelbox" data-aos="slide-left">
						<div className="skills__level"></div>
						<div className="skills__level"><span>Beginner</span></div>
						<div className="skills__level"><span>Novice</span></div>
						<div className="skills__level"><span>Intermediate</span></div>
						<div className="skills__level"><span>Advanced</span></div>
						<div className="skills__level"><span>Expert</span></div>
					</div>
					<div className="skills__imgbox" data-aos="slide-left">
						<div className="skills__imgdiv"><img src={JS}   alt="JavaScript"/></div>
						<div className="skills__imgdiv"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv"></div>
					</div>
					<div className="skills__imgbox" data-aos="slide-left">
						<div className="skills__imgdiv"><img src={CSS}  alt="CSS"/></div>
						<div className="skills__imgdiv"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv"></div>
					</div>
					<div className="skills__imgbox" data-aos="slide-left">
						<div className="skills__imgdiv"><img src={SASS} alt="SASS"/></div>
						<div className="skills__imgdiv"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv"></div>
						<div className="skills__imgdiv"></div>
					</div>
					<div className="skills__imgbox" data-aos="slide-left">
						<div className="skills__imgdiv"><img src={HTML} alt="HTML"/></div>
						<div className="skills__imgdiv"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv"></div>
					</div>
					<div className="skills__imgbox" data-aos="slide-left">
						<div className="skills__imgdiv"><span>ReactJS</span></div>
						<div className="skills__imgdiv"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv"></div>
						<div className="skills__imgdiv"></div>
					</div>
					<div className="skills__imgbox" data-aos="slide-left">
						<div className="skills__imgdiv"><span>GatsbyJS Static Site Generator</span></div>
						<div className="skills__imgdiv"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv"></div>
						<div className="skills__imgdiv"></div>
					</div>
					<div className="skills__imgbox" data-aos="slide-left">
						<div className="skills__imgdiv"><span>Git and GitHub</span></div>
						<div className="skills__imgdiv"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv"></div>
						<div className="skills__imgdiv"></div>
					</div>
					<div className="skills__imgbox" data-aos="slide-left">
						<div className="skills__imgdiv"><span>Linux OS</span></div>
						<div className="skills__imgdiv"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv"></div>
						<div className="skills__imgdiv"></div>
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default About;
// <div dangerouslySetInnerHTML={{ __html: content.html }}></div>
//query just the about me page
export const query = graphql`
	query {
		allMarkdownRemark(filter: {frontmatter: {title: {eq:"About Me"}}}) {
			edges {
				node {
					html
				}
			}
		}
	}
`
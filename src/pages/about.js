import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

import avatar from '../img/avatar.svg';
import JS from '../img/JS.png';
import CSS from '../img/CSS.png';
import SASS from '../img/sass.svg';
import HTML from '../img/HTML.png';

import Star from '../img/star.svg';
import Cap from '../img/universityCap.svg';

import AOS from 'aos';
import 'aos/dist/aos.css';

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
					<h3 className="skills__title">Skills</h3>
					<div className="skills__levelbox" data-aos="slide-left" data-aos-easing="ease-in-out-back">
						<div className="skills__level"></div>
						<div className="skills__level"><span>Beginner</span></div>
						<div className="skills__level"><span>Novice</span></div>
						<div className="skills__level"><span>Intermediate</span></div>
						<div className="skills__level"><span>Advanced</span></div>
						<div className="skills__level"><span>Expert</span></div>
					</div>
					<div className="skills__imgbox" data-aos="slide-left" data-aos-easing="ease-in-out-back">
						<div className="skills__imgdiv"><img src={JS}   alt="JavaScript"/></div>
						<div className="skills__imgdiv" data-aos="slide-left" data-aos-delay="350" data-aos-easing="ease-in-out-back"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv" data-aos="slide-left" data-aos-delay="350" data-aos-easing="ease-in-out-back"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv" data-aos="slide-left" data-aos-delay="350" data-aos-easing="ease-in-out-back"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv" data-aos="slide-left" data-aos-delay="350" data-aos-easing="ease-in-out-back"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv" data-aos="slide-left" data-aos-delay="350" data-aos-easing="ease-in-out-back"></div>
					</div>
					<div className="skills__imgbox" data-aos="slide-left" data-aos-easing="ease-in-out-back">
						<div className="skills__imgdiv"><img src={CSS}  alt="CSS"/></div>
						<div className="skills__imgdiv" data-aos="slide-left" data-aos-delay="350" data-aos-easing="ease-in-out-back"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv" data-aos="slide-left" data-aos-delay="350" data-aos-easing="ease-in-out-back"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv" data-aos="slide-left" data-aos-delay="350" data-aos-easing="ease-in-out-back"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv" data-aos="slide-left" data-aos-delay="350" data-aos-easing="ease-in-out-back"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv" data-aos="slide-left" data-aos-delay="350" data-aos-easing="ease-in-out-back"></div>
					</div>
					<div className="skills__imgbox" data-aos="slide-left" data-aos-easing="ease-in-out-back">
						<div className="skills__imgdiv"><img src={SASS} alt="SASS"/></div>
						<div className="skills__imgdiv" data-aos="slide-left" data-aos-delay="350" data-aos-easing="ease-in-out-back"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv" data-aos="slide-left" data-aos-delay="350" data-aos-easing="ease-in-out-back"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv" data-aos="slide-left" data-aos-delay="350" data-aos-easing="ease-in-out-back"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv" data-aos="slide-left" data-aos-delay="350" data-aos-easing="ease-in-out-back"></div>
						<div className="skills__imgdiv" data-aos="slide-left" data-aos-delay="350" data-aos-easing="ease-in-out-back"></div>
					</div>
					<div className="skills__imgbox" data-aos="slide-left" data-aos-easing="ease-in-out-back">
						<div className="skills__imgdiv"><img src={HTML} alt="HTML"/></div>
						<div className="skills__imgdiv" data-aos="slide-left" data-aos-delay="350" data-aos-easing="ease-in-out-back"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv" data-aos="slide-left" data-aos-delay="350" data-aos-easing="ease-in-out-back"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv" data-aos="slide-left" data-aos-delay="350" data-aos-easing="ease-in-out-back"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv" data-aos="slide-left" data-aos-delay="350" data-aos-easing="ease-in-out-back"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv" data-aos="slide-left" data-aos-delay="350" data-aos-easing="ease-in-out-back"></div>
					</div>
					<div className="skills__imgbox" data-aos="slide-left" data-aos-easing="ease-in-out-back">
						<div className="skills__imgdiv"><span>ReactJS</span></div>
						<div className="skills__imgdiv" data-aos="slide-left" data-aos-delay="350" data-aos-easing="ease-in-out-back"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv" data-aos="slide-left" data-aos-delay="350" data-aos-easing="ease-in-out-back"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv" data-aos="slide-left" data-aos-delay="350" data-aos-easing="ease-in-out-back"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv" data-aos="slide-left" data-aos-delay="350" data-aos-easing="ease-in-out-back"></div>
						<div className="skills__imgdiv" data-aos="slide-left" data-aos-delay="350" data-aos-easing="ease-in-out-back"></div>
					</div>
					<div className="skills__imgbox" data-aos="slide-left" data-aos-easing="ease-in-out-back">
						<div className="skills__imgdiv"><span>GatsbyJS Static Site Generator</span></div>
						<div className="skills__imgdiv" data-aos="slide-left" data-aos-delay="350" data-aos-easing="ease-in-out-back"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv" data-aos="slide-left" data-aos-delay="350" data-aos-easing="ease-in-out-back"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv" data-aos="slide-left" data-aos-delay="350" data-aos-easing="ease-in-out-back"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv" data-aos="slide-left" data-aos-delay="350" data-aos-easing="ease-in-out-back"></div>
						<div className="skills__imgdiv" data-aos="slide-left" data-aos-delay="350" data-aos-easing="ease-in-out-back"></div>
					</div>
					<div className="skills__imgbox" data-aos="slide-left" data-aos-easing="ease-in-out-back">
						<div className="skills__imgdiv"><span>Git and GitHub</span></div>
						<div className="skills__imgdiv" data-aos="slide-left" data-aos-delay="350" data-aos-easing="ease-in-out-back"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv" data-aos="slide-left" data-aos-delay="350" data-aos-easing="ease-in-out-back"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv" data-aos="slide-left" data-aos-delay="350" data-aos-easing="ease-in-out-back"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv" data-aos="slide-left" data-aos-delay="350" data-aos-easing="ease-in-out-back"></div>
						<div className="skills__imgdiv" data-aos="slide-left" data-aos-delay="350" data-aos-easing="ease-in-out-back"></div>
					</div>
					<div className="skills__imgbox" data-aos="slide-left" data-aos-easing="ease-in-out-back">
						<div className="skills__imgdiv"><span>Linux OS</span></div>
						<div className="skills__imgdiv" data-aos="slide-left" data-aos-delay="350" data-aos-easing="ease-in-out-back"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv" data-aos="slide-left" data-aos-delay="350" data-aos-easing="ease-in-out-back"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv" data-aos="slide-left" data-aos-delay="350" data-aos-easing="ease-in-out-back"><img src={Star} alt="Star"/></div>
						<div className="skills__imgdiv" data-aos="slide-left" data-aos-delay="350" data-aos-easing="ease-in-out-back"></div>
						<div className="skills__imgdiv" data-aos="slide-left" data-aos-delay="350" data-aos-easing="ease-in-out-back"></div>
					</div>
				</div>
			</section>
			<section>
				<div className="education" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
					<h3 className="education__title">Education</h3>
					<div className="education__imgdiv"><img className="education__img" src={Cap} alt="graduation cap"/></div>
					<ul className="education__list">
						<li><span>Montclair State University</span>
							<ul className="education__subList" data-aos="slide-right" data-aos-delay="600">
								<li>Bachelor Of Science</li>
								<li>Mathematics: Concentration in Statistics</li>
								<li>GPA: 3.98/4.0</li>
							</ul>
						</li>
						<li><span>County College of Morris</span>
							<ul className="education__subList" data-aos="slide-right" data-aos-delay="600">
								<li>Associate of Science</li>
								<li>Engineering</li>
								<li>GPA: 3.6/4.0</li>
							</ul>
						</li>
					</ul>
					<ul className="education__list">
						<li><span>Notable Course Work</span>
							<ul className="education__subList" data-aos="slide-right" data-aos-delay="600">
								<li>OOP Java 1 - 2</li>
								<li>Data Mining: R programming Language</li>
							</ul>
						</li>
					</ul>
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
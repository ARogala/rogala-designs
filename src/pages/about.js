import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

import avatar from '../img/avatar.svg';
import JS from '../img/JS.png';
import CSS from '../img/CSS.png';
import SASS from '../img/sass.svg';
import HTML from '../img/HTML.png';

import Star from '../img/star.svg';

function showStars(str) {
	//console.log(document.getElementsByClassName('skills__starJS'));
	switch(str) {
		case 'JS':
			const starJS = document.getElementsByClassName('skills__starJS');
			for(let i = 0; i < starJS.length; i++) {
				if(starJS[i].style.display === 'none') {
					starJS[i].setAttribute("style", "display: initial");
				}
				else {
					starJS[i].setAttribute("style", "display: none");
				}
			}
			break;
		case 'CSS':
			const starCSS = document.getElementsByClassName('skills__starCSS');
			for(let i = 0; i < starCSS.length; i++) {
				if(starCSS[i].style.display === 'none') {
					starCSS[i].setAttribute("style", "display: initial");
				}
				else {
					starCSS[i].setAttribute("style", "display: none");
				}
			}
			break;
		case 'SASS':
			const starSASS = document.getElementsByClassName('skills__starSASS');
			for(let i = 0; i < starSASS.length; i++) {
				if(starSASS[i].style.display === 'none') {
					starSASS[i].setAttribute("style", "display: initial");
				}
				else {
					starSASS[i].setAttribute("style", "display: none");
				}
			}
			break;
		case 'HTML':
			const starHTML = document.getElementsByClassName('skills__starHTML');
			for(let i = 0; i < starHTML.length; i++) {
				if(starHTML[i].style.display === 'none') {
					starHTML[i].setAttribute("style", "display: initial");
				}
				else {
					starHTML[i].setAttribute("style", "display: none");
				}
			}
			break;
		case 'REACT':
			const starREACT = document.getElementsByClassName('skills__starREACT');
			for(let i = 0; i < starREACT.length; i++) {
				if(starREACT[i].style.display === 'none') {
					starREACT[i].setAttribute("style", "display: initial");
				}
				else {
					starREACT[i].setAttribute("style", "display: none");
				}
			}
			break;
		case 'GATSBY':
			const starGATSBY = document.getElementsByClassName('skills__starGATSBY');
			for(let i = 0; i < starGATSBY.length; i++) {
				if(starGATSBY[i].style.display === 'none') {
					starGATSBY[i].setAttribute("style", "display: initial");
				}
				else {
					starGATSBY[i].setAttribute("style", "display: none");
				}
			}
			break;
		case 'GIT':
			const starGIT = document.getElementsByClassName('skills__starGIT');
			for(let i = 0; i < starGIT.length; i++) {
				if(starGIT[i].style.display === 'none') {
					starGIT[i].setAttribute("style", "display: initial");
				}
				else {
					starGIT[i].setAttribute("style", "display: none");
				}
			}
			break;
		case 'LINUX':
			const starLINUX = document.getElementsByClassName('skills__starLINUX');
			for(let i = 0; i < starLINUX.length; i++) {
				if(starLINUX[i].style.display === 'none') {
					starLINUX[i].setAttribute("style", "display: initial");
				}
				else {
					starLINUX[i].setAttribute("style", "display: none");
				}
			}
			break;
		default:
			console.log('error parameter not matching case.');
	}
}

function About({data}) {
	//console.log(data.allMarkdownRemark.edges[0].node);
	//const content = data.allMarkdownRemark.edges[0].node;
	return (
		<Layout>
			<div className="avatarbox">
				<img className="avatar" src={avatar} alt="avatar" />
				<h3 className="heading-tertiary">Welcome</h3>
				<p>Hi, my name is Andrew Rogala. Thanks for checking out my Portfolio site;
				I am glad you found me! Below you can interact with my site to learn more
				about me, my skill levels in core Web Development Technologies,
				my educational and work experience, and most importanly what drives me to
				the exciting field of Web and Software Development!</p>
			</div>
			<section>
				<div className="skills">
					<p className="skills__tip">Click the icons to see my skill levels</p>
					<div className="skills__levelbox">
						<div className="skills__level"></div>
						<div className="skills__level"><span>Beginner</span></div>
						<div className="skills__level"><span>Novice</span></div>
						<div className="skills__level"><span>Intermediate</span></div>
						<div className="skills__level"><span>Advanced</span></div>
						<div className="skills__level"><span>Expert</span></div>
					</div>
					<div className="skills__imgbox">
						<div className="skills__imgdiv"><img className="skills__btn" onClick={() => showStars('JS')} onKeyPress={() => showStars('JS')} src={JS} tabIndex="0" alt="JavaScript"/></div>
						<div className="skills__imgdiv"><img className="skills__starJS" src={Star} alt="Star" style={{display:'none'}}/></div>
						<div className="skills__imgdiv"><img className="skills__starJS" src={Star} alt="Star" style={{display:'none'}}/></div>
						<div className="skills__imgdiv"><img className="skills__starJS" src={Star} alt="Star" style={{display:'none'}}/></div>
						<div className="skills__imgdiv"><img className="skills__starJS" src={Star} alt="Star" style={{display:'none'}}/></div>
						<div className="skills__imgdiv"></div>
					</div>
					<div className="skills__imgbox">
						<div className="skills__imgdiv"><img className="skills__btn" onClick={() => showStars('CSS')} onKeyPress={() => showStars('CSS')} src={CSS} tabIndex="0" alt="CSS"/></div>
						<div className="skills__imgdiv"><img className="skills__starCSS" src={Star} alt="Star" style={{display:'none'}}/></div>
						<div className="skills__imgdiv"><img className="skills__starCSS" src={Star} alt="Star" style={{display:'none'}}/></div>
						<div className="skills__imgdiv"><img className="skills__starCSS" src={Star} alt="Star" style={{display:'none'}}/></div>
						<div className="skills__imgdiv"><img className="skills__starCSS" src={Star} alt="Star" style={{display:'none'}}/></div>
						<div className="skills__imgdiv"></div>
					</div>
					<div className="skills__imgbox">
						<div className="skills__imgdiv"><img className="skills__btn" onClick={() => showStars('SASS')} onKeyPress={() => showStars('SASS')} src={SASS} tabIndex="0" alt="SASS"/></div>
						<div className="skills__imgdiv"><img className="skills__starSASS" src={Star} alt="Star" style={{display:'none'}}/></div>
						<div className="skills__imgdiv"><img className="skills__starSASS" src={Star} alt="Star" style={{display:'none'}}/></div>
						<div className="skills__imgdiv"><img className="skills__starSASS" src={Star} alt="Star" style={{display:'none'}}/></div>
						<div className="skills__imgdiv"></div>
						<div className="skills__imgdiv"></div>
					</div>
					<div className="skills__imgbox">
						<div className="skills__imgdiv"><img className="skills__btn" onClick={() => showStars('HTML')} onKeyPress={() => showStars('HTML')} src={HTML}  tabIndex="0" alt="HTML"/></div>
						<div className="skills__imgdiv"><img className="skills__starHTML" src={Star} alt="Star" style={{display:'none'}}/></div>
						<div className="skills__imgdiv"><img className="skills__starHTML" src={Star} alt="Star" style={{display:'none'}}/></div>
						<div className="skills__imgdiv"><img className="skills__starHTML" src={Star} alt="Star" style={{display:'none'}}/></div>
						<div className="skills__imgdiv"><img className="skills__starHTML" src={Star} alt="Star" style={{display:'none'}}/></div>
						<div className="skills__imgdiv"></div>
					</div>
					<div className="skills__imgbox">
						<div className="skills__imgdiv"><span className="skills__btn" onClick={() => showStars('REACT')} onKeyPress={() => showStars('REACT')} tabIndex="0">ReactJS</span></div>
						<div className="skills__imgdiv"><img  className="skills__starREACT" src={Star} alt="Star" style={{display:'none'}}/></div>
						<div className="skills__imgdiv"><img  className="skills__starREACT" src={Star} alt="Star" style={{display:'none'}}/></div>
						<div className="skills__imgdiv"><img  className="skills__starREACT" src={Star} alt="Star" style={{display:'none'}}/></div>
						<div className="skills__imgdiv"></div>
						<div className="skills__imgdiv"></div>
					</div>
					<div className="skills__imgbox">
						<div className="skills__imgdiv"><span className="skills__btn" onClick={() => showStars('GATSBY')} onKeyPress={() => showStars('GATSBY')} tabIndex="0">GatsbyJS Static Site Generator</span></div>
						<div className="skills__imgdiv"><img  className="skills__starGATSBY" src={Star} alt="Star" style={{display:'none'}}/></div>
						<div className="skills__imgdiv"><img  className="skills__starGATSBY" src={Star} alt="Star" style={{display:'none'}}/></div>
						<div className="skills__imgdiv"><img  className="skills__starGATSBY" src={Star} alt="Star" style={{display:'none'}}/></div>
						<div className="skills__imgdiv"></div>
						<div className="skills__imgdiv"></div>
					</div>
					<div className="skills__imgbox">
						<div className="skills__imgdiv"><span className="skills__btn" onClick={() => showStars('GIT')} onKeyPress={() => showStars('GIT')} tabIndex="0">Git and GitHub</span></div>
						<div className="skills__imgdiv"><img  className="skills__starGIT" src={Star} alt="Star" style={{display:'none'}}/></div>
						<div className="skills__imgdiv"><img  className="skills__starGIT" src={Star} alt="Star" style={{display:'none'}}/></div>
						<div className="skills__imgdiv"><img  className="skills__starGIT" src={Star} alt="Star" style={{display:'none'}}/></div>
						<div className="skills__imgdiv"></div>
						<div className="skills__imgdiv"></div>
					</div>
					<div className="skills__imgbox">
						<div className="skills__imgdiv"><span className="skills__btn" onClick={() => showStars('LINUX')} onKeyPress={() => showStars('LINUX')} tabIndex="0">Linux OS</span></div>
						<div className="skills__imgdiv"><img  className="skills__starLINUX" src={Star} alt="Star" style={{display:'none'}}/></div>
						<div className="skills__imgdiv"><img  className="skills__starLINUX" src={Star} alt="Star" style={{display:'none'}}/></div>
						<div className="skills__imgdiv"><img  className="skills__starLINUX" src={Star} alt="Star" style={{display:'none'}}/></div>
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
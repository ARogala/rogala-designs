
exports.onRouteUpdate = ({location}) => {
	if(location.pathname === '/') {
		const text = [`Hi, My name is Andrew! I am a Full-Stack Web developer specializing in React, JavaScript, and NodeJS. I love making custom web sites, blogs, and web apps. Check out some of my work below!`];
		const paragraph = document.getElementById('typewriter');

		let i = 0;
		function timeTypeWriter() {
			setTimeout(typeWriter, 50);
		}

		function typeWriter() {
			paragraph.innerHTML += text[0].charAt(i);
			i++;
			if(i < text[0].length) {
				timeTypeWriter();
			}
		}
		timeTypeWriter();
	}
}

//syntax highlighting theme
require("./src/styles/prism-coy-modify.css");
// add line numbers
require("./src/styles/prism-line-numbers-modify.css");
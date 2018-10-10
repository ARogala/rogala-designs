module.exports = {
	siteMetadata: {
		title: `Rogala Designs`,
		description: 'Portfolio Site and Web Development Blog of Andrew Rogala'
	},
	plugins: [
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'src',
				path: `${__dirname}/src/`
			}
		},

		`gatsby-plugin-sass`,
		`gatsby-transformer-remark`
	]
}
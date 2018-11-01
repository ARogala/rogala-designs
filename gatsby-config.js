module.exports = {
	siteMetadata: {
		title: `Rogala Designs`,
		description: 'Rogala Designs Front-End Development: Portfolio Site and Web Development Blog of Andrew Rogala'
	},
	plugins: [
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'src',
				path: `${__dirname}/src/`
			}
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 1000,
							linkImagesToOriginal: false,
							quality: 100,
						}
					}
				]
			}
		},

		`gatsby-plugin-sass`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-netlify-cms`
	]
}
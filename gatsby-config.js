/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)



module.exports = {
  siteMetadata: {
    title: "Alex Klavens",
    description: "I’m a recent graduate of Connecticut College with a degree in Computer Science and Government. I have experience in radio and print journalism, political research, data analysis, and software development. \nNow I’m looking for software development opportunities at the intersection of technology, journalism, and politics.",
  },
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images/`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/tcvMarkdown`,
        name: `tcvMarkdown`,
      },
    },
  `gatsby-transformer-remark`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`
  ],
}

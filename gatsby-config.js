/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)



module.exports = {
  siteMetadata: {
    title: "Alex Klavens",
    description: "Personal Website of Alex Klavens",
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
    {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          // replace "UA-XXXXXXXXX-X" with your own Tracking ID
          trackingId: "UA-117106308-1",
        },
    },
  `gatsby-transformer-remark`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`
  ],
}

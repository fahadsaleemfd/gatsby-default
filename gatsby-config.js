/**
 * @type {import('gatsby').GatsbyConfig}
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

console.log('STRAPI_API_URL:', process.env.STRAPI_API_URL)
console.log('STRAPI_API_URL during build:', process.env.STRAPI_API_URL)

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL || 'http://localhost:1337',
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: ['story', 'service', 'campaign'],
  singleTypes: [
    'hero',
    'footer',
    'about',
    'storyvideo',
    'serviceimage',
    'formimage',
  ],
  remoteFileHeaders: {
    Referer: 'https://your-site-domain/',
  },
}

module.exports = {
  siteMetadata: {
    title: `Scrum HR`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-strapi',
      options: strapiConfig,
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'videos',
        path: './src/images/',
      },
      __key: 'videos',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    'gatsby-transformer-remark', // Add gatsby-transformer-remark for Markdown support
    'gatsby-transformer-ffmpeg',
    'gatsby-plugin-ffmpeg',
    // ... (other gatsby-transformer-remark options and configurations if needed)
  ],
}

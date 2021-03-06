require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
}

// if you want to use the preview API please define
// CONTENTFUL_HOST in your environment config
// the `host` property should map to `preview.contentful.com`
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  )
}

module.exports = {
  siteMetadata: {
    siteUrl: `https://matthias.grieder.info/`,
    title: `Matthias Grieder, Designer`,
    description: `I aim to create best user experience for all my clients and projects.`,
    author: `@zeitvertrieb`,
  },
  pathPrefix: `/matthias`,
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-next-seo`,
      options: {
        openGraph: {
          type: 'website',
          locale: 'en',
          url: 'https://matthias.grieder.info/',
          site_name: 'Matthias Grieder, Designer',
        },
        twitter: {
          handle: '@zeitvertrieb',
          site: '@zeitvertrieb',
          cardType: 'summary_large_image',
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Matthias Grieder, Designer`,
        short_name: `Design`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#373F49`,
        display: `minimal-ui`,
        icon: `static/apple-touch-icon.png`,
      }
    }
  ]
}

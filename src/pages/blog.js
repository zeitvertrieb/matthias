import React from 'react'
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { BlogJsonLd } from 'gatsby-plugin-next-seo'
import get from 'lodash/get'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

import stylesHero from '../components/hero.module.css'

const BlogIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allContentfulBlogPost.edges

  return (
    <Layout>
      <Helmet title={`Commentary – ` + siteTitle}>
        <html lang="en" />
        <meta name="description" content="Commentary on design topics by Matthias." />
      </Helmet>
      <BlogJsonLd
        url='https://matthias.grieder.info/blog'
        headline='Commentary'
        authorName='Matthias Grieder'
        description='Commentary on design topics by Matthias.'
      />
      <div className="wrapper">
        <h1 style={{ margin: 0 }}>Commentary</h1>
        <h2 className={stylesHero.heroTitle}>
          By <Link to="/experience">Matthias Grieder</Link>
        </h2>
      </div>
      <div className="wrapper">
        <ul className="article-list">
          {posts.map(({ node }) => {
            return (
              <li key={node.slug}>
                <ArticlePreview article={node} />
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`

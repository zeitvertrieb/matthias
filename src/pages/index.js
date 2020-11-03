import React from 'react'
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

const RootIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allContentfulBlogPost.edges
  const [author] = data.allContentfulPerson.edges

  return (
    <Layout>
      <Helmet title={siteTitle} />
      <div className="wrapper">
        <Hero data={author.node} />
        <p>
          Get some background information{' '}
          <Link to="/experience/">about my experience</Link>. Follow{' '}
          <Link to="/blog/">my commentary</Link> to understand my passion.
        </p>
      </div>
      <div className="wrapper">
        <h2 className="section-headline">Recent commentary</h2>
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

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(
      limit: 2
      sort: { fields: [publishDate], order: DESC }
    ) {
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
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          email
          phone
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(maxWidth: 600, maxHeight: 600, resizingBehavior: PAD) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

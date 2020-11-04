import React from 'react'
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import heroStyles from '../components/hero.module.css'
import navStyles from '../components/navigation.module.css'
import styles from './blog-post.module.css'

const BlogPostTemplate = ({ data, pageContext }) => {
  const siteTitle = data.site.siteMetadata.title
  const post = data.contentfulBlogPost
  const { previous, next } = pageContext

  return (
    <Layout>
      <Helmet title={`${post.title} – a commentary by ${siteTitle}`} />
      <Link
        to="/blog"
        className={navStyles.navigationButton}
        style={{ top: '5vmin', left: '5vmin', right: 'auto', zIndex: 4 }}
      >
        <span className={navStyles.navigationBackIcon} />
        <span className="sr-only">Back</span>
      </Link>
      <div className={heroStyles.hero}>
        <Img
          className={heroStyles.heroImage}
          alt={post.title}
          fluid={post.heroImage.fluid}
        />
      </div>
      <article className="wrapper">
        <time>{post.publishDate}</time>
        <h1 className={styles.articleTitle} style={{ paddingTop: '2rem' }}>
          {post.title}
        </h1>
        <p
          dangerouslySetInnerHTML={{
            __html: post.description.childMarkdownRemark.html,
          }}
        />
        <div
          dangerouslySetInnerHTML={{
            __html: post.body.childMarkdownRemark.html,
          }}
        />
      </article>
      <nav className={`wrapper ` + styles.navigation}>
        {next && (
          <div className={styles.navigationLink}>
            <span className={styles.navigationTitle}>Next commentary</span>
            <Link to={`/blog/${next.slug}/`}>{next.title}</Link>
          </div>
        )}
        {previous && (
          <div className={styles.navigationLink}>
            <span className={styles.navigationTitle}>Previously</span>
            <Link to={`/blog/${previous.slug}/`}>{previous.title}</Link>
          </div>
        )}
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      tags
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      description {
        childMarkdownRemark {
          html
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

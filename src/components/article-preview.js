import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ article }) => {
  return (
      <section className={styles.preview}>
        <Link
          to={`/blog/${article.slug}`}
          state={{ modal: true }}
          className={styles.previewImage}
        >
          <Img alt="" fluid={article.heroImage.fluid} />
        </Link>
        <div>
          <h3 className={styles.previewTitle}>
            <Link to={`/blog/${article.slug}`}>{article.title}</Link>
          </h3>
          <div className="sr-only">
            <small>{article.publishDate}</small>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: article.description.childMarkdownRemark.html,
            }}
          />
          <footer className={styles.previewFooter}>
            {article.tags &&
              article.tags.map((tag) => (
                <p className={styles.tag} key={tag}>
                  {tag}
                </p>
              ))}
          </footer>
        </div>
      </section>
  )
}

import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ article }) => (
  <section className={styles.preview}>
    <div>
      <header className={styles.previewHeader}>
        <div className={styles.tag}>
          <span>{article.timeStart}</span>
          {article.timeEnd ? <>{' – '}</> : <></>}
          <span>{article.timeEnd}</span>
        </div>
        <h3 className={styles.previewTitle} style={{ marginTop: 0 }}>
          {article.jobTitle}
        </h3>
      </header>
      <div>
        <small>{article.jobRole}</small>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: article.description.childMarkdownRemark.html,
        }}
      />
      {article.weblink ? (
        <footer className={styles.previewFooter}>
          <a href={article.weblink} target="_blank">
            {article.weblink}
          </a>
        </footer>
      ) : (
        <></>
      )}
    </div>
  </section>
)

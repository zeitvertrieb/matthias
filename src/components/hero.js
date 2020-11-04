import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './hero.module.css'

export default ({ data }) => (
  <header className={styles.hero}>
    <div className={styles.heroPerson}>
      <Link
        to="/"
        style={{ display: 'flex', marginRight: '5vmin', outline: 'none' }}
      >
        <Img
          className={styles.heroUser}
          alt={data.name}
          fluid={data.heroImage.fluid}
        />
      </Link>
      <div>
        <h1 className={styles.heroHeadline}>{data.name}</h1>
        <h2 className={styles.heroTitle}>
          {data.title}, <a href={'mailto:' + data.email}>{data.email}</a>
        </h2>
      </div>
    </div>
    <p className={styles.heroDetails}>{data.shortBio.shortBio}</p>
  </header>
)

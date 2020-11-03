import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import stylesHero from '../components/hero.module.css'

const ErrorIndex = () => {
  return (
    <Layout>
      <Helmet title="Page not found." />
      <div className="wrapper">
        <header className={stylesHero.hero}>
          <div className={stylesHero.heroPerson}>
            <Link
              to="/"
              tabIndex="3"
              style={{ display: 'flex', marginRight: '5vmin', outline: 'none' }}
            >
              <picture className={stylesHero.heroUser}>
                <source srcset="/404.webp" type="image/webp" />
                <source srcset="/404.gif" type="image/gif" />
                <img src="/404.gif" alt="Error 404" />
              </picture>
            </Link>
            <div>
              <h1 style={{ margin: 0 }}>Congratulation!</h1>
              <h2 className={stylesHero.heroTitle}>
                You just found something that is not here.
              </h2>
            </div>
          </div>
          <p className={stylesHero.heroDetails}>
            <Link to="/">Back to Home</Link>
          </p>
        </header>
      </div>
    </Layout>
  )
}

export default ErrorIndex

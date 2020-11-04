import React, { useState } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { ThemeProvider } from './themeContext'
import ThemeToggle from './themeToggle'

import styles from './navigation.module.css'

const Navigation = () => {
  const [isShown, setIsShown] = useState(false)

  const data = useStaticQuery(graphql`
    query NavigationQuery {
      contentfulPerson {
        name
        title
        email
        phone
        linkedin
      }
    }
  `)

  return (
    <>
      <button
        id="navToggle"
        type="button"
        className={styles.navigationButton}
        data-active={isShown ? 'true' : 'false'}
        onClick={() => setIsShown(!isShown)}
      >
        <span className={styles.navigationToggleIcon} />
        <span className="sr-only">Menu</span>
      </button>

      <div
        id="nav"
        className={styles.navigationDrawer}
        style={{ right: isShown ? '0' : '' }}
      >
        <div className={styles.navigationInner}>
          <div className={styles.navigationTitle}>
            <h3>Navigation</h3>
          </div>
          <nav role="navigation">
            <ul className={styles.navigation}>
              <li
                className={styles.navigationItem}
                onClick={() => setIsShown(!isShown)}
              >
                <Link to="/">Home</Link>
              </li>
              <li
                className={styles.navigationItem}
                onClick={() => setIsShown(!isShown)}
              >
                <Link to="/experience/">Experience</Link>
              </li>
              <li
                className={styles.navigationItem}
                onClick={() => setIsShown(!isShown)}
              >
                <Link to="/blog/">Commentary</Link>
              </li>
            </ul>
          </nav>
          <div className={styles.navigationTitle}>
            <h3>Contact</h3>
          </div>
          <ul className={styles.navigation}>
            <li
              className={styles.navigationItem}
              onClick={() => setIsShown(!isShown)}
            >
              <a href={'mailto:' + data.contentfulPerson.email}>
                <span>{data.contentfulPerson.email}</span>
              </a>
            </li>
            <li
              className={styles.navigationItem}
              onClick={() => setIsShown(!isShown)}
            >
              <a href={'tel:' + data.contentfulPerson.phone}>
                <span>{data.contentfulPerson.phone}</span>
              </a>
            </li>
            <li className={styles.navigationItem}>
              <a
                href={data.contentfulPerson.linkedin}
                target="_blank"
                rel="noopener"
                rel="noreferrer"
              >
                <ion-icon
                  size="large"
                  name="logo-linkedin"
                  style={{ margin: '.5rem 0 0' }}
                />
                <span className="sr-only">LinkedIn</span>
              </a>
            </li>
          </ul>
          <footer className={styles.navigationFooter}>
            <div>
              {data.contentfulPerson.name}, {data.contentfulPerson.title}
            </div>
            <small>© {new Date().getFullYear()}</small>
          </footer>
        </div>
      </div>
      <div
        className={styles.navigationBackdrop}
        onClick={() => setIsShown(!isShown)}
        style={{
          display: isShown ? 'block' : 'none',
          animationName: isShown ? 'fadeIn' : 'fadeOut',
        }}
      />
    </>
  )
}

export default Navigation

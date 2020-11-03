import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import styles from './toggle.module.css'

const ThemeToggle = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <label id="themeToggle" tabIndex="3" className={styles.switch}>
          <input
            type="checkbox"
            className="sr-only"
            onChange={(e) => toggleTheme(e.target.checked ? 'dark' : 'light')}
            checked={theme === 'dark'}
          />{' '}
          <ion-icon size="large" name="contrast"></ion-icon>
          <span className="sr-only">Switch Theme</span>
        </label>
      )}
    </ThemeToggler>
  )
}

export default ThemeToggle

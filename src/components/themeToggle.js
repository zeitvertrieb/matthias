import React from 'react'
import { ThemeContext } from './themeContext'
import styles from './toggle.module.css'

const ThemeToggle = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  if (!colorMode) {
    return null;
  }

  return (
    <label className={styles.switch}>
      <input
        id="dark"
        type="checkbox"
        className="sr-only"
        checked={colorMode === 'dark'}
        onChange={ev => {
          setColorMode(ev.target.checked ? 'dark' : 'light');
        }}
      />{' '}
      <ion-icon size="large" name="contrast" />
      <span className="sr-only">Dark Theme</span>
    </label>
  );
};

export default ThemeToggle

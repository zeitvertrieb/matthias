import React from 'react'
import PropTypes from 'prop-types'
import base from './base.css'
import Container from './container'
import Navigation from './navigation'
import { ThemeProvider } from './themeContext';
import ThemeToggle from './themeToggle'

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <Container>
        {children}
        <ThemeToggle />
        <Navigation />
      </Container>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

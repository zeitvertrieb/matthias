import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from './themeContext'
import ThemeToggle from './themeToggle'
import Container from './container'
import Navigation from './navigation'

import base from './base.css'

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <Container>
        <Navigation />
        <ThemeToggle />
        {children}
      </Container>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

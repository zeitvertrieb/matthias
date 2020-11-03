import React from 'react'
import PropTypes from 'prop-types'
import base from './base.css'
import Container from './container'
import Navigation from './navigation'
import ThemeToggle from './themeToggle'

const Layout = ({ children }) => {
  return (
    <Container>
      {children}
      <Navigation />
      <ThemeToggle />
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

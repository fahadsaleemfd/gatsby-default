// layout.js
import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/GlobalStyles'
import Typography from './styles/Typography'
import { theme } from './styles/Theme'
// import { PageStyles } from './styles/PageStyles';

import './styles/iconFont.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const siteTitle = data.site.siteMetadata.title

  return (
    <ThemeProvider theme={theme}>
      <>
        <Head title={siteTitle} />
        <GlobalStyles />
        <Typography />
        {children}
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

// Define Head function to set the title
const Head = ({ title }) => <title>{title}</title>

export default Layout

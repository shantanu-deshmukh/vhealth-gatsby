import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Services from "../components/services"
import AboutPanel from "../components/about-panel"
import Testimonials from "../components/testimonials"
import Articles from "../components/articles"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import theme from "../theme"
import AppsPanel from "../components/apps-panel"

const IndexPage = () => (
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <SEO title="Home" />
        <Hero />
        <Services />
        <AboutPanel />
        <AppsPanel />
        {/* <Testimonials /> */}
        <Articles />
      </Layout>
    </ThemeProvider>
  </React.Fragment>
)

export default IndexPage

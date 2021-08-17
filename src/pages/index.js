import * as React from "react"
import { Layout, Seo, Hero } from "../components"
import { theme } from "dekked-design-system"
import { ThemeProvider } from "styled-components"

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Seo title="Dekked" />
      <Hero />
    </Layout>
  </ThemeProvider>
)

export default IndexPage

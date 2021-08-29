import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { NotFound } from "../components"
import { ThemeProvider } from "styled-components"
import { theme } from "dekked-design-system"

const NotFoundPage = () => {
  return (
    <ThemeProvider theme={theme()}>
      <Layout noFooterHeader>
        <Seo title="404: Not found" />
        <NotFound />
      </Layout>
    </ThemeProvider>
  )
}

export default NotFoundPage

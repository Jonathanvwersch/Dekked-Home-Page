import * as React from "react"
import { Layout, Seo, PrivacyPolicy } from "../components"
import { theme } from "dekked-design-system"
import { ThemeProvider } from "styled-components"

const Privacy = () => {
  return (
    <ThemeProvider theme={theme()}>
      <Layout>
        <Seo title="Privacy policy" />
        <PrivacyPolicy />
      </Layout>
    </ThemeProvider>
  )
}

export default Privacy

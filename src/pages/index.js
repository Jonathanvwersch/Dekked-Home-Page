import * as React from "react"
import {
  Layout,
  Seo,
  Hero,
  GetStarted,
  SignUp,
  MeetTheTeam,
} from "../components"
import { theme } from "dekked-design-system"
import { ThemeProvider } from "styled-components"

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Seo title="Dekked" />
      <Hero />
      <MeetTheTeam />
      <GetStarted />
      <SignUp />
    </Layout>
  </ThemeProvider>
)

export default IndexPage

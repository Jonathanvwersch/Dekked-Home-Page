import * as React from "react"
import {
  Layout,
  Seo,
  Hero,
  GetStarted,
  SignUp,
  MeetTheTeam,
  Testimonials,
  Features,
} from "../components"
import { theme } from "dekked-design-system"
import { ThemeProvider } from "styled-components"

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Seo title="Dekked" />
      <Hero />
      <GetStarted />
      <Features />
      <Testimonials />
      {/* <MeetTheTeam /> */}
      <SignUp />
    </Layout>
  </ThemeProvider>
)

export default IndexPage

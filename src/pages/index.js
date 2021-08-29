import * as React from "react"
import { Layout, Seo, Hero, GetStarted, SignUp, Features } from "../components"
import { theme } from "dekked-design-system"
import { ThemeProvider } from "styled-components"
import Cookies from "js-cookie"

const IndexPage = () => {
  const getSessionCookie = () => {
    const sessionCookie = Cookies.get("session")

    if (sessionCookie === undefined) {
      return undefined
    } else {
      return sessionCookie
    }
  }

  React.useLayoutEffect(() => {
    if (getSessionCookie()) {
      window.location.replace("https://app.dekked.com")
    }
  }, [])

  return (
    <ThemeProvider theme={theme()}>
      <Layout>
        <Seo title="Dekked" />
        <Hero />
        <GetStarted />
        <Features />
        <SignUp />
      </Layout>
    </ThemeProvider>
  )
}

export default IndexPage

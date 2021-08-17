import React, { useEffect, useState } from "react"
import Header from "./header"
import Footer from "./footer"
import { FullPageLoadingSpinner } from "dekked-design-system"
import GlobalStyle from "./GlobalStyles"

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <>
      <GlobalStyle />
      {loading ? (
        <FullPageLoadingSpinner />
      ) : (
        <>
          <Header />
          <main>{children}</main>
          <Footer />
        </>
      )}
    </>
  )
}

export default Layout

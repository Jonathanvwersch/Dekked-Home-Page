import React, { useEffect, useState } from "react"
import Header from "./header"
import Footer from "./footer"
import { FullPageLoadingSpinner } from "dekked-design-system"
import GlobalStyle from "./GlobalStyles"

const Layout = ({ children, noFooterHeader }) => {
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
          {!noFooterHeader && <Header />}
          <main>{children}</main>
          {!noFooterHeader && <Footer />}
        </>
      )}
    </>
  )
}

export default Layout

import React, { useEffect, useState } from "react"
import { Header, Footer, GlobalStyle } from "./"
import { FullPageLoadingSpinner } from "dekked-design-system"

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

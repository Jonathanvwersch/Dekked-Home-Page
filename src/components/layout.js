import React, { useEffect, useState } from "react"
import { Header, Footer, GlobalStyle } from "./"

const Layout = ({ children, noFooterHeader, privacyPolicy }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <>
      <GlobalStyle />
      {loading ? null : (
        <>
          {!noFooterHeader && <Header privacyPolicy={privacyPolicy} />}
          <main>{children}</main>
          {!noFooterHeader && <Footer />}
        </>
      )}
    </>
  )
}

export default Layout

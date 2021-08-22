import { useEffect, useState } from "react"

export const BREAKPOINT_SMALL = 800
export const BREAKPOINT_MEDIUM = 1000
export const BREAKPOINT_LARGE = 1200
export const LAYOUT_SMALL = "small"
export const LAYOUT_MEDIUM = "medium"
export const LAYOUT_LARGE = "large"

const useResponsiveLayout = () => {
  const appLayout = () => {
    if (window.innerWidth < BREAKPOINT_SMALL) return LAYOUT_SMALL
    else if (
      window.innerWidth < BREAKPOINT_MEDIUM &&
      window.innerWidth > BREAKPOINT_SMALL
    )
      return LAYOUT_MEDIUM
    else return LAYOUT_LARGE
  }
  const [layout, setLayout] = useState(appLayout())

  console.log(layout)

  useEffect(() => {
    const handleResize = () => setLayout(appLayout())
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [window.innerWidth])

  return layout
}

export default useResponsiveLayout

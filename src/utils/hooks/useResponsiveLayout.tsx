import { useEffect, useState } from "react"

export const BREAKPOINT_SMALL = 800
export const BREAKPOINT_MEDIUM = 1000
export const BREAKPOINT_LARGE = 1350

export const LAYOUT_SMALL = "small"
export const LAYOUT_MEDIUM = "medium"
export const LAYOUT_LARGE = "large"
export const LAYOUT_XLARGE = "xLarge"

const useResponsiveLayout = () => {
  const appLayout = () => {
    if (window) {
      if (window.innerWidth < BREAKPOINT_SMALL) return LAYOUT_SMALL
      else if (
        window.innerWidth >= BREAKPOINT_SMALL &&
        window.innerWidth < BREAKPOINT_MEDIUM
      )
        return LAYOUT_MEDIUM
      else if (
        window.innerWidth >= BREAKPOINT_MEDIUM &&
        window.innerWidth <= BREAKPOINT_LARGE
      )
        return LAYOUT_LARGE
      else return LAYOUT_XLARGE
    }
  }

  const [layout, setLayout] = useState(appLayout())

  useEffect(() => {
    const handleResize = () => setLayout(appLayout())
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [window.innerWidth])

  return layout
}

export default useResponsiveLayout

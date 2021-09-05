import React from "react"
import { useResponsiveLayout } from "../utils/hooks"

import { LAYOUT_MEDIUM, LAYOUT_SMALL } from "../utils/hooks/useResponsiveLayout"
import { TestimonialsHorizontal, TestimonialsVertical } from "./"

const Testimonials = () => {
  const layout = useResponsiveLayout()
  const isSmallOrMedium = layout === LAYOUT_SMALL || layout === LAYOUT_MEDIUM

  return !isSmallOrMedium ? (
    <TestimonialsHorizontal />
  ) : (
    <TestimonialsVertical />
  )
}

export default Testimonials

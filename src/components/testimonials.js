import React, { useContext } from "react"
import styled, { ThemeContext } from "styled-components"
import { Spacer, H2, Flex, Text, H3, ShadowCard } from "dekked-design-system"
import { useResponsiveLayout } from "../utils/hooks"
import QuoteMarkBig from "../assets/QuoteMarkBig.svg"
import QuoteMarkSmall from "../assets/QuoteMarkSmall.svg"

import { LAYOUT_MEDIUM, LAYOUT_SMALL } from "../utils/hooks/useResponsiveLayout"

const Testimonials = () => {
  const theme = useContext(ThemeContext)
  const layout = useResponsiveLayout()
  const isSmallOrMedium = layout === LAYOUT_SMALL || layout === LAYOUT_MEDIUM
  const isLayoutSmall = layout === LAYOUT_SMALL

  return (
    <Container id="team" isSmallOrMedium={isSmallOrMedium}>
      <Flex className="innerContainer" flexDirection="column">
        <H2
          textAlign="center"
          styledAs="h3"
          style={{ position: "relative", zIndex: "10" }}
        >
          We think you'll love Dekked
        </H2>
        <Spacer height={theme.spacers.size32} />
        <Text
          textAlign="center"
          as="p"
          fontSize={
            isLayoutSmall
              ? theme.typography.fontSizes.size18
              : theme.typography.fontSizes.size22
          }
        >
          But don't just take our word for it
        </Text>
      </Flex>
    </Container>
  )
}

const Container = styled.section`
  padding-bottom: ${({ theme }) => theme.spacers.size80};
  padding-top: ${({ theme }) => theme.spacers.size48};

  .QuoteMark {
    width: 100px !important;
  }

  h2::before {
    content: ${({ isSmallOrMedium }) =>
      `url(${isSmallOrMedium ? QuoteMarkSmall : QuoteMarkBig})`};
    position: absolute;
    left: ${({ isSmallOrMedium }) => (isSmallOrMedium ? "-20px" : "-60px")};
    top: ${({ isSmallOrMedium }) => (isSmallOrMedium ? "-16px" : "-32px")};
    z-index: -1;
  }

  background: linear-gradient(
    180deg,
    rgba(202, 245, 252, 1) 50%,
    rgba(255, 255, 255, 1) 100%
  );
`

export default Testimonials

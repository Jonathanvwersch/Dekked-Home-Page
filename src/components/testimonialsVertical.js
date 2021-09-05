import React, { useContext } from "react"
import styled, { ThemeContext } from "styled-components"
import { Spacer, H2, Flex, Text, ShadowCard } from "dekked-design-system"
import { useResponsiveLayout } from "../utils/hooks"
import QuoteMarkSmall from "../assets/QuoteMarkSmall.svg"
import QuoteMarkMedium from "../assets/QuoteMarkMedium.svg"
import { UniBath, UniEdinburgh, UniGlasgow } from "../assets"
import * as Reveal from "react-reveal"

import { LAYOUT_MEDIUM, LAYOUT_SMALL } from "../utils/hooks/useResponsiveLayout"

const TestimonialsVertical = () => {
  const theme = useContext(ThemeContext)
  const layout = useResponsiveLayout()
  const isSmallOrMedium = layout === LAYOUT_SMALL || layout === LAYOUT_MEDIUM
  const isLayoutSmall = layout === LAYOUT_SMALL

  const testimonialCard = (width, quote, name, subTextOfName, logo) => (
    <ShadowCard
      padding={`${theme.spacers.size32} ${theme.spacers.size32} ${theme.spacers.size32} ${theme.spacers.size48} `}
      height="400px"
      borderRadius="10px"
      overflow="unset"
      style={{ minWidth: width }}
    >
      {logo}
      <Spacer height={theme.spacers.size32} />
      <Text
        as="p"
        fontSize={theme.typography.fontSizes.size16}
        fontWeight="100"
        className="QuoteText"
        lineHeight="1.6"
        style={{ position: "relative", zIndex: "10" }}
      >
        {quote}
      </Text>
      <Spacer height={theme.spacers.size32} />
      <Text
        as="p"
        fontSize={theme.typography.fontSizes.size16}
        fontWeight="bold"
      >
        {name}
      </Text>
      <Spacer height={theme.spacers.size8} />
      <Text
        as="p"
        fontSize={theme.typography.fontSizes.size14}
        fontColor={theme.colors.grey1}
        maxWidth="200px"
      >
        {subTextOfName}
      </Text>
    </ShadowCard>
  )

  return (
    <Container id="team" isSmallOrMedium={isSmallOrMedium}>
      <Flex flexDirection="column">
        <Wrapper flexDirection="column" className="innerContainer">
          <H2
            style={{ position: "relative", zIndex: "10" }}
            styledAs={isLayoutSmall && "h4"}
            textAlign="center"
          >
            We think you'll love Dekked
          </H2>
          <Spacer height={theme.spacers.size16} />
          <Text
            as="p"
            textAlign="center"
            fontSize={
              isLayoutSmall
                ? theme.typography.fontSizes.size18
                : theme.typography.fontSizes.size22
            }
          >
            But don't just take our word for it
          </Text>
        </Wrapper>
        <Spacer height={theme.spacers.size48} />
        <Flex overflow="auto" p={theme.spacers.size16}>
          <Reveal.Fade>
            {testimonialCard(
              "400px",
              "It really is the best flashcard making app on the internet! I love the simplicity of its layout and it’s so easy to use! Definitely a life saver when it comes to exams, don’t know what I’d do without it.",
              "Jordan",
              "Dentistry Student, Glasgow University",
              <UniGlasgow />
            )}
            <Spacer width={theme.spacers.size48} />
            {testimonialCard(
              "700px",
              "Dekked is brilliant for my productivity! I love having all my notes and flashcards in one place, and being able to link them together means that I can instantly reacquaint myself with difficult topics if I'm struggling. Dekked's emphasis on spaced repetition also means that for the first time, I'm making an effort to revise throughout the year, which should stand me in good stead for my upcoming exams. The most useful educational app I've ever used.",
              "Nick",
              "Medical Student, University of Edinburgh",
              <UniEdinburgh />
            )}
            <Spacer width={theme.spacers.size32} />
            {testimonialCard(
              "400px",
              "Dekked has changed the way I study forever and has really helped me get through exam season.",
              "Vicky",
              "Engineering Student, University of Bath",
              <UniBath />
            )}
          </Reveal.Fade>
        </Flex>
      </Flex>
    </Container>
  )
}

const Wrapper = styled(Flex)``

const Container = styled.section`
  padding-bottom: ${({ theme }) => theme.spacers.size80};
  padding-top: ${({ theme }) => theme.spacers.size80};

  h2::before {
    content: url(${QuoteMarkMedium});
    position: absolute;
    left: -${({ theme }) => theme.spacers.size16};
    top: -${({ theme }) => theme.spacers.size16};
    z-index: -1;
  }

  .QuoteText::before {
    content: url(${QuoteMarkSmall});
    position: absolute;
    left: -${({ theme }) => theme.spacers.size32};
  }
`

export default TestimonialsVertical

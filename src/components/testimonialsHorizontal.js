import React, { useContext } from "react"
import styled, { ThemeContext } from "styled-components"
import { Spacer, H2, Flex, Text, ShadowCard } from "dekked-design-system"
import { useResponsiveLayout } from "../utils/hooks"
import QuoteMarkBig from "../assets/QuoteMarkBig.svg"
import QuoteMarkSmall from "../assets/QuoteMarkSmall.svg"
import { UniBath, UniEdinburgh, UniGlasgow } from "../assets"
import * as Reveal from "react-reveal"

import { LAYOUT_MEDIUM, LAYOUT_SMALL } from "../utils/hooks/useResponsiveLayout"

const TestimonialsHorizontal = () => {
  const theme = useContext(ThemeContext)
  const layout = useResponsiveLayout()
  const isSmallOrMedium = layout === LAYOUT_SMALL || layout === LAYOUT_MEDIUM
  const isLayoutSmall = layout === LAYOUT_SMALL

  const testimonialCard = (width, quote, name, subTextOfName, logo) => (
    <ShadowCard
      padding={`${theme.spacers.size32} ${theme.spacers.size32} ${theme.spacers.size32} ${theme.spacers.size48} `}
      width={width}
      borderRadius="10px"
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
      <Wrapper
        m="auto"
        maxWidth="1200px"
        px={theme.spacers.size128}
        alignItems="flex-start"
      >
        <Flex
          flex="1 0 0"
          flexDirection="column"
          alignItems="flex-start"
          mr={theme.spacers.size32}
        >
          <H2 style={{ position: "relative", zIndex: "10" }}>
            We think you'll love Dekked
          </H2>
          <Spacer height={theme.spacers.size16} />
          <Text
            as="p"
            fontSize={
              isLayoutSmall
                ? theme.typography.fontSizes.size18
                : theme.typography.fontSizes.size22
            }
          >
            But don't just take our word for it
          </Text>
          <Spacer height={theme.spacers.size48} />
          <Flex justifyContent="flex-end">
            <Reveal.Fade>
              {testimonialCard(
                "400px",
                "It really is the best flashcard making app on the internet! I love the simplicity of its layout and it’s so easy to use! Definitely a life saver when it comes to exams, don’t know what I’d do without it.",
                "Jordan",
                "Dentistry Student, Glasgow University",
                <UniGlasgow />
              )}
            </Reveal.Fade>
          </Flex>
        </Flex>
        <Flex
          flex="1 0 0"
          flexDirection="column"
          alignItems="flex-end"
          justifyContent="space-between"
          height="100%"
        >
          <Spacer height={theme.spacers.size48} />
          <Reveal.Fade>
            {testimonialCard(
              "420px",
              "Dekked is brilliant for my productivity! I love having all my notes and flashcards in one place, and being able to link them together means that I can instantly reacquaint myself with difficult topics if I'm struggling. Dekked's emphasis on spaced repetition also means that for the first time, I'm making an effort to revise throughout the year, which should stand me in good stead for my upcoming exams. The most useful educational app I've ever used.",
              "Nick",
              "Medical Student, University of Edinburgh",
              <UniEdinburgh />
            )}
          </Reveal.Fade>
          <Spacer height={theme.spacers.size32} />
        </Flex>
      </Wrapper>
      <Wrapper
        m="auto"
        maxWidth="1200px"
        px={theme.spacers.size128}
        justifyContent="center"
      >
        <Reveal.Fade>
          {testimonialCard(
            "400px",
            "Dekked has changed the way I study forever and has really helped me get through exam season.",
            "Vicky",
            "Engineering Student, University of Bath",
            <UniBath />
          )}
        </Reveal.Fade>
      </Wrapper>
    </Container>
  )
}

const Wrapper = styled(Flex)`
  margin: auto;
  max-width: 1200px;
  padding-left: ${({ theme }) => theme.spacers.size128};
  padding-right: ${({ theme }) => theme.spacers.size128};
`

const Container = styled.section`
  padding-bottom: ${({ theme }) => theme.spacers.size80};
  padding-top: ${({ theme }) => theme.spacers.size80};

  h2::before {
    content: url(${QuoteMarkBig});
    position: absolute;
    left: -${({ theme }) => theme.spacers.size64};
    top: -${({ theme }) => theme.spacers.size20};
    z-index: -1;
  }

  .QuoteText::before {
    content: url(${QuoteMarkSmall});
    position: absolute;
    left: -${({ theme }) => theme.spacers.size32};
  }
`

export default TestimonialsHorizontal

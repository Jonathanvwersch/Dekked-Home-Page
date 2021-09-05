import React, { useContext } from "react"
import styled, { ThemeContext } from "styled-components"
import { Spacer, H2, Flex, Text, H3 } from "dekked-design-system"
import { useResponsiveLayout } from "../utils/hooks"
import { LAYOUT_SMALL, LAYOUT_XLARGE } from "../utils/hooks/useResponsiveLayout"
import * as Reveal from "react-reveal"

const GetStarted = () => {
  const theme = useContext(ThemeContext)
  const layout = useResponsiveLayout()
  const isXLarge = layout === LAYOUT_XLARGE
  const isLayoutSmall = layout === LAYOUT_SMALL

  return (
    <section style={{ background: "#d5fafc" }}>
      <Flex
        className="innerContainer"
        flexDirection="column"
        pt={theme.spacers.size64}
        maxWidth={isLayoutSmall ? "400px" : undefined}
      >
        <H2 styledAs={isLayoutSmall ? "h4" : "h2"} textAlign="center">
          Getting started with Dekked is easy
        </H2>
        <Spacer
          height={isLayoutSmall ? theme.spacers.size48 : theme.spacers.size80}
        />

        <Flex
          width="100%"
          justifyContent={isXLarge ? "space-between" : "center"}
          flexWrap="wrap"
        >
          <Reveal.Fade right>
            <Flex
              flexDirection="column"
              px={theme.spacers.size32}
              width="auto"
              pb={theme.spacers.size64}
            >
              <Image
                src="https://dekked-landing-page.s3.eu-west-2.amazonaws.com/images2/GetStarted1.png"
                alt="Sign up"
                height={isLayoutSmall ? "150px" : "200px"}
              />
              <H3 styledAs="h4">Sign up</H3>
              <Spacer height={theme.spacers.size4} />
              <Text
                textAlign="center"
                fontSize={theme.typography.fontSizes.size18}
                as="p"
              >
                Sign up with Dekked to get started
              </Text>
            </Flex>
            <Flex
              flexDirection="column"
              px={theme.spacers.size32}
              width="auto"
              pb={theme.spacers.size64}
            >
              <Image
                src="https://dekked-landing-page.s3.eu-west-2.amazonaws.com/images2/GetStarted2.png"
                alt="Create flashcards and notes"
                height={isLayoutSmall ? "150px" : "200px"}
              />
              <H3 styledAs="h4">Create </H3>
              <Spacer height={theme.spacers.size4} />
              <Text
                textAlign="center"
                fontSize={theme.typography.fontSizes.size18}
                as="p"
              >
                Create notes and flashcards
              </Text>
            </Flex>
            <Flex
              flexDirection="column"
              px={theme.spacers.size32}
              width="auto"
              pb={theme.spacers.size64}
            >
              <Image
                src="https://dekked-landing-page.s3.eu-west-2.amazonaws.com/images2/GetStarted3.png"
                alt="Study smarter"
                height={isLayoutSmall ? "150px" : "200px"}
              />
              <H3 styledAs="h4">Study</H3>
              <Spacer height={theme.spacers.size4} />
              <Text
                textAlign="center"
                fontSize={theme.typography.fontSizes.size18}
                as="p"
              >
                Study with or without spaced repetition
              </Text>
            </Flex>
          </Reveal.Fade>
        </Flex>
      </Flex>
    </section>
  )
}

const Image = styled.img`
  margin-bottom: ${({ theme }) => theme.spacers.size32};
  height: ${({ height }) => height};
`

export default GetStarted

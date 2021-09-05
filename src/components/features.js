import React, { useContext } from "react"
import styled, { ThemeContext } from "styled-components"
import { H2, Flex, Text, Spacer, H3 } from "dekked-design-system"
import { useResponsiveLayout } from "../utils/hooks"
import {
  Feature1Icon,
  Feature2Icon,
  Feature3Icon,
  Feature4Icon,
} from "../assets"

import { LAYOUT_SMALL } from "../utils/hooks/useResponsiveLayout"

const Features = () => {
  const theme = useContext(ThemeContext)
  const layout = useResponsiveLayout()
  const isLayoutSmall = layout === LAYOUT_SMALL

  const feature = (icon, header, subText) => (
    <Flex alignItems="center">
      {icon}
      <Flex
        flexDirection="column"
        ml={theme.spacers.size48}
        alignItems="flex-start"
      >
        <H3 styledAs={isLayoutSmall ? "h5" : "h3"} textAlign="left">
          {header}
        </H3>
        <Spacer height={theme.spacers.size16} />
        <Text
          as="p"
          lineHeight="1.6"
          fontSize={
            isLayoutSmall
              ? theme.typography.fontSizes.size16
              : theme.typography.fontSizes.size20
          }
          textAlign="left"
        >
          {subText}
        </Text>
      </Flex>
    </Flex>
  )

  return (
    <section id="features" style={{ background: "#d5fafc" }}>
      <Flex
        className="innerContainer"
        flexDirection="column"
        py={theme.spacers.size128}
      >
        <H2 textAlign="center" styledAs={isLayoutSmall ? "h4" : "h2"}>
          An integrated flashcard and notetaking platform
        </H2>
        <Spacer height={theme.spacers.size80} />
        <Flex flexDirection="column">
          <Flex
            mb={isLayoutSmall ? theme.spacers.size64 : theme.spacers.size128}
            flexDirection={isLayoutSmall ? "column" : "row"}
          >
            {feature(
              <Feature1Icon />,
              "Create notes & flashcards",
              "Create your notes and flashcards in the same platform using our block-based text editor."
            )}
            <Spacer
              width={!isLayoutSmall ? theme.spacers.size64 : undefined}
              height={isLayoutSmall ? theme.spacers.size64 : undefined}
            />
            {feature(
              <Feature2Icon />,
              "Linked flashcards",
              "Link your flashcards directly to your notes so you never lose context of what you’re learning."
            )}
          </Flex>
          <Flex
            mb={isLayoutSmall ? theme.spacers.size64 : theme.spacers.size128}
            flexDirection={isLayoutSmall ? "column" : "row"}
          >
            {feature(
              <Feature3Icon />,
              "Smarter studying",
              "Revise your flashcards with or without spaced repetition, the most efficient form of learning."
            )}
            <Spacer
              width={!isLayoutSmall ? theme.spacers.size64 : undefined}
              height={isLayoutSmall ? theme.spacers.size64 : undefined}
            />
            {feature(
              <Feature4Icon />,
              "Linked learning",
              "View any of your linked notes as you study for a seamless and integrated learning experience"
            )}
          </Flex>
          <VideoBackground isLayoutSmall={isLayoutSmall}>
            <VideoDemo
              src={
                "https://dekked-landing-page.s3.eu-west-2.amazonaws.com/images2/FeatureVideo1.mp4"
              }
              preload="none"
              controls="controls"
              controlsList="nodownload"
              playsInline
              disablepictureinpicture
              aria-label="Product demo"
            />
          </VideoBackground>
        </Flex>
      </Flex>
    </section>
  )
}

const VideoBackground = styled.div`
  width: 100%;
  background: white;
  border-radius: ${({ theme }) => theme.spacers.size8};
  box-shadow: ${({ theme }) => theme.boxShadow};

  padding: ${({ isLayoutSmall, theme }) =>
    isLayoutSmall ? theme.spacers.size8 : theme.spacers.size16};
`

const VideoDemo = styled.video`
  width: 100%;
`

export default Features

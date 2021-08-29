import React, { useContext } from "react"
import styled, { ThemeContext } from "styled-components"
import { H3, Flex, Text, Spacer } from "dekked-design-system"
import { useResponsiveLayout } from "../utils/hooks"

import {
  LAYOUT_LARGE,
  LAYOUT_XLARGE,
  LAYOUT_SMALL,
} from "../utils/hooks/useResponsiveLayout"

const Features = () => {
  const theme = useContext(ThemeContext)
  const layout = useResponsiveLayout()
  const isLayoutXLarge = layout === LAYOUT_XLARGE
  const isLayoutXLargeOrLarge =
    layout === LAYOUT_XLARGE || layout === LAYOUT_LARGE
  const isLayoutSmall = layout === LAYOUT_SMALL

  return (
    <section id="features">
      <Flex
        className="innerContainer"
        flexDirection="column"
        pb={isLayoutSmall ? theme.spacers.size32 : theme.spacers.size48}
        pt={!isLayoutSmall && theme.spacers.size64}
      >
        <Flex
          mb={theme.spacers.size80}
          flexDirection={isLayoutXLarge ? "row" : "column"}
        >
          <Flex
            flexDirection="column"
            flex="1 0 0"
            mr={isLayoutXLarge && theme.spacers.size64}
            maxWidth="500px"
            mb={!isLayoutXLarge && theme.spacers.size48}
          >
            <H3
              textAlign="center"
              styledAs={isLayoutXLargeOrLarge ? "h3" : "h4"}
              fontWeight="500"
            >
              Create notes & flashcards
            </H3>
            <Spacer height={theme.spacers.size16} />
            <Text
              textAlign="center"
              fontWeight="200"
              fontSize={
                isLayoutXLargeOrLarge
                  ? theme.typography.fontSizes.size22
                  : theme.typography.fontSizes.size18
              }
              as="p"
            >
              With Dekked, you can create your notes and flashcards in the same
              platform
            </Text>
          </Flex>
          <Flex
            flex="1.5 0 0"
            overflow="hidden"
            style={{ borderRadius: "16px" }}
          >
            <Video
              src="https://dekked-landing-page.s3.eu-west-2.amazonaws.com/images2/Video1.mp4"
              muted
              playsInline
              loop
              controls={false}
              autoPlay="autoplay"
              style={{ marginTop: "-2px" }}
            />
          </Flex>
        </Flex>
        <Flex
          mb={theme.spacers.size80}
          flexDirection={isLayoutXLarge ? "row" : "column-reverse"}
        >
          <Flex
            flex="1.5 0 0"
            overflow="hidden"
            style={{ borderRadius: "16px" }}
          >
            <Video
              src="https://dekked-landing-page.s3.eu-west-2.amazonaws.com/images2/Video2.mp4"
              muted
              playsInline
              loop
              controls={false}
              autoPlay="autoplay"
              style={{ marginTop: "-2px", marginBottom: "-16px" }}
            />
          </Flex>
          <Flex
            flexDirection="column"
            flex="1 0 0"
            ml={isLayoutXLarge && theme.spacers.size64}
            maxWidth="500px"
            mb={!isLayoutXLarge && theme.spacers.size48}
          >
            <H3
              textAlign="center"
              styledAs={isLayoutXLargeOrLarge ? "h3" : "h4"}
              fontWeight="500"
            >
              Linked flashcards
            </H3>
            <Spacer height={theme.spacers.size16} />
            <Text
              textAlign="center"
              fontWeight="200"
              fontSize={
                isLayoutXLargeOrLarge
                  ? theme.typography.fontSizes.size22
                  : theme.typography.fontSizes.size18
              }
              as="p"
            >
              Link your flashcards directly to your notes so you never lose
              context of what you’re learning
            </Text>
          </Flex>
        </Flex>
        <Flex
          mb={theme.spacers.size80}
          flexDirection={isLayoutXLarge ? "row" : "column"}
        >
          <Flex
            flexDirection="column"
            flex="1 0 0"
            mr={isLayoutXLarge && theme.spacers.size64}
            maxWidth="500px"
            mb={!isLayoutXLarge && theme.spacers.size48}
          >
            <H3
              textAlign="center"
              styledAs={isLayoutXLargeOrLarge ? "h3" : "h4"}
              fontWeight="500"
            >
              Smarter studying
            </H3>
            <Spacer height={theme.spacers.size16} />
            <Text
              textAlign="center"
              fontWeight="200"
              fontSize={
                isLayoutXLargeOrLarge
                  ? theme.typography.fontSizes.size22
                  : theme.typography.fontSizes.size18
              }
              as="p"
            >
              Revise your flashcards with or without spaced repetition, the most
              efficient form of learning
            </Text>
          </Flex>
          <Flex
            flex="1.5 0 0"
            overflow="hidden"
            style={{ borderRadius: "16px" }}
          >
            <Video
              src="https://dekked-landing-page.s3.eu-west-2.amazonaws.com/images2/Video3.mp4"
              muted
              playsInline
              loop
              controls={false}
              autoPlay="autoplay"
              style={{ marginTop: "-2px", marginBottom: "-10px" }}
            />
          </Flex>
        </Flex>
        <Flex flexDirection={isLayoutXLarge ? "row" : "column-reverse"}>
          <Flex
            flex="1.5 0 0"
            overflow="hidden"
            style={{ borderRadius: "16px" }}
          >
            <Video
              src="https://dekked-landing-page.s3.eu-west-2.amazonaws.com/images2/Video4.mp4"
              muted
              playsInline
              loop
              controls={false}
              autoPlay="autoplay"
              style={{ marginTop: "-2px", marginBottom: "-16px" }}
            />
          </Flex>
          <Flex
            flexDirection="column"
            flex="1 0 0"
            ml={isLayoutXLarge && theme.spacers.size64}
            maxWidth="500px"
            mb={!isLayoutXLarge && theme.spacers.size48}
          >
            <H3
              textAlign="center"
              styledAs={isLayoutXLargeOrLarge ? "h3" : "h4"}
              fontWeight="500"
            >
              Linked learning
            </H3>
            <Spacer height={theme.spacers.size16} />
            <Text
              textAlign="center"
              fontWeight="200"
              fontSize={
                isLayoutXLargeOrLarge
                  ? theme.typography.fontSizes.size22
                  : theme.typography.fontSizes.size18
              }
              as="p"
            >
              Revise your flashcards with or without spaced repetition, the most
              efficient form of learning
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </section>
  )
}

const Video = styled.video`
  width: 100%;
`

export default Features

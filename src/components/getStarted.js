import React, { useContext } from "react"
import styled, { ThemeContext } from "styled-components"
import { Spacer, H2, Flex, Text, H3 } from "dekked-design-system"
import { useResponsiveLayout } from "../utils/hooks"
import SignUp from "../assets/GetStartedSignUp.png"
import Create from "../assets/GetStartedCreate.png"
import Study from "../assets/GetStartedStudy.png"
import { LAYOUT_SMALL, LAYOUT_XLARGE } from "../utils/hooks/useResponsiveLayout"

const GetStarted = () => {
  const theme = useContext(ThemeContext)
  const layout = useResponsiveLayout()
  const isXLarge = layout === LAYOUT_XLARGE
  const isLayoutSmall = layout === LAYOUT_SMALL

  return (
    <section>
      <Flex
        className="innerContainer"
        flexDirection="column"
        pb={isLayoutSmall ? theme.spacers.size32 : theme.spacers.size48}
        pt={isLayoutSmall ? theme.spacers.size64 : theme.spacers.size128}
        maxWidth={isLayoutSmall ? "400px" : undefined}
      >
        <H2 textAlign="center" styledAs={isLayoutSmall ? "h4" : "h3"}>
          An integrated flashcard and notetaking platform
        </H2>
        <Flex
          width="100%"
          justifyContent={isXLarge ? "space-between" : "center"}
          flexWrap="wrap"
          mt={isLayoutSmall ? theme.spacers.size64 : theme.spacers.size128}
        >
          <Flex
            flexDirection="column"
            px={theme.spacers.size32}
            width="auto"
            pb={theme.spacers.size64}
          >
            <Image
              src={SignUp}
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
              src={Create}
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
              src={Study}
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

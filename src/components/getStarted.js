import React, { useContext } from "react"
import styled, { ThemeContext } from "styled-components"
import {
  H1,
  Spacer,
  H2,
  Box,
  Flex,
  Button,
  SIZES,
  Text,
  H3,
} from "dekked-design-system"
import { SantanderIcon, DffrntIcon, Acclr8Icon, UOBIcon } from "../assets"
import { useResponsiveLayout } from "../utils/hooks"
import SignUp from "../assets/GetStartedSignUp.png"
import Create from "../assets/GetStartedCreate.png"
import Study from "../assets/GetStartedStudy.png"
import { LAYOUT_LARGE } from "../utils/hooks/useResponsiveLayout"

const GetStarted = () => {
  const theme = useContext(ThemeContext)
  const layout = useResponsiveLayout()
  const isLayoutNotLarge = !(layout === LAYOUT_LARGE)

  return (
    <Container>
      <Flex className="innerContainer" flexDirection="column">
        <H2 textAlign="center">Getting started with Dekked is easy</H2>
        <Flex
          width="100%"
          justifyContent="space-between"
          flexWrap="wrap"
          mt={theme.spacers.size48}
        >
          <Flex
            flexDirection="column"
            px={theme.spacers.size16}
            width="auto"
            mb={theme.spacers.size32}
          >
            <Image src={SignUp} alt="Sign up" />
            <H3 styledAs="h4">Sign up</H3>
            <Spacer height={theme.spacers.size4} />
            <Text fontSize={theme.typography.fontSizes.size18} as="p">
              Sign up with Dekked to get started
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            p={theme.spacers.size8}
            width="auto"
            mb={theme.spacers.size32}
          >
            <Image src={Create} alt="Create flashcards and notes" />
            <H3 styledAs="h4">Create </H3>
            <Spacer height={theme.spacers.size4} />
            <Text fontSize={theme.typography.fontSizes.size18} as="p">
              Create notes and flashcards
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            p={theme.spacers.size8}
            width="auto"
            mb={theme.spacers.size32}
          >
            <Image src={Study} alt="Study smarter" />
            <H3 styledAs="h4">Study</H3>
            <Spacer height={theme.spacers.size4} />
            <Text fontSize={theme.typography.fontSizes.size18} as="p">
              Study with or without spaced repetition
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  )
}

const Container = styled.section`
  padding-bottom: ${({ theme }) => theme.spacers.size32};
  padding-top: ${({ theme }) => theme.spacers.size64};
  background-color: #dbf9fe;
`

const Image = styled.img`
  height: 200px;
  margin-bottom: ${({ theme }) => theme.spacers.size32};
`

export default GetStarted

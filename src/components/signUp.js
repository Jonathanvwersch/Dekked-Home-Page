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
import { LAYOUT_LARGE } from "../utils/hooks/useResponsiveLayout"
import SignUpImage from "../assets/SignUp.png"

const SignUp = () => {
  const theme = useContext(ThemeContext)
  const layout = useResponsiveLayout()
  const isLayoutNotLarge = !(layout === LAYOUT_LARGE)

  return (
    <Box pt={theme.spacers.size80}>
      <Flex className="innerContainer">
        <Flex flexDirection="column">
          <H2 styledAs="h1">So what are you waiting for?</H2>
          <Spacer height={theme.spacers.size16} />
          <Text as="p" fontSize={theme.typography.fontSizes.size22}>
            Join Dekked today to start studying smarter
          </Text>
          <Spacer height={theme.spacers.size32} />
          <Button
            as="a"
            borderRadius={theme.sizes.borderRadius[SIZES.LARGE]}
            size={SIZES.LARGE}
            fontSize={theme.typography.fontSizes.size20}
            href="https://app.dekked.com/sign-up"
          >
            Try Dekked for free
          </Button>
          <Spacer height={theme.spacers.size64} />
          <Image src={SignUpImage} alt="Sign up with Dekked" />
        </Flex>
      </Flex>
    </Box>
  )
}

const Image = styled.img`
  width: 100%;
`

export default SignUp

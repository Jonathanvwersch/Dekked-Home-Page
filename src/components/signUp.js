import React, { useContext } from "react"
import styled, { ThemeContext } from "styled-components"
import {
  Spacer,
  H2,
  Flex,
  Button,
  SIZES,
  Text,
  Box,
} from "dekked-design-system"
import { useResponsiveLayout } from "../utils/hooks"
import { StaticImage } from "gatsby-plugin-image"

import { LAYOUT_SMALL, LAYOUT_XLARGE } from "../utils/hooks/useResponsiveLayout"
import * as Reveal from "react-reveal"

const SignUp = () => {
  const theme = useContext(ThemeContext)
  const layout = useResponsiveLayout()
  const isLayoutNotXLarge = !(layout === LAYOUT_XLARGE)
  const isLayoutSmall = layout === LAYOUT_SMALL

  return (
    <SignUpContainer isLayoutNotXLarge={isLayoutNotXLarge}>
      <Flex
        mb={isLayoutNotXLarge ? theme.spacers.size64 : undefined}
        flexDirection={isLayoutNotXLarge ? "column" : "row"}
        className="innerContainer"
        pt={isLayoutSmall ? theme.spacers.size64 : theme.spacers.size128}
        pb={!isLayoutSmall ? theme.spacers.size128 : undefined}
      >
        <Flex
          flexDirection="column"
          width={!isLayoutNotXLarge ? "40%" : undefined}
          alignItems={isLayoutNotXLarge ? "center" : "flex-start"}
        >
          <Reveal.Fade delay={500}>
            <H2
              textAlign={isLayoutNotXLarge && "center"}
              styledAs={isLayoutSmall ? "h3" : "h1"}
            >
              So what are you waiting for?
            </H2>
            <Spacer height={theme.spacers.size16} />
            <Text
              textAlign={isLayoutNotXLarge && "center"}
              as="p"
              fontSize={
                isLayoutSmall
                  ? theme.typography.fontSizes.size18
                  : theme.typography.fontSizes.size22
              }
            >
              Join Dekked today to start studying smarter
            </Text>
            <Spacer height={theme.spacers.size32} />
            <Button
              as="a"
              borderRadius={theme.sizes.borderRadius[SIZES.LARGE]}
              size={SIZES.XLARGE}
              fontSize={theme.typography.fontSizes.size20}
              href="https://app.dekked.com/sign-up"
            >
              Try Dekked for free
            </Button>
          </Reveal.Fade>
          {isLayoutNotXLarge && <Spacer height={theme.spacers.size64} />}
        </Flex>
        {!isLayoutSmall && (
          <Box width={isLayoutNotXLarge ? "80%" : "60%"} className="MainImage">
            <Reveal.Fade left isLayoutNotXLarge={isLayoutNotXLarge}>
              <StaticImage
                src="https://dekked-landing-page.s3.eu-west-2.amazonaws.com/images2/SignUp1.png"
                alt="Sign up with Dekked"
                className="signUpImage"
              />
            </Reveal.Fade>
          </Box>
        )}
      </Flex>
    </SignUpContainer>
  )
}

const SignUpContainer = styled.section`
  .MainImage {
    .react-reveal {
      width: 100%;
    }
  }
`

export default SignUp

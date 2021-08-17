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
  H3,
} from "dekked-design-system"
import { SantanderIcon, DffrntIcon, Acclr8Icon, UOBIcon } from "../assets"
import { Link } from "gatsby"

const Hero = () => {
  const theme = useContext(ThemeContext)

  return (
    <Section>
      <StyledHero className="innerContainer">
        <Flex>
          <Box width="50%" style={{ display: "flex", flexDirection: "column" }}>
            <H1 styledAs="xLargeH1">A more efficient way to learn</H1>
            <Spacer height={theme.spacers.size32} />
            <H2 styledAs="h5" fontWeight="normal">
              Create notes and flashcards that are linked to one another. Then
              study them with or without spaced repetition.
            </H2>
            <Spacer height={theme.spacers.size48} />
            <Link href="https://app.dekked.com/sign-up">
              <Button
                borderRadius={theme.sizes.borderRadius[SIZES.LARGE]}
                fontSize={theme.typography.fontSizes.size18}
                size={SIZES.LARGE}
                width="200px"
              >
                Get started for free
              </Button>
            </Link>
          </Box>
          <Box width="50%" />
        </Flex>
        <Spacer height="200px" />
        <Flex flexDirection="column" alignItems="center">
          <H3 styledAs="h6" fontColor={theme.colors.grey1}>
            Supported by
          </H3>
          <Flex width="100%" justifyContent="space-evenly">
            <SantanderIcon />
            <DffrntIcon />
            <Acclr8Icon />
            <UOBIcon />
          </Flex>
        </Flex>
      </StyledHero>
    </Section>
  )
}

const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacers.size64};
`

const Section = styled.section`
  background: rgba(241, 253, 255, 0.7);
  backdrop-filter: blur(100px);
  padding-bottom: ${({ theme }) => theme.spacers.size128};
`

export default Hero

import React, { useContext, useState, useEffect } from "react"
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
import Hero1 from "../assets/Hero1.jpeg"
import Hero2 from "../assets/Hero2.jpeg"
import Hero3 from "../assets/Hero3.jpeg"
import { keyframes } from "styled-components"

import { SantanderIcon, DffrntIcon, Acclr8Icon, UOBIcon, RAE } from "../assets"
import { useResponsiveLayout } from "../utils/hooks"
import { LAYOUT_LARGE } from "../utils/hooks/useResponsiveLayout"

const Hero = () => {
  const theme = useContext(ThemeContext)
  const layout = useResponsiveLayout()
  const isLayoutNotLarge = !(layout === LAYOUT_LARGE)
  const [index, setIndex] = useState(0)

  const animatedText = ["take notes", "create flashcards", "study"]
  const heroImages = [Hero1, Hero2, Hero3]

  useEffect(() => {
    const timeout = setInterval(() => {
      setIndex(prevState => prevState + 1)
    }, 5000)

    return () => clearInterval(timeout)
  }, [index])

  return (
    <MainHero>
      <Flex
        className="innerContainer"
        pt={theme.spacers.size128}
        flexDirection={isLayoutNotLarge ? "column" : "row"}
        alignItems="flex-start"
        pb={theme.spacers.size64}
      >
        <Flex
          width={isLayoutNotLarge ? "100%" : "45%"}
          flexDirection="column"
          alignItems={isLayoutNotLarge ? "center" : "flex-start"}
          mr={!isLayoutNotLarge && theme.spacers.size32}
          style={{
            textAlign: isLayoutNotLarge && "center",
            maxWidth: isLayoutNotLarge && "600px",
          }}
        >
          <H1 styledAs="h1">
            A more efficient way to&nbsp;
            <AnimatedText style={{ color: theme.colors.primary }}>
              {animatedText[index % animatedText.length]}
            </AnimatedText>
          </H1>
          <Spacer height={theme.spacers.size32} />
          <H2 styledAs="h5" fontWeight="normal">
            Create notes and flashcards that are linked to one another. Then
            study them with or without spaced repetition.
          </H2>
          <Spacer height={theme.spacers.size48} />
          <Button
            as="a"
            borderRadius={theme.sizes.borderRadius[SIZES.LARGE]}
            fontSize={theme.typography.fontSizes.size18}
            size={SIZES.LARGE}
            width="200px"
            href="https://app.dekked.com/sign-up"
          >
            Get started for free
          </Button>
        </Flex>
        <Box
          width={isLayoutNotLarge ? "100%" : "55%"}
          ml={!isLayoutNotLarge && theme.spacers.size32}
          mb={isLayoutNotLarge && theme.spacers.size64}
        >
          <HeroImage
            src={heroImages[index % heroImages.length]}
            alt={index % animatedText[index]}
          />
        </Box>
      </Flex>
      <SubHero className="innerContainer">
        <H3 styledAs="h6" fontColor={theme.colors.grey1}>
          Supported by
        </H3>
        <Flex
          width="100%"
          justifyContent="space-evenly"
          flexWrap="wrap"
          pb={theme.spacers.size32}
        >
          <Box p={theme.spacers.size8}>
            <SantanderIcon />
          </Box>
          <Box p={theme.spacers.size8}>
            <DffrntIcon />
          </Box>
          <Box p={theme.spacers.size8}>
            <Acclr8Icon />
          </Box>
          <Box p={theme.spacers.size8}>
            <UOBIcon />
          </Box>
          <Box p={theme.spacers.size8}>
            <RAE />
          </Box>
        </Flex>
      </SubHero>
    </MainHero>
  )
}

const HeroImage = styled.img`
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  height: 100%;
  width: 100%;
`

const heroAnimation = keyframes`
  80% {transform: translate3d(0,0,0);opacity:1; }
  80% {opacity:0; }
  100% {transform: translate3d(0,100%,0); transition: all .7s cubic-bezier(.77,0,0.18,1); opacity:0;}
`
const AnimatedText = styled.span`
  // animation: ${heroAnimation} 5s infinite;
  display: inline-block;
`

const SubHero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacers.size64};
`

const MainHero = styled.section`
  padding-bottom: ${({ theme }) => theme.spacers.size128};
  background-repeat: no-repeat;
  background-size: cover;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 50%,
    rgba(202, 245, 252, 1) 100%
  );
`

export default Hero

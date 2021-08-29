import React, { useContext, useState } from "react"
import styled, { ThemeContext, keyframes } from "styled-components"
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
import Typist from "react-typist"
import { TypeWriter } from "./"

import { SantanderIcon, DffrntIcon, Acclr8Icon, Rae } from "../assets"
import { useResponsiveLayout } from "../utils/hooks"
import { LAYOUT_XLARGE, LAYOUT_SMALL } from "../utils/hooks/useResponsiveLayout"

const Hero = () => {
  const theme = useContext(ThemeContext)
  const layout = useResponsiveLayout()
  const isLayoutNotXLarge = !(layout === LAYOUT_XLARGE)
  const isLayoutSmall = layout === LAYOUT_SMALL
  const [index, setIndex] = useState(0)
  const animatedText = ["take notes", "create flashcards", "study"]
  const heroImages = [Hero1, Hero2, Hero3]

  return (
    <MainHero>
      <StyledHero
        className="innerContainer"
        pb={isLayoutSmall ? theme.spacers.size64 : theme.spacers.size128}
        pt={isLayoutSmall ? "128px" : "200px"}
        flexDirection={isLayoutNotXLarge ? "column" : "row"}
      >
        <Flex
          alignItems={isLayoutNotXLarge ? "center" : "flex-start"}
          width={isLayoutNotXLarge ? "100%" : "45%"}
          flexDirection="column"
          mr={!isLayoutNotXLarge && theme.spacers.size32}
          style={{
            textAlign: isLayoutNotXLarge && "center",
            maxWidth: isLayoutNotXLarge && "600px",
          }}
        >
          <H1 styledAs={isLayoutSmall ? "h3" : "h1"}>
            A more efficient way to&nbsp;
            <TypeWriter interval={500} index={index} setIndex={setIndex}>
              {animatedText.map(text => (
                <Typist
                  key={text}
                  style={{ display: "inline" }}
                  startDelay={500}
                >
                  <AnimatedText style={{ color: theme.colors.primary }}>
                    {text}
                  </AnimatedText>
                  <Typist.Backspace
                    delay={4500}
                    count={text.length}
                    style={{ display: "inline" }}
                  />
                </Typist>
              ))}
            </TypeWriter>
            <BlinkingCursor>|</BlinkingCursor>
          </H1>
          <Spacer height={theme.spacers.size32} />
          <H2 styledAs={isLayoutSmall ? "h6" : "h5"} fontWeight="normal">
            Create notes and flashcards that are linked to one another. Then
            study them with or without spaced repetition.
          </H2>
          <Spacer height={theme.spacers.size48} />
          <Button
            as="a"
            borderRadius={theme.sizes.borderRadius[SIZES.LARGE]}
            fontSize={theme.typography.fontSizes.size18}
            size={SIZES.XLARGE}
            width="200px"
            href="https://app.dekked.com/sign-up"
          >
            Get started for free
          </Button>
          {isLayoutNotXLarge && <Spacer height={theme.spacers.size48} />}
        </Flex>
        <Box
          width={isLayoutNotXLarge ? "100%" : "55%"}
          ml={!isLayoutNotXLarge && theme.spacers.size32}
        >
          <HeroImage
            src={heroImages[index % heroImages.length]}
            alt="Hero image"
          />
        </Box>
      </StyledHero>
      <SubHero className="innerContainer">
        <H3 styledAs="h6" fontColor={theme.colors.grey1}>
          Supported by
        </H3>
        <Flex width="100%" justifyContent="space-evenly" flexWrap="wrap">
          <Box p={theme.spacers.size16}>
            <SantanderIcon />
          </Box>
          <Box p={theme.spacers.size8} pb={theme.spacers.size16}>
            <DffrntIcon />
          </Box>
          <Box p={theme.spacers.size8} pb={theme.spacers.size16}>
            <Acclr8Icon />
          </Box>
          <Box p={theme.spacers.size8} pb={theme.spacers.size16}>
            <Rae />
          </Box>
        </Flex>
      </SubHero>
    </MainHero>
  )
}

const StyledHero = styled(Flex)``

const HeroImage = styled.img`
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  height: 100%;
  width: 100%;
`

const AnimatedText = styled.span`
  display: inline-block;
`

const heroAnimation = keyframes`
  0% {
   visibility: hidden;
  }

  50% {
    visibility: visible;
  }
 
`

const BlinkingCursor = styled.span`
  animation: ${heroAnimation} 1s infinite step-end;
  font-weight: 100;
  color: ${({ theme }) => theme.colors.fontColor};
`

const SubHero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MainHero = styled.section`
  padding-bottom: ${({ theme }) => theme.spacers.size80};
  background-repeat: no-repeat;
  background-size: cover;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 50%,
    rgba(202, 245, 252, 1) 100%
  );

  .Cursor {
    display: none;
  }

  .Typist {
    display: inline;
  }
`

export default Hero

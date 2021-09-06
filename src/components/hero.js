import React, { useContext, useState } from "react"
import * as Reveal from "react-reveal"
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
import Diagonals from "../assets/Diagonals.png"
import Typist from "react-typist"
import { TypeWriter } from "./"

import {
  SantanderIcon,
  DffrntIcon,
  Acclr8Icon,
  RoyalAcademyEngineering,
} from "../assets"
import { useResponsiveLayout } from "../utils/hooks"
import { LAYOUT_XLARGE, LAYOUT_SMALL } from "../utils/hooks/useResponsiveLayout"

const Hero = () => {
  const theme = useContext(ThemeContext)
  const layout = useResponsiveLayout()
  const isLayoutNotXLarge = !(layout === LAYOUT_XLARGE)
  const isLayoutSmall = layout === LAYOUT_SMALL

  const [index, setIndex] = useState(0)
  const animatedText = ["take notes", "create flashcards", "study"]
  const heroImages = [
    "https://dekked-landing-page.s3.eu-west-2.amazonaws.com/Hero1.png",
    "https://dekked-landing-page.s3.eu-west-2.amazonaws.com/Hero2.jpeg",
    "https://dekked-landing-page.s3.eu-west-2.amazonaws.com/Hero3.png",
  ]

  return (
    <>
      <MainHero>
        <StyledHero
          className="innerContainer"
          pb={isLayoutNotXLarge ? theme.spacers.size64 : "0px"}
          pt={"64px"}
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
              zIndex: "10",
            }}
          >
            <Reveal.Fade delay={500}>
              <HeroText styledAs={isLayoutSmall ? "h3" : "h1"}>
                A more efficient way to&nbsp;
                <TypeWriter interval={500} index={index} setIndex={setIndex}>
                  {animatedText.map(text => (
                    <Typist key={text} style={{ display: "inline" }}>
                      <AnimatedText
                        style={{
                          color: theme.colors.primary,
                        }}
                      >
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
              </HeroText>

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
                size={isLayoutSmall ? SIZES.LARGE : SIZES.XLARGE}
                width="200px"
                href="https://app.dekked.com/sign-up"
              >
                Get started for free
              </Button>
            </Reveal.Fade>
            {isLayoutNotXLarge && <Spacer height={theme.spacers.size48} />}
          </Flex>

          <Box
            width={isLayoutNotXLarge ? "100%" : "55%"}
            ml={!isLayoutNotXLarge && theme.spacers.size32}
            style={{ zIndex: "1", position: "relative" }}
          >
            <Reveal.Fade left>
              <HeroImage
                height={isLayoutNotXLarge ? "100%" : "500px"}
                width={isLayoutNotXLarge ? "100%" : undefined}
                src={heroImages[index % heroImages.length]}
                alt="Hero image"
              />
            </Reveal.Fade>
          </Box>
        </StyledHero>
        <Flex mb={isLayoutSmall ? theme.spacers.size64 : theme.spacers.size128}>
          <Reveal.Fade left>
            <HeroDiagonals
              alt="Decorative diagonal elements"
              src={Diagonals}
              style={{
                height: isLayoutSmall ? "100px" : "180px",
                transform: "rotate(-4deg)",
                width: isLayoutSmall ? "100vw" : "50vw",
              }}
            />
          </Reveal.Fade>
        </Flex>
      </MainHero>
      <SubHero className="innerContainer subHero">
        <H3 styledAs="h6" fontColor={theme.colors.grey1}>
          Supported by
        </H3>
        <Reveal.Fade>
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
              <RoyalAcademyEngineering />
            </Box>
          </Flex>
        </Reveal.Fade>
      </SubHero>
    </>
  )
}

const HeroDiagonals = styled.img``

const HeroText = styled(H1)`
  background: linear-gradient(267.53deg, #00b6ce 27.79%, #048293 71.12%);
  display: inline-block;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`

const StyledHero = styled(Flex)``

const HeroImage = styled.img`
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  image-rendering: -moz-crisp-edges; /* Firefox */
  image-rendering: -o-crisp-edges; /* Opera */
  image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
  image-rendering: crisp-edges;
  -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
  position: ${({ isLayoutNotXLarge }) => isLayoutNotXLarge && "absolute"};
  left: ${({ isLayoutNotXLarge }) => isLayoutNotXLarge && "0"};
  top: ${({ isLayoutNotXLarge }) => isLayoutNotXLarge && "-250px"};
`

const AnimatedText = styled.p`
  display: inline-block;
  background: linear-gradient(267.53deg, #00b6ce 27.79%, #048293 71.12%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
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
  padding-bottom: ${({ theme }) => theme.spacers.size128};

  .react-reveal {
    width: 100%;
  }
`

const MainHero = styled.section`
  background-repeat: no-repeat;
  background-size: cover;
  background: linear-gradient(173deg, #dbf9fe 50%, white 90%);
  position: relative;

  .Cursor {
    display: none;
  }

  .Typist {
    display: inline;
  }
`

export default Hero

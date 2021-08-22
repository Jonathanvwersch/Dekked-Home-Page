import React, { useContext } from "react"
import styled, { ThemeContext } from "styled-components"
import {
  Spacer,
  Flex,
  Text,
  FullLogoIcon,
  H3,
  Link,
  Box,
  TwitterIcon,
  LinkedinIcon,
  DiscordIcon,
  FacebookIcon,
  EmailIcon,
  SIZES,
  IconActive,
} from "dekked-design-system"
import { LAYOUT_SMALL } from "../utils/hooks/useResponsiveLayout"

import { useResponsiveLayout } from "../utils/hooks"

const Footer = () => {
  const theme = useContext(ThemeContext)
  const date = new Date()
  const year = date.getFullYear()
  const layout = useResponsiveLayout()
  const isLayoutSmall = layout === LAYOUT_SMALL

  const copyRight = (
    <Text fontColor="white" fontSize={theme.typography.fontSizes.size14}>
      © {year} Dekked. All rights reserved.
    </Text>
  )

  const privacyPolicy = (
    <Link
      fontColor="white"
      fontSize={theme.typography.fontSizes.size14}
      href="www.dekked.com/legal"
    >
      Privacy policy
    </Link>
  )

  return (
    <FooterContainer id="#Contact">
      <Box className="innerContainer">
        <StyledFooter>
          {isLayoutSmall ? (
            <Flex
              flexDirection="column"
              justifyContent="space-between"
              height="100%"
            >
              <Link style={{ display: "flex" }} href="/">
                <FullLogoIcon color="white" width="120px" />
              </Link>
              <Flex justifyContent="center">
                <Link href="www.twitter.com/dekkedapp">
                  <TwitterIcon color="white" size={SIZES.XLARGE} />
                </Link>
                <Spacer width={theme.spacers.size24} />
                <Link>
                  <FacebookIcon color="white" size={SIZES.XLARGE} />
                </Link>
                <Spacer width={theme.spacers.size24} />
                <Link>
                  <LinkedinIcon color="white" size={SIZES.XLARGE} />
                </Link>
                <Spacer width={theme.spacers.size24} />
                <Link>
                  <DiscordIcon color="white" size={SIZES.XLARGE} />
                </Link>
                <Spacer width={theme.spacers.size24} />
                <Link href="mailto:team@dekked.app">
                  <EmailIcon color="white" size={SIZES.XLARGE} />
                </Link>
              </Flex>
              {privacyPolicy}
              {copyRight}
            </Flex>
          ) : (
            <>
              <Flex
                flexDirection="column"
                alignItems="flex-start"
                justifyContent="space-between"
                height="100%"
              >
                <Link style={{ display: "flex" }} href="/">
                  <FullLogoIcon color="white" width="120px" />
                </Link>
                <Spacer height={theme.spacers.size16} />
                {copyRight}
              </Flex>
              <Flex alignItems="flex-start" height="100%">
                <Flex
                  flexDirection="column"
                  alignItems="flex-start"
                  mr={theme.spacers.size32}
                >
                  <H3 fontColor="white" styledAs="h6">
                    Contact us
                  </H3>
                  <Spacer height={theme.spacers.size16} />
                  <Text
                    fontColor="white"
                    fontSize={theme.typography.fontSizes.size14}
                  >
                    <Link
                      href="mailto:team@dekked.app"
                      fontColor="white"
                      fontSize={theme.typography.fontSizes.size14}
                    >
                      team@dekked.app
                    </Link>
                  </Text>
                </Flex>

                <Flex
                  flexDirection="column"
                  alignItems="flex-start"
                  mr={theme.spacers.size32}
                  height="100%"
                >
                  <H3 fontColor="white" styledAs="h6">
                    Follow us
                  </H3>
                  <Spacer height={theme.spacers.size16} />
                  <Flex
                    flexDirection="column"
                    height="100%"
                    justifyContent="space-between"
                    alignItems="flex-start"
                  >
                    <Link
                      fontColor="white"
                      fontSize={theme.typography.fontSizes.size14}
                      href="www.facebook.com"
                    >
                      Facebook
                    </Link>
                    <Link
                      fontColor="white"
                      fontSize={theme.typography.fontSizes.size14}
                      href="www.linkedin.com"
                    >
                      LinkedIn
                    </Link>
                    <Link
                      fontColor="white"
                      fontSize={theme.typography.fontSizes.size14}
                      href="www.discord.com"
                    >
                      Discord
                    </Link>
                    <Link
                      fontColor="white"
                      fontSize={theme.typography.fontSizes.size14}
                      href="www.twitter.com"
                    >
                      Twitter
                    </Link>
                  </Flex>
                </Flex>
                <Flex flexDirection="column" alignItems="flex-start">
                  <H3 fontColor="white" styledAs="h6">
                    Legal
                  </H3>
                  <Spacer height={theme.spacers.size16} />
                  {privacyPolicy}
                </Flex>
              </Flex>
            </>
          )}
        </StyledFooter>
      </Box>
    </FooterContainer>
  )
}

const StyledFooter = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: ${({ theme }) => theme.spacers.size32};
  padding-bottom: ${({ theme }) => theme.spacers.size32};
  width: 100%;
  height: 220px;
`
const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.fontColor};
`

export default Footer

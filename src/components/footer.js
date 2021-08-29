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
  FacebookIcon,
  EmailIcon,
  SIZES,
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
      href="https://dekked.com/legal"
    >
      Privacy policy
    </Link>
  )

  return (
    <FooterContainer id="contact">
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
                <Link href="https://twitter.com/dekkedapp">
                  <TwitterIcon color="white" size={SIZES.XLARGE} />
                </Link>
                <Spacer width={theme.spacers.size24} />
                <Link href="https://facebook.com/dekkedapp">
                  <FacebookIcon color="white" size={SIZES.XLARGE} />
                </Link>
                <Spacer width={theme.spacers.size24} />
                <Link href="https://www.linkedin.com/company/dekked">
                  <LinkedinIcon color="white" size={SIZES.XLARGE} />
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
                      target="_blank"
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
                  height="auto"
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
                      href="https://facebook.com/dekkedapp"
                    >
                      Facebook
                    </Link>
                    <Spacer height={theme.spacers.size16} />
                    <Link
                      fontColor="white"
                      fontSize={theme.typography.fontSizes.size14}
                      href="https://www.linkedin.com/company/dekked"
                    >
                      LinkedIn
                    </Link>
                    <Spacer height={theme.spacers.size16} />
                    <Link
                      fontColor="white"
                      fontSize={theme.typography.fontSizes.size14}
                      href="https://twitter.com/dekkedapp"
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
  padding-top: ${({ theme }) => theme.spacers.size64};
  padding-bottom: ${({ theme }) => theme.spacers.size64};
  width: 100%;
  height: 284px;
`
const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.fontColor};
`

export default Footer

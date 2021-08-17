import React, { useContext, useState, useEffect } from "react"
import styled, { ThemeContext } from "styled-components"
import { Link } from "gatsby"
import {
  FullLogoIcon,
  Button,
  SIZES,
  Flex,
  Spacer,
  HamburgerMenuIcon,
  IconActive,
  CloseIcon,
} from "dekked-design-system"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { useResponsiveLayout } from "../utils"
import { LAYOUT_LARGE } from "../utils/hooks/useResponsiveLayout"

const Header = () => {
  const theme = useContext(ThemeContext)
  const layout = useResponsiveLayout()
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    console.log(showMenu)
    if (layout === LAYOUT_LARGE && showMenu) {
      setShowMenu(false)
    }
  }, [layout, showMenu])

  return (
    <>
      <TopBar>
        {layout === LAYOUT_LARGE ? (
          <>
            <Flex alignItems="center" width="auto">
              <Link style={{ display: "flex" }} href="/">
                <FullLogoIcon color={theme.colors.primary} width="175px" />
              </Link>
              <Spacer width={theme.spacers.size32} />
              <StyledAnchorLink href="#Features">Features</StyledAnchorLink>
              <Spacer width={theme.spacers.size32} />
              <StyledAnchorLink href="#Contact">Contact</StyledAnchorLink>
            </Flex>
            <Flex
              alignItems="center"
              width="auto"
              aria-label="hello"
              style={{ position: "sticky" }}
            >
              <ExternalLink href="https://app.dekked.com/login">
                Log in
              </ExternalLink>
              <Spacer width={theme.spacers.size32} />
              <ExternalLink href="https://app.dekked.com/sign-up">
                <Button
                  borderRadius={theme.sizes.borderRadius[SIZES.LARGE]}
                  size={SIZES.MEDIUM}
                  fontSize={theme.typography.fontSizes.size18}
                >
                  Sign up
                </Button>
              </ExternalLink>
            </Flex>
          </>
        ) : (
          <Flex alignItems="center" justifyContent="space-between">
            <Link style={{ display: "flex" }} href="/">
              <FullLogoIcon color={theme.colors.primary} width="175px" />
            </Link>
            <IconActive
              handleClick={() => setShowMenu(prevState => !prevState)}
            >
              {showMenu ? (
                <CloseIcon size="40px" />
              ) : (
                <HamburgerMenuIcon size="40px" />
              )}
            </IconActive>
          </Flex>
        )}
      </TopBar>
      {showMenu ? (
        <HiddenMenu>
          <StyledAnchorLink href="#Features">Features</StyledAnchorLink>
          <StyledAnchorLink href="#Contact">Contact</StyledAnchorLink>
          <ExternalLink href="https://app.dekked.com/login">
            Log in
          </ExternalLink>
          <Spacer height={theme.spacers.size64} />
          <ExternalLink href="https://app.dekked.com/sign-up">
            <Button
              fullWidth
              borderRadius={theme.sizes.borderRadius[SIZES.LARGE]}
              size={SIZES.LARGE}
              fontSize={theme.typography.fontSizes.size18}
            >
              Sign up
            </Button>
          </ExternalLink>
        </HiddenMenu>
      ) : null}
    </>
  )
}

const ExternalLink = styled.a`
  font-size: ${({ theme }) => theme.typography.fontSizes.size18};
  cursor: pointer;
`

const StyledAnchorLink = styled(AnchorLink)`
  font-size: ${({ theme }) => theme.typography.fontSizes.size18};
`

const HiddenMenu = styled.nav`
  z-index: 99;
  width: 100%;
  background: white;
  height: 100vh;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  position: fixed;
  padding: ${({ theme }) => theme.spacers.size32};

  a:not(:last-of-type) {
    padding: ${({ theme }) => theme.spacers.size32} 0px
      ${({ theme }) => theme.spacers.size16} 0px;
    border-bottom: solid 1px ${({ theme }) => theme.colors.grey3};
  }
`

const TopBar = styled.nav`
  width: 100%;
  margin: auto;
  min-height: 104px;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacers.size32}
    ${({ theme }) => theme.spacers.size32};
`

export default Header

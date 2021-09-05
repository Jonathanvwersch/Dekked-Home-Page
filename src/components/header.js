import React, { useContext, useState, useEffect } from "react"
import styled, { ThemeContext } from "styled-components"
import {
  FullLogoIcon,
  Button,
  SIZES,
  Flex,
  Spacer,
  HamburgerMenuIcon,
  IconActive,
  CloseIcon,
  Link,
} from "dekked-design-system"
import { Link as InternalLink } from "gatsby"
import { useResponsiveLayout } from "../utils"
import { LAYOUT_MEDIUM, LAYOUT_SMALL } from "../utils/hooks/useResponsiveLayout"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Header = ({ privacyPolicy }) => {
  const theme = useContext(ThemeContext)
  const layout = useResponsiveLayout()
  const [showMenu, setShowMenu] = useState(false)
  const isSmallOrMedium = layout === LAYOUT_SMALL || layout === LAYOUT_MEDIUM

  useEffect(() => {
    if (!isSmallOrMedium && showMenu) {
      setShowMenu(false)
    }
  }, [layout, showMenu])

  const topBarStyles = showMenu
    ? {
        zIndex: "1000",
        width: "100%",
      }
    : {}

  return (
    <>
      <TopBar style={topBarStyles} showMenu={showMenu}>
        <Container
          showMenu={showMenu}
          className="innerContainer"
          justifyContent="space-between"
          flexDirection={showMenu ? "column" : "row"}
        >
          {!isSmallOrMedium ? (
            <>
              <Flex alignItems="center" width="auto" as="nav">
                <InternalLink
                  style={{ display: "flex" }}
                  to="/"
                  aria-label="Home page"
                >
                  <FullLogoIcon color={theme.colors.primary} height="30px" />
                </InternalLink>
                <Spacer width={theme.spacers.size32} />
                {!privacyPolicy ? (
                  <>
                    <StyledAnchorLink href="#features">
                      Features
                    </StyledAnchorLink>
                    <Spacer width={theme.spacers.size32} />
                    <StyledAnchorLink href="#contact">Contact</StyledAnchorLink>
                  </>
                ) : null}
              </Flex>
              <Flex alignItems="center" width="auto">
                <StyledLink
                  fontSize={theme.typography.fontSizes.size18}
                  href="https://app.dekked.com/login"
                >
                  Log in
                </StyledLink>
                <Spacer width={theme.spacers.size32} />
                <StyledLink
                  fontSize={theme.typography.fontSizes.size18}
                  href="https://app.dekked.com/sign-up"
                >
                  <Button
                    borderRadius={theme.sizes.borderRadius[SIZES.LARGE]}
                    size={SIZES.MEDIUM}
                    fontSize={theme.typography.fontSizes.size18}
                  >
                    Sign up
                  </Button>
                </StyledLink>
              </Flex>
            </>
          ) : (
            <Flex alignItems="center" justifyContent="space-between">
              <InternalLink
                style={{ display: "flex" }}
                to="/"
                aria-label="Home page"
              >
                <FullLogoIcon color={theme.colors.primary} height="25px" />
              </InternalLink>
              <IconActive
                handleClick={() => setShowMenu(prevState => !prevState)}
                ariaLabel={showMenu ? "Close menu" : "Open menu"}
              >
                {showMenu ? (
                  <CloseIcon size="32px" />
                ) : (
                  <HamburgerMenuIcon size="32px" />
                )}
              </IconActive>
            </Flex>
          )}
          {showMenu ? (
            <HiddenMenu>
              {!privacyPolicy ? (
                <>
                  <StyledAnchorLink
                    onClick={() => setShowMenu(false)}
                    href="#features"
                  >
                    Features
                  </StyledAnchorLink>
                  <StyledAnchorLink
                    onClick={() => setShowMenu(false)}
                    href="#contact"
                  >
                    Contact
                  </StyledAnchorLink>
                </>
              ) : null}
              <StyledLink href="https://app.dekked.com/login">
                Log in
              </StyledLink>
              <Spacer height={theme.spacers.size64} />
              <StyledLink href="https://app.dekked.com/sign-up">
                <Button
                  fullWidth
                  borderRadius={theme.sizes.borderRadius[SIZES.LARGE]}
                  size={SIZES.LARGE}
                  fontSize={theme.typography.fontSizes.size18}
                >
                  Sign up
                </Button>
              </StyledLink>
            </HiddenMenu>
          ) : null}
        </Container>
      </TopBar>
    </>
  )
}

const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.typography.fontSizes.size18};
`

const StyledAnchorLink = styled(AnchorLink)`
  font-size: ${({ theme }) => theme.typography.fontSizes.size18};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  transition: all 0.3s ease-in-out;

  &:active {
    filter: ${({ theme }) => theme.colors.active.filter};
  }
`

const HiddenMenu = styled.nav`
  z-index: 99;
  width: 100%;
  background: #dbf9fe;
  display: flex;
  flex-direction: column;
  left: 0px;
  top: 5rem;
  width: 100vw;

  padding-left: ${({ theme }) => theme.spacers.size32};
  padding-right: ${({ theme }) => theme.spacers.size32};
  padding-bottom: ${({ theme }) => theme.spacers.size64};
  height: 100vh;

  a:not(:last-of-type) {
    padding: ${({ theme }) => theme.spacers.size32} 0px
      ${({ theme }) => theme.spacers.size16} 0px;
    border-bottom: solid 1px ${({ theme }) => theme.colors.grey3};
  }
`

const Container = styled(Flex)`
  width: 100%;
  position: ${({ showMenu }) => showMenu && "fixed"};
  z-index: 10000;
  box-shadow: ${({ showMenu }) =>
    showMenu &&
    "rgb(15 15 15 / 5%) 0px 0px 0px 0px,rgb(15 15 15 / 10%) 0px 0px 0px, rgb(15 15 15 / 20%) 0px 9px 12px"};
  background-color: #dbf9fe;

  padding: ${({ theme }) => theme.spacers.size20}
    ${({ theme }) => theme.spacers.size32};
`

const TopBar = styled.header`
  background-color: #dbf9fe;
  width: 100%;
  z-index: 100;
`

export default Header

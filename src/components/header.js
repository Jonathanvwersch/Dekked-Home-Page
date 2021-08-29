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
import { useResponsiveLayout } from "../utils"
import { LAYOUT_MEDIUM, LAYOUT_SMALL } from "../utils/hooks/useResponsiveLayout"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Header = () => {
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
      <TopBar style={topBarStyles}>
        <Container className="innerContainer">
          {!isSmallOrMedium ? (
            <>
              <Flex alignItems="center" width="auto">
                <StyledLink
                  style={{ display: "flex" }}
                  href="/"
                  aria-label="Home page"
                >
                  <FullLogoIcon color={theme.colors.primary} height="30px" />
                </StyledLink>
                <Spacer width={theme.spacers.size32} />
                <StyledAnchorLink href="#features">Features</StyledAnchorLink>
                <Spacer width={theme.spacers.size32} />
                <StyledAnchorLink href="#contact">Contact</StyledAnchorLink>
              </Flex>
              <Flex
                alignItems="center"
                width="auto"
                aria-label="hello"
                style={{ position: "sticky" }}
              >
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
              <StyledLink
                style={{ display: "flex" }}
                href="/"
                aria-label="Home page"
              >
                <FullLogoIcon color={theme.colors.primary} width="175px" />
              </StyledLink>
              <IconActive
                handleClick={() => setShowMenu(prevState => !prevState)}
                ariaLabel={showMenu ? "Close menu" : "Open menu"}
              >
                {showMenu ? (
                  <CloseIcon size="40px" />
                ) : (
                  <HamburgerMenuIcon size="40px" />
                )}
              </IconActive>
            </Flex>
          )}{" "}
        </Container>
      </TopBar>
      {showMenu ? (
        <HiddenMenu>
          <StyledAnchorLink onClick={() => setShowMenu(false)} href="#features">
            Features
          </StyledAnchorLink>
          <StyledAnchorLink onClick={() => setShowMenu(false)} href="#contact">
            Contact
          </StyledAnchorLink>
          <StyledLink href="https://app.dekked.com/login">Log in</StyledLink>
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

  &:active {
    filter: ${({ theme }) => theme.colors.active.filter};
  }
`

const HiddenMenu = styled.nav`
  top: ${({ theme }) => theme.spacers.size64};
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

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: white;

  padding: ${({ theme }) => theme.spacers.size20}
    ${({ theme }) => theme.spacers.size32};
`

const TopBar = styled.nav`
  background-color: white;
  position: fixed;
  width: 100%;
  z-index: 100;
`

export default Header

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
import { LAYOUT_LARGE } from "../utils/hooks/useResponsiveLayout"

const Header = () => {
  const theme = useContext(ThemeContext)
  const layout = useResponsiveLayout()
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    if (layout === LAYOUT_LARGE && showMenu) {
      setShowMenu(false)
    }
  }, [layout, showMenu])

  return (
    <>
      <TopBar>
        <Container className="innerContainer">
          {layout === LAYOUT_LARGE ? (
            <>
              <Flex alignItems="center" width="auto">
                <StyledLink style={{ display: "flex" }} href="/">
                  <FullLogoIcon color={theme.colors.primary} width="175px" />
                </StyledLink>
                <Spacer width={theme.spacers.size32} />
                <StyledLink href="#Features">Features</StyledLink>
                <Spacer width={theme.spacers.size32} />
                <StyledLink href="#Contact">Contact</StyledLink>
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
              <StyledLink style={{ display: "flex" }} href="/">
                <FullLogoIcon color={theme.colors.primary} width="175px" />
              </StyledLink>
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
          )}{" "}
        </Container>
      </TopBar>
      {showMenu ? (
        <HiddenMenu>
          <StyledLink href="#Features">Features</StyledLink>
          <StyledLink href="#Contact">Contact</StyledLink>
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

const Container = styled.div`
  width: 100%;
  min-height: 104px;
  display: flex;
  justify-content: space-between;

  padding: ${({ theme }) => theme.spacers.size32}
    ${({ theme }) => theme.spacers.size32};
`

const TopBar = styled.nav``

export default Header

import React, { useContext } from "react"
import styled, { ThemeContext } from "styled-components"
import { Spacer, Flex, Text, FullLogoIcon, H3 } from "dekked-design-system"

const Footer = () => {
  const theme = useContext(ThemeContext)
  const date = new Date()
  const year = date.getFullYear()

  return (
    <FooterContainer>
      <div className="innerContainer">
        <StyledFooter>
          <Flex flexDirection="column" alignItems="flex-start">
            <FullLogoIcon color="white" width="175px" />
            <Spacer height={theme.spacers.size64} />
            <Text
              fontColor="white"
              fontSize={theme.typography.fontSizes.size14}
            >
              © Copyright {year} Dekked.<br></br>Built with ❤️ by the Dekked
              team
            </Text>
          </Flex>
          <Flex flexDirection="column" alignItems="flex-start">
            <H3 styledAs="h4">Get in touch</H3>
            <Spacer height={theme.spacers.size64} />
            <Text
              fontColor="white"
              fontSize={theme.typography.fontSizes.size14}
            >
              Questions or feedback?<br></br>Email us at
              <a href="mailto:team@dekked.app">team@dekked.app</a>
            </Text>
          </Flex>
        </StyledFooter>
      </div>
    </FooterContainer>
  )
}

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: ${({ theme }) => theme.spacers.size48};
  padding-bottom: ${({ theme }) => theme.spacers.size48};
  width: 100%;
`
const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.fontColor};
`

export default Footer

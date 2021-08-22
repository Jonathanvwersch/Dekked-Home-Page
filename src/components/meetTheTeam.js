import React, { useContext } from "react"
import styled, { ThemeContext } from "styled-components"
import {
  H1,
  Spacer,
  H2,
  Box,
  Flex,
  Button,
  SIZES,
  Text,
  H3,
} from "dekked-design-system"
import { SantanderIcon, DffrntIcon, Acclr8Icon, UOBIcon } from "../assets"
import { useResponsiveLayout } from "../utils/hooks"
import Jade from "../assets/Jade.png"
import Thomas from "../assets/Thomas.png"
import Jonathan from "../assets/Jonathan.png"
import { LAYOUT_LARGE } from "../utils/hooks/useResponsiveLayout"

const MeetTheTeam = () => {
  const theme = useContext(ThemeContext)
  const layout = useResponsiveLayout()
  const isLayoutNotLarge = !(layout === LAYOUT_LARGE)

  return (
    <Container>
      <Flex className="innerContainer" flexDirection="column">
        <H2 textAlign="center">Meet the Team</H2>
        <Flex
          width="100%"
          justifyContent="space-between"
          flexWrap="wrap"
          mt={theme.spacers.size48}
        >
          <Flex
            flexDirection="column"
            px={theme.spacers.size16}
            width="auto"
            mb={theme.spacers.size32}
          >
            <Image src={Jade} alt="Jade" />
            <H3 styledAs="h4">Jade Chau</H3>
            <Spacer height={theme.spacers.size4} />
            <Text fontSize={theme.typography.fontSizes.size20} as="p">
              Designer
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            p={theme.spacers.size8}
            width="auto"
            mb={theme.spacers.size32}
          >
            <Image src={Jonathan} alt="Jonathan" />
            <H3 styledAs="h4">Jonathan van Wersch</H3>
            <Spacer height={theme.spacers.size4} />
            <Text fontSize={theme.typography.fontSizes.size20} as="p">
              Developer
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            p={theme.spacers.size8}
            width="auto"
            mb={theme.spacers.size32}
          >
            <Image src={Thomas} alt="Thomas" />
            <H3 styledAs="h4">Thomas Santini</H3>
            <Spacer height={theme.spacers.size4} />
            <Text fontSize={theme.typography.fontSizes.size20} as="p">
              Designer
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  )
}

const Container = styled.section`
  padding-bottom: ${({ theme }) => theme.spacers.size32};
  padding-top: ${({ theme }) => theme.spacers.size64};
`

const Image = styled.img`
  height: 300px;
  margin-bottom: ${({ theme }) => theme.spacers.size32};
`

export default MeetTheTeam

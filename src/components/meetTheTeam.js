import React, { useContext } from "react"
import styled, { ThemeContext } from "styled-components"
import { Link } from "gatsby"
import { Spacer, H2, Flex, Text, H3 } from "dekked-design-system"
import { useResponsiveLayout } from "../utils/hooks"
import Jade from "../assets/Jade.png"
import Thomas from "../assets/Thomas.png"
import Jonathan from "../assets/Jonathan.png"
import { LAYOUT_MEDIUM, LAYOUT_SMALL } from "../utils/hooks/useResponsiveLayout"

const MeetTheTeam = () => {
  const theme = useContext(ThemeContext)
  const layout = useResponsiveLayout()
  const isSmallOrMedium = layout === LAYOUT_SMALL || layout === LAYOUT_MEDIUM
  const isLayoutSmall = layout === LAYOUT_SMALL

  return (
    <Container id="team">
      <Flex className="innerContainer" flexDirection="column">
        <H2 textAlign="center" styledAs={isLayoutSmall ? "h3" : "h2"}>
          Meet the Team
        </H2>
        <Flex
          width="100%"
          justifyContent={isSmallOrMedium ? "center" : "space-between"}
          flexWrap="wrap"
          mt={theme.spacers.size128}
        >
          <Flex
            flexDirection="column"
            px={theme.spacers.size32}
            width="auto"
            mb={theme.spacers.size32}
          >
            <Link href="https://linkedin.com/in/jadechau">
              <Image src={Jade} alt="Jade" />
            </Link>
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
            <Link href="https://linkedin.com/in/jonathan-van-wersch/">
              <Image src={Jonathan} alt="Jonathan" />
            </Link>
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
            <Link href="https://linkedin.com/in/thomas-santini/">
              <Image src={Thomas} alt="Thomas" />
            </Link>
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
  background: linear-gradient(
    180deg,
    rgba(202, 245, 252, 1) 50%,
    rgba(255, 255, 255, 1) 100%
  );
`

const Image = styled.img`
  height: 280px;
  margin-bottom: ${({ theme }) => theme.spacers.size32};
`

export default MeetTheTeam

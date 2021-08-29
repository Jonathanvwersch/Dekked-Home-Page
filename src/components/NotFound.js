import * as React from "react"
import {
  Spacer,
  Flex,
  Button,
  BUTTON_THEME,
  H1,
  Text,
  Divider,
  SIZES,
} from "dekked-design-system"
import { ThemeContext } from "styled-components"
import { LAYOUT_MEDIUM, LAYOUT_SMALL } from "../utils/hooks/useResponsiveLayout"
import { useResponsiveLayout } from "../utils/hooks"

const NotFound = () => {
  const theme = React.useContext(ThemeContext)
  const layout = useResponsiveLayout()
  const isSmallOrMedium = layout === LAYOUT_SMALL || layout === LAYOUT_MEDIUM

  return (
    <Flex width="auto" height="auto" alignItems="unset" minHeight="100vh">
      <Flex
        flexDirection="column"
        mr={isSmallOrMedium ? undefined : theme.spacers.size32}
        flexGrow={1}
        displayFlex="1 0 0"
        justifyContent="center"
        alignItems="center"
        p={isSmallOrMedium ? theme.spacers.size32 : undefined}
      >
        <Flex maxWidth="24rem" alignItems="flex-start" flexDirection="column">
          <H1>404</H1>
          <Spacer height={theme.spacers.size16} />
          <Divider
            color={theme.colors.primary}
            height={theme.spacers.size4}
            width={theme.spacers.size128}
          />
          <Spacer height={theme.spacers.size16} />
          <Text as="p" fontSize={theme.typography.fontSizes.size22}>
            Sorry, we can't seem to find the page you're looking for
          </Text>
          <Spacer height={theme.spacers.size32} />
          <Button
            as="a"
            size={SIZES.LARGE}
            buttonStyle={BUTTON_THEME.SECONDARY}
            href="https://dekked.com"
          >
            Go home
          </Button>
        </Flex>
      </Flex>
      {!isSmallOrMedium && <Flex flexGrow={1} displayFlex="1 0 0" />}
    </Flex>
  )
}

export default NotFound

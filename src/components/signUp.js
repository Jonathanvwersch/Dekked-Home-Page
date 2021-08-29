import React, { useContext } from "react"
import { ThemeContext } from "styled-components"
import { Spacer, H2, Flex, Button, SIZES, Text } from "dekked-design-system"
import { useResponsiveLayout } from "../utils/hooks"
import { LAYOUT_SMALL, LAYOUT_XLARGE } from "../utils/hooks/useResponsiveLayout"

const SignUp = () => {
  const theme = useContext(ThemeContext)
  const layout = useResponsiveLayout()
  const isLayoutNotXLarge = !(layout === LAYOUT_XLARGE)
  const isLayoutSmall = layout === LAYOUT_SMALL

  return (
    <section
      style={{
        background:
          "linear-gradient(180deg,rgba(202, 245, 252, 1) 50%,rgba(255, 255, 255, 1) 100%)",
      }}
    >
      <Flex
        mb={isLayoutNotXLarge ? theme.spacers.size64 : undefined}
        flexDirection={isLayoutNotXLarge ? "column" : "row"}
        className="innerContainer"
        pt={isLayoutSmall ? theme.spacers.size64 : theme.spacers.size128}
        pb={!isLayoutSmall ? theme.spacers.size128 : undefined}
      >
        <Flex
          flexDirection="column"
          width={!isLayoutNotXLarge ? "40%" : undefined}
          alignItems={isLayoutNotXLarge ? "center" : "flex-start"}
        >
          <H2
            textAlign={isLayoutNotXLarge && "center"}
            styledAs={isLayoutSmall ? "h3" : "h1"}
          >
            So what are you waiting for?
          </H2>
          <Spacer height={theme.spacers.size16} />
          <Text
            textAlign={isLayoutNotXLarge && "center"}
            as="p"
            fontSize={
              isLayoutSmall
                ? theme.typography.fontSizes.size18
                : theme.typography.fontSizes.size22
            }
          >
            Join Dekked today to start studying smarter
          </Text>
          <Spacer height={theme.spacers.size32} />
          <Button
            as="a"
            borderRadius={theme.sizes.borderRadius[SIZES.LARGE]}
            size={SIZES.XLARGE}
            fontSize={theme.typography.fontSizes.size20}
            href="https://app.dekked.com/sign-up"
          >
            Try Dekked for free
          </Button>
          {isLayoutNotXLarge && <Spacer height={theme.spacers.size64} />}
        </Flex>
        {!isLayoutSmall && (
          <img
            src="https://dekked-landing-page.s3.eu-west-2.amazonaws.com/images2/SignUp.png"
            alt="Sign up with Dekked"
            style={{ width: isLayoutNotXLarge ? "80%" : "60%" }}
          />
        )}
      </Flex>
    </section>
  )
}

export default SignUp

import React, { useContext } from "react"
import { ThemeContext } from "styled-components"
import { Spacer, H2, Box, Flex } from "dekked-design-system"

const VideoDemo = () => {
  const theme = useContext(ThemeContext)

  return (
    <Box py={theme.spacers.size64}>
      <Flex className="innerContainer">
        <Flex flexDirection="column" width="">
          <H2 textAlign="center">Check out the product in action</H2>
          <Spacer height={theme.spacers.size32} />
        </Flex>
      </Flex>
    </Box>
  )
}

export default VideoDemo

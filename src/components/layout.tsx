import * as React from "react"
import { ReactNode, VFC, memo } from "react"
import { Box, Flex, Spacer } from "@chakra-ui/react"

import Header from "./header"
import SnsNavi from "./sns/snsNavi"
import CanvasBg from "./canvasBg"

type Props = {
  children: ReactNode
  color: string
}

const Layout: VFC<Props> = memo(props => {
  const { children, color } = props
  return (
    <Box bgColor={color}>
      <Header />
      <Flex
        direction="column"
        bgColor={color}
        maxW="1280px"
        minH="100vh"
        mx="auto"
      >
        <CanvasBg />
        <Box
          as="main"
          px={{ base: 4, lg: 10 }}
          pt={{ base: 28, md: 40 }}
          // position="absolute"
          zIndex="100"
        >
          {children}
        </Box>
        <Spacer />
        <SnsNavi />
      </Flex>
    </Box>
  )
})

export default Layout

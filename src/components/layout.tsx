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
      <CanvasBg />
      <Header />
      <Box as="main" maxW="1280px" minH="100vh" mx="auto">
        <SnsNavi />
        <Flex direction="column" bgColor={color}>
          <Box px={{ base: 4, lg: 10 }} my={{ base: 28, md: 40 }} zIndex="100">
            {children}
          </Box>
          <Spacer />
        </Flex>
      </Box>
    </Box>
  )
})

export default Layout

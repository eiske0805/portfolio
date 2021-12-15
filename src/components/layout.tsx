import * as React from "react"
import { ReactNode, VFC, memo } from "react"
import { ChakraProvider, Box, Flex, Spacer } from "@chakra-ui/react"
import "@fontsource/do-hyeon"

import Header from "./header"
import SnsNavi from "./sns/snsNavi"
import theme from "../theme/theme"
import "../styles/style.scss"

type Props = {
  children: ReactNode
  color: string
}

const Layout: VFC<Props> = memo(props => {
  const { children, color } = props
  return (
    <ChakraProvider theme={theme}>
      <Box bgColor={color}>
        <Header />
        <Flex
          direction="column"
          bgColor={color}
          maxW="1280px"
          minH="100vh"
          mx="auto"
        >
          <Box as="main" px={{ base: 4, lg: 10 }} pt={{ base: 28, md: 40 }}>
            {children}
          </Box>
          <Spacer />
          <SnsNavi />
        </Flex>
      </Box>
    </ChakraProvider>
  )
})

export default Layout

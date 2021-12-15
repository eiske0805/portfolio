import * as React from "react"
import { VFC, memo } from "react"
import { Link } from "gatsby"
import { Box, Flex } from "@chakra-ui/react"

import routes from "../routes/routes"

const Header: VFC = memo(() => (
  <Box
    as="header"
    bg="rgba(255, 255, 255, 0.75)"
    position="fixed"
    top="0"
    w="100vw"
    zIndex="100"
  >
    <Flex
      justify={{ base: "center", md: "flex-start" }}
      maxW="1280px"
      mx="auto"
      py="1"
      px={{ base: 4, lg: 10 }}
      fontSize={{ base: "sm", md: "md", lg: "ls" }}
      fontWeight="bold"
      letterSpacing="widest"
    >
      {routes.map(route => (
        <Link
          key={route.path}
          to={route.path}
          activeStyle={{
            color: route.color,
            cursor: "default",
            pointerEvents: "none",
          }}
        >
          {route.name}
        </Link>
      ))}
    </Flex>
  </Box>
))

export default Header

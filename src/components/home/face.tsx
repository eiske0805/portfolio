import * as React from "react"
import { memo, useState, VFC } from "react"
import { Box, Flex } from "@chakra-ui/react"
import { InView } from "react-intersection-observer"

import Portrait from "./portrait"
import Girl from "./girl"
import Play from "./play"
import Pause from "./pause"

const Face: VFC = memo(() => {
  const [playAnimation, setPLayAnimation] = useState<boolean>(false)

  const animationToggle = () => {
    setPLayAnimation(!playAnimation)
  }

  return (
    <InView triggerOnce={true} rootMargin={"-50px 0px"}>
      {({ inView, ref }) => (
        <Box
          w={{ base: "100%", md: "30%" }}
          ref={ref}
          className={
            inView
              ? " face-container  appear   inview "
              : " face-container  appear "
          }
        >
          <Box className="flip-container item">
            <Box
              className={playAnimation ? "flipper" : "flipper paused"}
              w={{ base: "60vw", md: "25vw", xl: "320px" }}
              h={{ base: "60vw", md: "25vw", xl: "320px" }}
              mx={{ base: "auto", md: 0 }}
            >
              <Box className="front" w="100%">
                <Portrait />
              </Box>
              <Box className="back" w="100%">
                <Girl />
              </Box>
            </Box>
          </Box>

          <Flex className="play-pause-container item" justify="flex-end">
            <Box
              className="play-pause"
              w={{ base: "2rem", lg: "3rem" }}
              bg="cWhite"
              borderRadius="full"
              onClick={animationToggle}
              transition="0.4s"
              cursor="pointer"
              _hover={{ bg: "cOrange", transform: "scale(1.2)" }}
            >
              {playAnimation ? <Pause /> : <Play />}
            </Box>
          </Flex>
        </Box>
      )}
    </InView>
  )
})

export default Face

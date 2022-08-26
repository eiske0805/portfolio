import React, { memo, VFC, Suspense } from "react"
import { Flex, Box } from "@chakra-ui/react"
import { Canvas } from "@react-three/fiber"
import { useInView } from "react-intersection-observer"

import Envelope from "./envelope"
import Twitter from "./twitter"
import Insta from "./insta"
import Github from "./github"

const SnsNavi: VFC = memo(() => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
  })

  return (
    <Box
      as="nav"
      px={{ base: 4, lg: 10 }}
      pt={{ base: 8, md: 10 }}
      className="sns"
      zIndex="200"
    >
      <Flex
        as="ul"
        justify="flex-end"
        ref={ref}
        className={inView ? "appear inview" : "appear"}
      >
        <Box as="li" w="9.5rem" h="3rem" ml="0.5rem" className="item">
          <Canvas
            dpr={window.devicePixelRatio}
            camera={{ position: [0, 0, 0] }}
            linear={true}
          >
            <Suspense fallback={null}>
              <Github />
              <Twitter />
              <Insta />
              <Envelope />
            </Suspense>
          </Canvas>
        </Box>
      </Flex>
    </Box>
  )
})

export default SnsNavi

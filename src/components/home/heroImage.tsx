import React, { VFC, memo, Suspense } from "react"
import { Box } from "@chakra-ui/react"
import { Canvas } from "@react-three/fiber"

import HeroMesh from "./heroMesh"
import { isBrowser } from "../../utils"

type Props = {
  inView: boolean
}

const HeroImage: VFC<Props> = memo(({ inView }) => {
  let dpr = 1
  if (isBrowser) {
    dpr = window.devicePixelRatio
  }

  return (
    <Box
      w={{ base: "100%", md: "30%" }}
      className={inView ? "appear inview" : "appear"}
    >
      <Box
        className="item"
        mx={{ base: "auto", md: 0 }}
        w={{ base: "60vw", md: "30vw", xl: "320px" }}
        h={{ base: "60vw", md: "30vw", xl: "320px" }}
      >
        <Canvas dpr={dpr} className="root" linear={true}>
          <Suspense fallback={null}>
            <HeroMesh />
          </Suspense>
        </Canvas>
      </Box>
    </Box>
  )
})

export default HeroImage

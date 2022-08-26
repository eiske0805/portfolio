import React, { memo, VFC, Suspense } from "react"
import { Box, Heading, Text } from "@chakra-ui/react"
import { Canvas } from "@react-three/fiber"
import { useInView } from "react-intersection-observer"

import IpadMesh from "./ipadMesh"

const Design: VFC = memo(() => {
  const uiDesign = "UI/UX\u00A0Design".split("")

  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
  })

  return (
    <Box
      w={{ base: "100%", md: "50%" }}
      ref={ref}
      className={
        inView
          ? "appear right animate-title inview"
          : "appear right animate-title"
      }
    >
      <Box
        bg="cCreem"
        borderRadius="full"
        w={{ base: "60vw", md: "30vw", xl: "320px" }}
        h={{ base: "60vw", md: "30vw", xl: "320px" }}
        mx="auto"
        mb="10"
        ref={ref}
        className={inView ? "appear right inview" : "appear right"}
      >
        <Box className="item" w="100%" h="100%">
          <Canvas
            dpr={window.devicePixelRatio}
            camera={{ position: [0, 0, 13] }}
            linear={true}
          >
            <Suspense fallback={null}>
              <IpadMesh />
            </Suspense>
          </Canvas>
        </Box>
      </Box>
      <Heading
        as="h1"
        fontSize={{ base: "1.875rem", lg: "2.25rem" }}
        textAlign="center"
        mb={{ base: 7, lg: 10 }}
        lineHeight="tall"
      >
        {uiDesign.map((char, index) => (
          <span key={index} className="char">
            {char}
          </span>
        ))}
      </Heading>
      <Box w="60%" mx="auto" mb="32">
        <Heading
          as="h2"
          fontSize={{ base: "1.5rem", md: "1.75rem" }}
          className="item"
        >
          Tools
        </Heading>
        <Text
          as="p"
          fontSize={{ base: "1.25rem", lg: "1.5rem" }}
          className="item"
        >
          Procreate
        </Text>
        <Text
          as="p"
          fontSize={{ base: "1.25rem", lg: "1.5rem" }}
          className="item"
        >
          Affinity Designer
        </Text>
        <Text
          as="p"
          fontSize={{ base: "1.25rem", lg: "1.5rem" }}
          className="item"
        >
          Affinity Photo
        </Text>
      </Box>
    </Box>
  )
})

export default Design

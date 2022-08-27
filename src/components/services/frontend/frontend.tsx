import React, { memo, VFC, Suspense } from "react"
import { Box, Heading, Text } from "@chakra-ui/react"
import { Canvas } from "@react-three/fiber"
import { useInView } from "react-intersection-observer"

import CodeMesh from "./codeMesh"
import { isBrowser } from "../../../utils"

const Frontend: VFC = memo(() => {
  const frontEnd = `Front-end`.split("")
  const development = "Development".split("")

  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
  })

  let dpr = 1
  if (isBrowser) {
    dpr = window.devicePixelRatio
  }

  return (
    <Box
      w={{ base: "100%", md: "50%" }}
      ref={ref}
      className={
        inView
          ? "appear left animate-title inview"
          : "appear animate-title left"
      }
    >
      <Box
        bg="cCreem"
        borderRadius="full"
        w={{ base: "60vw", md: "30vw", xl: "320px" }}
        h={{ base: "60vw", md: "30vw", xl: "320px" }}
        mx="auto"
        mb="10"
      >
        <Box className="item" w="100%" h="100%">
          <Canvas dpr={dpr} camera={{ position: [0, 0, 13] }} linear={true}>
            <Suspense fallback={null}>
              <CodeMesh />
            </Suspense>
          </Canvas>
        </Box>
      </Box>
      <Heading
        as="h1"
        textAlign="center"
        fontSize={{ base: "1.875rem", lg: "2.25rem" }}
        mb={{ base: 7, lg: 10 }}
        lineHeight="tall"
      >
        {frontEnd.map((char, index) => (
          <span key={index} className="char">
            {char}
          </span>
        ))}
        <br />
        {development.map((char, index) => (
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
          Languages
        </Heading>
        <Text
          as="p"
          fontSize={{ base: "1.25rem", lg: "1.5rem" }}
          className="item"
        >
          HTML
        </Text>
        <Text
          as="p"
          fontSize={{ base: "1.25rem", lg: "1.5rem" }}
          className="item"
        >
          CSS
        </Text>
        <Text
          as="p"
          fontSize={{ base: "1.25rem", lg: "1.5rem" }}
          className="item"
        >
          JavaScript
        </Text>
        <Text
          as="p"
          fontSize={{ base: "1.25rem", lg: "1.5rem" }}
          className="item"
        >
          TypeScript
        </Text>
        <Text
          as="p"
          fontSize={{ base: "1.25rem", lg: "1.5rem" }}
          className="item"
        >
          PHP
        </Text>
        <Heading
          as="h2"
          fontSize={{ base: "1.5rem", md: "1.75rem" }}
          mt="5"
          className="item"
        >
          Frameworks
        </Heading>
        <Text
          as="p"
          fontSize={{ base: "1.25rem", lg: "1.5rem" }}
          className="item"
        >
          React
        </Text>
        <Heading
          as="h2"
          fontSize={{ base: "1.5rem", md: "1.75rem" }}
          mt="5"
          className="item"
        >
          CMS
        </Heading>
        <Text
          as="p"
          fontSize={{ base: "1.25rem", lg: "1.5rem" }}
          className="item"
        >
          Word Press
        </Text>
      </Box>
    </Box>
  )
})

export default Frontend

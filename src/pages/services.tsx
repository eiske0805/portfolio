import * as React from "react"
import { VFC, memo } from "react"
import { InView } from "react-intersection-observer"
import { Flex, Text, Box, Heading } from "@chakra-ui/react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Code from "../components/services/code"
import Ipad from "../components/services/ipad"

const Services: VFC = memo(() => {
  const color = "cRed"
  const frontEnd = `Front-end`.split("")
  const development = "Development".split("")
  const uiDesign = "UI/UX\u00A0Design".split("")
  return (
    <Layout color={color}>
      <Seo title="Services" />
      <Flex direction={{ base: "column", md: "row" }} color="cWhite">
        <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <Box
              w={{ base: "100%", md: "50%" }}
              ref={ref}
              className={
                inView
                  ? "appear left animate-title inview"
                  : "appear left animate-title"
              }
            >
              <Box bg="cCreem" borderRadius="full" w="60%" mx="auto" mb="10">
                <Code />
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
          )}
        </InView>
        <InView triggerOnce={true} rootMargin={"-50px 0px"}>
          {({ inView, ref }) => (
            <Box
              w={{ base: "100%", md: "50%" }}
              ref={ref}
              className={
                inView
                  ? "appear right animate-title inview development"
                  : "appear right animate-title development"
              }
            >
              <Box bg="cCreem" borderRadius="full" w="60%" mx="auto" mb="10">
                <Ipad />
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
          )}
        </InView>
      </Flex>
    </Layout>
  )
})

export default Services

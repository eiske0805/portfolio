import * as React from "react"
import { VFC, memo } from "react"
import { Flex, Text, Box } from "@chakra-ui/react"
import { InView } from "react-intersection-observer"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Face from "../components/home/face"

const IndexPage: VFC = memo(() => {
  const color = "cBlue"
  return (
    <Layout color={color}>
      <Seo title="Home" />
      <Flex
        direction={{ base: "column", md: "row" }}
        justify={{ base: "flex-start", md: "space-between" }}
      >
        <Face />
        <InView triggerOnce={true} rootMargin={"-50px 0px"}>
          {({ inView, ref }) => (
            <Box
              w={{ base: "100%", md: "65%" }}
              mt={{ lg: 8 }}
              ref={ref}
              className={inView ? "appear left  inview " : "appear left"}
            >
              <Text
                color="cWhite"
                mt="10"
                mb="20"
                fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                lineHeight="talle"
                className="item"
              >
                Hi, my name is Eisuke. I am a Japanese web designer and front
                end developer based in Barcelona.
              </Text>
            </Box>
          )}
        </InView>
      </Flex>
    </Layout>
  )
})

export default IndexPage

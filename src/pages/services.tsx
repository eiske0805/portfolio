import React, { VFC, memo } from "react"
import { Flex } from "@chakra-ui/react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Frontend from "../components/services/frontend/frontend"
import Design from "../components/services/design/design"

const Services: VFC = memo(() => {
  const color = "cRed"

  return (
    <Layout color={color}>
      <Seo title="Services" />
      <Flex direction={{ base: "column", md: "row" }} color="cWhite">
        <Frontend />
        <Design />
      </Flex>
    </Layout>
  )
})

export default Services

import * as React from "react"
import { Text, Box } from "@chakra-ui/react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => {
  const color = "cPurple"
  return (
    <Layout color={color}>
      <Seo title="404: Not found" />
      <Box
        as="h1"
        fontSize={{ base: "1.875rem", lg: "2.25rem" }}
        mb={{ base: 14, lg: 20 }}
        color="cCreem"
      >
        404: Not Found
      </Box>
      <Text fontSize={{ base: "1.25rem", lg: "1.5rem" }} color="cCreem">
        You just hit a route that doesn&#39;t exist... the sadness.
      </Text>
    </Layout>
  )
}

export default NotFoundPage

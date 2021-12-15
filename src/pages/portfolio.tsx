import * as React from "react"
import { VFC, memo } from "react"
import { graphql, PageProps } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Box, Grid, Flex, GridItem } from "@chakra-ui/react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Travel from "../components/portfolio/travel/travel"
import Spanish from "../components/portfolio/spanish/spanish"

const routes = [
  {
    children: <Travel />,
  },
  {
    children: <Spanish />,
  },
]

const Porfolio: VFC = memo(() => {
  const color = "cGreen"
  return (
    <Layout color={color}>
      <Seo title="Portfolio" />
      <Grid templateColumns="repeat(6, 1fr)" gap="10">
        {routes.map((route, index) => (
          <GridItem key={index} colSpan={{ base: 6, sm: 3, lg: 2 }} mb="6">
            {route.children}
          </GridItem>
        ))}
      </Grid>
    </Layout>
  )
})

export default Porfolio

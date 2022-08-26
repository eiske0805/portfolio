import React, { VFC, memo } from "react"
import { graphql, PageProps } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Grid, GridItem, Text, Link } from "@chakra-ui/react"
import { useInView } from "react-intersection-observer"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Porfolio: VFC<PageProps<GatsbyTypes.PortfolioPageQuery>> = memo(
  ({ data }) => {
    const color = "cGreen"
    return (
      <Layout color={color}>
        <Seo title="Portfolio" />
        <Grid templateColumns="repeat(6, 1fr)" gap="10" mb="20">
          {data.allMdx.nodes.map((node, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              rootMargin: "-100px 0px",
            })
            return (
              <GridItem
                key={index}
                colSpan={{ base: 6, sm: 3, lg: 2 }}
                mb="6"
                ref={ref}
                className={inView ? " appear down inview " : " appear down"}
              >
                <Link
                  isExternal
                  href={node.frontmatter?.url}
                  className={"portfolio-link"}
                >
                  <GatsbyImage
                    className="item"
                    image={
                      getImage(
                        node.frontmatter?.hero_image?.childImageSharp
                          ?.gatsbyImageData!
                      )!
                    }
                    alt={node.frontmatter!.hero_image_alt!}
                  />
                  <Text
                    className="item"
                    pt="2"
                    color="cWhite"
                    fontWeight="bold"
                    letterSpacing="widest"
                  >
                    {node.frontmatter?.description}
                  </Text>
                </Link>
              </GridItem>
            )
          })}
        </Grid>
      </Layout>
    )
  }
)

export const query = graphql`
  query PortfolioPage {
    allMdx(sort: { fields: frontmatter___date, order: ASC }) {
      nodes {
        frontmatter {
          hero_image_alt
          description
          url
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

export default Porfolio

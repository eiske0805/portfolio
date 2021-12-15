import * as React from "react"
import { memo, VFC } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Text, Link } from "@chakra-ui/react"
import { InView } from "react-intersection-observer"

const Travel: VFC = memo(() => {
  const url = "http://barcelonatravel.atwebpages.com/"
  return (
    <InView triggerOnce={true}>
      {({ inView, ref }) => (
        <Link
          isExternal
          href={url}
          ref={ref}
          className={
            inView ? "portfolio-link appear inview " : "portfolio-link appear"
          }
        >
          <StaticImage src="./travel.jpg" alt="Barcelona Travel Agency" />
          <Text
            className="item"
            pt="2"
            color="cWhite"
            fontWeight="bold"
            letterSpacing="widest"
          >
            A demo site. Made using Word Press.
          </Text>
        </Link>
      )}
    </InView>
  )
})

export default Travel

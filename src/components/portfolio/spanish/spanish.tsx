import * as React from "react"
import { memo, VFC } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Text, Link } from "@chakra-ui/react"
import { InView } from "react-intersection-observer"

const Spanish: VFC = memo(() => {
  const url = "https://paginadelcastellano.com/"
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
          <StaticImage src="./spanish.jpg" alt="spanish web site" />
          <Text
            className="item"
            pt="2"
            color="cWhite"
            fontWeight="bold"
            letterSpacing="widest"
          >
            Made using React and GatsbyJS.
          </Text>
        </Link>
      )}
    </InView>
  )
})

export default Spanish

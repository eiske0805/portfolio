import * as React from "react"
import { memo, VFC } from "react"
import { InView } from "react-intersection-observer"
import { Flex, Link, Box } from "@chakra-ui/react"

import TwitterSvg from "./twitterSvg"
import InstagramSvg from "./instagramSvg"
import GithubSvg from "./githubSvg"
import MaleSvg from "./maleSvg"

const routes = [
  {
    url: "https://twitter.com/eiske0805",
    children: <TwitterSvg />,
  },
  {
    url: "https://instagram.com/eiske0805",
    children: <InstagramSvg />,
  },
  {
    url: "https://github.com/eiske0805",
    children: <GithubSvg />,
  },
  {
    url: "mailto:eiske.take@gmail.com",
    children: <MaleSvg />,
  },
]

const SnsNavi: VFC = memo(() => {
  return (
    <InView triggerOnce={true}>
      {({ inView, ref }) => (
        <Box
          as="nav"
          px={{ base: 4, lg: 10 }}
          pb="20"
          className="sns"
          zIndex="200"
        >
          <Flex
            as="ul"
            justify="flex-end"
            ref={ref}
            className={inView ? "appear inview" : "appear"}
          >
            {routes.map(route => (
              <Box
                key={route.url}
                as="li"
                w="2rem"
                h="2rem"
                ml="0.5rem"
                className="item"
              >
                <Link isExternal href={route.url}>
                  {route.children}
                </Link>
              </Box>
            ))}
          </Flex>
        </Box>
      )}
    </InView>
  )
})

export default SnsNavi

import React, { VFC, ReactNode } from "react"
import { ChakraProvider } from "@chakra-ui/react"

import theme from "./theme/theme"

type Props = {
  element: ReactNode
}

export const wrapPageElement: VFC<Props> = ({ element }) => {
  return <ChakraProvider theme={theme}>{element}</ChakraProvider>
}

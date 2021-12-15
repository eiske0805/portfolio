import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "38em",
  lg: "60em",
  xl: "80em",
  "2xl": "96em",
})

const theme = extendTheme({
  colors: {
    cBlue: "#4dbdd1",
    cRed: "#c17878",
    cGreen: "#92b5a9",
    cWhite: "#ffffff",
    cBlack: "#999",
    cGray: "#9e9e9e",
    cOrange: "#ffb577",
    cCreem: "#FFF3DA",
    cPurple: "#A293C2",
  },
  fonts: {
    heading: "Do Hyeon, Noto Sans JP, sans-serif",
    body: "Do Hyeon, Noto Sans JP, sans-serif",
  },
  styles: {
    global: {
      body: {
        letterSpacing: "wider",
      },
      li: {
        listStyle: "none",
      },
      a: {
        textDecoration: "none",
      },
    },
  },
  breakpoints,
})

export default theme

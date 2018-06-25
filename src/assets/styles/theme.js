import DesignSystem from "design-system-utils"

const pxFontSize = {
  base: 16,
}

const fontFamily = {
  base:
    '"GothamBook", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans"',
  bold:
    '"GothamBold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans"',
  black:
    '"GothamBlack", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans"',
}

const colorPalette = {
  midnight: "hsl(228, 94%, 6%)",
  darkBlueGrey: "hsl(228, 41%, 19%)",
  seafoamBlue: "hsl(181, 42%, 55%)",
  white: "hsl(0, 0%, 100%)",
  seafoamBlueGhost: "hsla(181, 42%, 55%, 0.1)",
  grey: "hsl(229, 14%, 30%)",
  lavender: "hsl(297, 98%, 81%)",
}

export const myDesignSystem = {
  grid: {
    width: {
      xs: "100%",
      sm: 750,
      md: 970,
      lg: 1170,
      xl: 1340,
      xxl: 1840,
    },
  },
  type: {
    sizes: {
      xs: 14,
      sm: 15,
      regular: 16,
      base: 18,
      md: 21,
      lg: 24,
      xm: 40,
      xl: 48,
      xxl: 144,
    },
    fontFamily,
    fontWeight: {
      light: 300,
      normal: 400,
      black: 900,
    },
  },
  colors: {
    ...colorPalette,
    backgrounds: {
      dark: colorPalette.midnight,
    },
    texts: {
      default: colorPalette.white,
      muted: colorPalette.grey,
      action: colorPalette.seafoamBlue,
      backgroundTitle: colorPalette.seafoamBlueGhost,
    },
    links: {
      menu: {
        default: colorPalette.seafoamBlueGhost,
        aside: colorPalette.grey,
        active: colorPalette.white,
      },
      external: colorPalette.seafoamBlue,
      socials: {
        active: colorPalette.soafoamBlue,
      },
    },
    borders: {
      light: colorPalette.white,
      colorful: colorPalette.seafoamBlue,
      dark: colorPalette.darkBlueGrey,
    },
    progress: {
      bar: colorPalette.darkBlueGrey,
      value: colorPalette.lavender,
    },
  },
}

export const ds = new DesignSystem(myDesignSystem, {
  useModularScale: true,
  fontSizeUnit: "rem",
})

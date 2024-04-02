import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "360px",
      sm: "660px",
      md: "768px",
      lg: "992px",
      exlg: "1200px",
      xl: "1450px"
    },
    colors: {
      transparent: "transparent",
      green: {
        "200": "#B6E6B8",
        "400": "#2d9b54"
      },
      black: "#000",
      white: "#fff",
      paleBlue: "#ECF6F8",
      blue: {
        "300": "#002147",
        "400": "#1F3C5D",
        "500": "#132D4A"
      },

      yellow: {
        "200": "#ffcb06",
        "300": "#FDC800",
        "400": "#ff8e06"
      },
      "logo-red": "#CA0225",
      gray: {
        "100": "#F5F5F5",
        "200": "#E3E3E3",
        "300": "#767272",
        "400": "#6C6C6C"
      },
      red: {
        "100": "#FF6767",
        "200": "#D45D5D"
      }
    },
    spacing: {
      "0": "0",
      "2": "2px",
      "4": "0.25rem",
      "6": "0.375rem",
      "8": "0.5rem",
      "10": "0.6rem",

      "12": "0.75rem", // FOR CONTAINER PADDING ONLY ABOVE TABLET
      "14": "0.875rem", //14px
      "16": "1rem", // 16px
      "20": "1.25rem", // 20px
      "24": "1.5rem", // 24px
      "28": "1.75rem", // 24px
      "32": "2rem", // 32px
      "40": "2.5rem", //40px
      "48": "3rem", //48px
      "56": "3.5rem", // 56px
      "60": "3.75rem", // 56px
      "64": "4rem", // 64px
      "76": "4.75rem", // 76px
      "80": "5rem", // 80px
      "96": "6rem", // 96px
      "112": "7rem", // 112px
      "144": "9rem", // 144px
      "1/10": "10%",
      "2/10": "20%"
    },
    backgroundColor: theme => theme("colors"),
    backgroundPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top"
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain"
    },
    borderColor: theme => ({
      white: "#fff",
      default: theme("colors.gray.300"),
      light: "#E4E4E4",
      blue: theme("colors.blue"),
      black: "#000000",
      gray: {
        "100": theme("colors.gray.100"),
        "200": theme("colors.gray.200"),
        "300": theme("colors.gray.300"),
        "600": theme("colors.gray.600")
      },

      red: {
        "100": theme("colors.red.100"),
        "200": theme("colors.red.200")
      }
    }),
    borderRadius: {
      none: "0",
      md: "4px",
      full: "9999px"
    },
    borderWidth: {
      default: "1px",
      "0": "0",
      "2": "2px",
      "5": "5px"
    },
    boxShadow: {
      default: "0 3px 3px 0 rgba(0, 0, 0, 0.24)",
      outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
      none: "none"
    },
    container: {},
    cursor: {
      default: "default",
      pointer: "pointer",
      move: "move",
      "not-allowed": "not-allowed"
    },
    fill: theme => ({
      current: "currentColor",
      "gray-600": theme("colors.gray.600"),
      "red-300": theme("colors.red.300"),
      white: theme("colors.white"),
      blue: theme("colors.blue")
    }),
    flex: {
      "1": "1 1 0%",
      auto: "1 1 auto",
      initial: "0 1 auto",
      none: "none"
    },
    flexGrow: {
      "0": "0",
      default: "1"
    },
    flexShrink: {
      "0": "0",
      default: "1"
    },
    fontFamily: {
      fjalla: [
        "var(--font-fjalla)",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif"
      ],

      poppins: [
        "var(--font-poppins)",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ]
    },
    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.375rem", // 22px
      "3xl": "2rem", // 32px
      "4xl": "2.5rem", //40px
      "5xl": "3rem", // 48px
      "6xl": "3.75rem", // 60px
      "7xl": "6rem" // 96px
    },
    fontWeight: {
      light: "200",
      normal: "400",
      medium: "500",
      semiBold: "600",
      bold: "700",
      extraBold: "800",
      black: "900"
    },
    height: theme => ({
      auto: "auto",
      full: "100%",
      screen: "100vh"
    }),
    inset: theme => ({
      ...theme("spacing"),
      "0": "0",
      "16": "16px",
      "100": "100%",
      auto: "auto"
    }),
    letterSpacing: {
      tight: "-.025em",
      normal: "0",
      wide: ".025em"
    },
    lineHeight: {
      none: "1",
      tight: "1.2",
      snug: "1.375",
      base: "1.4",
      normal: "1.5", // 24px
      relaxed: "1.7" // 28px
      // loose: '2',
    },
    listStyleType: {
      none: "none"
    },
    margin: (theme, { negative }) => ({
      auto: "auto",
      ...theme("spacing"),
      "1/12": "8.333333%",
      "1/6": "16.666667%",
      "-4": "-0.25rem",
      "-6": "-0.375rem",
      "-8": "-0.5rem",
      "-12": "-0.75rem",
      "-16": "-1rem",
      "-20": "-1.25rem", //20px
      "-24": "-1.5rem",
      "-28": "-1.75rem", // 28px
      "-32": "-2rem", // 32px
      "-40": "-2.5rem", //40px
      "-48": "-3rem", //48px
      "-56": "-3.5rem", // 56px
      "-60": "-3.75rem", // 56px
      "-64": "-4rem", // 64px
      "-76": "-4.75rem", // 76px
      "-80": "-5rem", // 80px
      "-96": "-6rem", // 96px
      "-112": "-7rem", // 112px
      "-144": "-9rem" // 144px
    }),
    maxHeight: {
      full: "100%",
      screen: "100vh"
    },
    maxWidth: theme => ({
      ...theme("width")
    }),
    minHeight: {
      "0": "0",
      full: "100%",
      screen: "100vh"
    },
    minWidth: {
      "0": "0",
      full: "100%"
    },
    objectPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top"
    },
    opacity: {
      "0": "0",
      "25": "0.25",
      "50": "0.5",
      "75": "0.75",
      "95": "0.95",
      "100": "1"
    },
    order: {
      first: "-9999",
      last: "9999",
      none: "0",
      "1": "1",
      "2": "2"
    },
    padding: theme => theme("spacing"),
    placeholderColor: theme => ({
      default: theme("colors.gray.600")
    }),
    stroke: {
      current: "currentColor"
    },
    textColor: theme => theme("colors"),
    width: () => ({
      auto: "auto",
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/10": "10%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      full: "100%",
      screen: "100vw"
    }),
    zIndex: {
      auto: "auto",
      "0": "0",
      "10": "10",
      "20": "20",
      "30": "30",
      "40": "40",
      "50": "50",
      "60": "60"
    },
    extend: {
      container: theme => ({
        center: true
      })
    }
  },
  variants: {
    accessibility: ["responsive", "focus"],
    alignContent: ["responsive"],
    alignItems: ["responsive"],
    alignSelf: ["responsive"],
    appearance: [],
    backgroundAttachment: [],
    backgroundColor: ["responsive", "hover", "focus"],
    backgroundPosition: ["responsive"],
    backgroundRepeat: [],
    backgroundSize: [],
    borderCollapse: ["responsive"],
    borderColor: ["hover", "focus"],
    borderRadius: ["responsive"],
    borderStyle: [],
    borderWidth: ["responsive"],
    boxShadow: ["responsive", "active", "hover", "focus"],
    cursor: [],
    display: ["responsive"],
    fill: ["responsive"],
    flex: ["responsive"],
    flexDirection: ["responsive"],
    flexGrow: ["responsive"],
    flexShrink: ["responsive"],
    flexWrap: ["responsive"],
    float: ["responsive"],
    fontFamily: [],
    fontSize: ["responsive"],
    fontSmoothing: [],
    fontStyle: [],
    fontWeight: [],
    height: ["responsive"],
    inset: ["responsive", "active"],
    justifyContent: ["responsive"],
    letterSpacing: [],
    lineHeight: ["responsive"],
    listStylePosition: [],
    listStyleType: [],
    margin: ["responsive"],
    maxHeight: ["responsive"],
    maxWidth: ["responsive"],
    minHeight: ["responsive"],
    minWidth: ["responsive"],
    objectFit: ["responsive"],
    objectPosition: ["responsive"],
    opacity: ["responsive", "hover", "focus"],
    order: ["responsive"],
    outline: ["focus"],
    overflow: ["responsive"],
    padding: ["responsive"],
    placeholderColor: ["focus"],
    pointerEvents: ["responsive"],
    position: ["responsive"],
    resize: ["responsive"],
    stroke: ["responsive"],
    tableLayout: ["responsive"],
    textAlign: ["responsive"],
    textColor: ["responsive", "hover", "focus"],
    textDecoration: [],
    textTransform: [],
    userSelect: [],
    verticalAlign: ["responsive"],
    visibility: ["responsive"],
    whitespace: ["active", "responsive"],
    width: ["responsive"],
    wordBreak: ["responsive"],
    zIndex: ["responsive"]
  },
  corePlugins: {
    borderCollapse: false,
    float: false,
    objectPosition: false,
    stroke: false,
    tableLayout: false,
    wordBreak: true,
    container: false
  },
  plugins: []
};
export default config;




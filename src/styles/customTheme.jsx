import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
      contrastText: "#AE4EFF",
    },
    secondary: {
      main: "#555bff",
      light: "#555bff",
      dark: "#555bff",
    },
    background: {
      default: "#e5e5e5",
      paper: "#F8F8F8",
    },
    text: {
      primary: "#373F41",
    },
    error: {
      main: "#FF5353",
    },
    success: {
      main: "#0AC533",
    },
    warning: {
      main: "#FBA618",
    },
    divider: "rgba(95,100,255,0.7)",
  },
  typography: {
    fontFamily: "Mulish",
    h1: {
      fontSize: "2.2rem",
      lineHeight: 2.75,
    },
    h2: {
      fontSize: "1.3rem",
      fontWeight: 600,
      lineHeight: 1.65,
    },
    h3: {
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: 1.25,
    },
    subtitle1: {
      fontSize: "1.1rem",
      fontWeight: 400,
      lineHeight: 1.43,
    },
    body1: {
      fontWeight: 300,
      lineHeight: 1.25,
      fontSize: "1rem",
    },
    body2: {
      fontWeight: 300,
      lineHeight: 1.1,
    },
    button: {
      fontSize: "1rem",
      fontWeight: 700,
      lineHeight: 1.25,
    },
    caption: {
      fontWeight: 300,
      lineHeight: 0.93,
    },
  },
  components: {
    MuiAppBar: {
      variants: [
        {
          props: { variant: "popup" },
          style: {
            width: "325px",
            position: "static",
            backgroundColor: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
        },
      ],
    },
    MuiBox: {
      variants: [
        {
          props: { variant: "divid" },
          style: {
            backgroundColor: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
        },
      ],
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "getHiredButton" },
          style: {
            background:
              "linear-gradient(90deg, rgba(95, 100, 255, 0.7) 0%, rgba(174, 78, 255, 0.85) 100%)",
            border: 0,
            borderRadius: "6px",
            color: "white",
            height: 52,
            padding: "3px",
            width: 306,
            margin: "25px 0px 0px 0px",
            borderRadius: "6px",
            textTransform: "capitalize",
            color: "#FFF",
            fontWeight: "bold",
            fontFamily: "Mulish",
            fontSize: "16px",
            lineHeight: "20px",
            padding: "3px",
            size: "large",
            "&:hover": {
              backgroundPosition:
                "right center" /* change the direction of the change here */,
            },
          },
        },
      ],
    },
  },
});

export default customTheme;

import { createTheme } from "@mui/material/styles";

const theme = createTheme({

  palette: {
    mode: "dark",
    primary: {
      main: "hsl(209, 93%, 80%)", // Slightly darker than previous
    },
    background: {
      default: "hsl(0, 0%, 98%)", // Very light gray
      paper: "hsl(207, 26%, 17%)", // Very dark blue
    },
    text: {
      primary: "hsl(0, 0%, 100%)", // White or very light color for text on dark background
      secondary: "hsl(0, 0%, 70%)", // Light gray for secondary text
    },
  },
  

  typography: {
    fontFamily: "'Nunito Sans', sans-serif",
    fontSize: 14,
    main: {
      fontFamily: "'Orbitron', sans-serif",
      fontSize: "4rem",
      fontWeight: 700,
    },
    h1: {
      fontFamily: "'Orbitron', sans-serif",
      fontSize: "2rem",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Orbitron', sans-serif",
      fontSize: "1.5rem",
      fontWeight: 400,
    },
    body1: {
      fontFamily: "'Orbitron', sans-serif",
      fontWeight: 400,
    },
  },
});

export default theme;

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark", // Default mode (can be toggled between "light" and "dark" using state)
    primary: {
      main: "hsl(209, 23%, 22%)", // Dark Blue (Dark Mode Elements)
    },
    background: {
      default: "hsl(0, 0%, 98%)", // Very Light Gray (Light Mode Background)
      paper: "hsl(207, 26%, 17%)", // Very Dark Blue (Dark Mode Background)
    },
    text: {
      primary: "hsl(200, 15%, 8%)", // Very Dark Blue (Light Mode Text)
      secondary: "hsl(0, 0%, 52%)", // Dark Gray (Light Mode Input)
    },
  },
  typography: {
    fontFamily: "'Nunito Sans', sans-serif", // Default Font Family
    fontSize: 14, // Body Copy: Homepage Items
    main: {
      // Detail Page Heading
      fontFamily: "'Orbitron', sans-serif",
      fontSize: "4rem", // Detail Page Heading Font Size
      fontWeight: 700, // Detail Page Heading Font Weight (700 = Bold)
    },
    h1: {
      // Detail Page Heading
      fontFamily: "'Orbitron', sans-serif",
      fontSize: "2rem", // Detail Page Heading Font Size
      fontWeight: 700, // Detail Page Heading Font Weight (700 = Bold)
    },
    h2: {
      // Detail Page Subheading
      fontFamily: "'Orbitron', sans-serif",
      fontSize: "1.5rem", // Detail Page Subheading Font Size
      fontWeight: 400, // Detail Page Subheading Font Weight (400 = Regular)
    },
    body1: {
      // Body Text
      fontFamily: "'Nunito Sans', sans-serif",
      fontWeight: 300, // Body Text Font Weight (300 = Light)
    },
    // Add more typography styles as needed
  },
});

export default theme;

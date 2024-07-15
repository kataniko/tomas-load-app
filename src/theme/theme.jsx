import { createTheme } from "@mui/material/styles";

//Themes from MUI 
// I know i didnt used all the colors from the file you guys added , and that it doesnt has the dark mode with the toggle . 
//  Even tho it doesnt i introduced it in the code

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "hsl(209, 93%, 80%)", // Slightly darker than previous
    },
    background: {
      default: "hsl(0, 0%, 98%)", // Very light gray
      paper: "hsl(207, 26%, 17%)", // Very dark blue
      lightModeBackground: "hsl(0, 0%, 98%)", // Very light gray (Light Mode Background)
      veryDarkBlue: "hsl(207, 26%, 17%)", // Very dark blue (Dark Mode Background)
    },
    text: {
      primary: "hsl(0, 0%, 100%)", // White or very light color for text on dark background
      secondary: "hsl(0, 0%, 70%)", // Light gray for secondary text
      darkModeText: "hsl(0, 0%, 100%)", // White (Dark Mode Text & Light Mode Elements)
      lightModeText: "hsl(200, 15%, 8%)", // Very Dark Blue (Light Mode Text)
      lightModeInput: "hsl(0, 0%, 52%)", // Dark Gray (Light Mode Input)
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
      fontSize: "15px",
      fontWeight: 400,
    },
    body2: {
      fontFamily: "'Orbitron', sans-serif",
      fontSize: "13px",
      fontWeight: 400,
    },
  },
});

export default theme;

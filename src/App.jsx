import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import "./App.css";

import theme from "./theme/theme";
import BackgroundAnimation from "./components/BackgroundAnimation";
import MainContent from "./components/MainContent";

//I still introduced the logic for the Dark mode

//For offline support i added a file in the /public folder .
//I used a lib and i left the consoles on purpose in the console . You guys can check in the dev tools the Storage and application and test using the offline mode .
// Dont forget to check vite config as well.

//Unfortunatly i got not time to introduce Jest tests  :') It was still fun tho xD

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="app-container">
        <BackgroundAnimation />
        <MainContent toggleMode={toggleMode} mode={mode} />
      </div>
    </ThemeProvider>
  );
}

export default App;

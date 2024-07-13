import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import "./App.css";

import theme from "./theme/theme";
import BackgroundAnimation from "./components/BackgroundAnimation";
import Sidebar from "./components/Appbar/Appbar";
import MainContent from "./components/MainContent";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="app-container">
        <BackgroundAnimation />
        <MainContent
          toggleMode={toggleMode}
          mode={mode}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;

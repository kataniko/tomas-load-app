import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import theme from "./theme/theme"; // Import your defined theme
import Spline from "@splinetool/react-spline";
import "./App.css"; // Import the CSS file for additional styling
import { motion } from "framer-motion";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="app-container">
        <motion.div
          className="spline-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 10, ease: "easeInOut" }}
        >
          <Spline scene="https://prod.spline.design/oYUS-kLsxP3FpE8y/scene.splinecode" />
        </motion.div>
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Home toggleMode={toggleMode} mode={mode} />}
            />
            <Route path="/detail/:name" element={<Detail />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;

import React ,{useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Detail from "../pages/Details/Detail";
import Sidebar from "./Appbar/Appbar";

const MainContent = ({ toggleMode, mode }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };
  

  return (
    <Router>
      <Sidebar  open={drawerOpen} toggleDrawer={toggleDrawer}  />
      <Routes>
        <Route
          path="/"
          element={
            <Home toggleMode={toggleMode} mode={mode} />
          }
        />
        <Route path="/detail/:name" element={<Detail />} />
      </Routes>
    </Router>
  );
};

export default MainContent;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Detail from "../pages/Details/Detail";

//Routing File with the routes using react-router-dom (I dont know why useHistory in the Files wasnt working so i didnt used)

const MainContent = ({ toggleMode, mode }) => {

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home toggleMode={toggleMode} mode={mode} />}
        />
        <Route path="/detail/:name" element={<Detail />} />
      </Routes>
    </Router>
  );
};

export default MainContent;

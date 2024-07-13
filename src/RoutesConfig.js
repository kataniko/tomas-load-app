import { Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

export const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:name" element={<Detail />} />
    </Routes>
  );
};

export default RoutesConfig;

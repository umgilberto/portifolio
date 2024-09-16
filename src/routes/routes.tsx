import { BrowserRouter, Routes, Route } from "react-router-dom";
import { generateRoute } from "../utils/generateRoute";
import { routeList } from "./routeList";
import { Home } from "@/template/shared/Home";

const RouteToRender = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routeList.map(generateRoute)}
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteToRender;

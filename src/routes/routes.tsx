import { BrowserRouter, Routes, Route } from "react-router-dom";
import { generateRoute } from "../utils/generateRoute";
import { routeList } from "./routeList";
import { NotFoundPage } from "@/template/shared/NotFound";

const RouteToRender = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routeList.map(generateRoute)}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteToRender;

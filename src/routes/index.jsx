import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ROUTES } from "../config/constant";
import Home from "../pages/Home";
import HowItsWork from "../pages/HowItsWork";
import FAQs from "../pages/FAQs";
import Technology from "../pages/Technology";
import Investment from "../pages/Investment";
export const Routs = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES?.HOME} element={<Home />} />
        <Route path={ROUTES?.HOWITWORK} element={<HowItsWork />} />
        <Route path={ROUTES?.FAQS} element={<FAQs />} />
        <Route path={ROUTES?.TECHNOLOGY} element={<Technology />} />
        <Route path={ROUTES?.INVESTMENT} element={<Investment />} />
      </Routes>
    </BrowserRouter>
  );
};

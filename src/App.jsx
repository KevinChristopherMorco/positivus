import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import MainLayout from "./pages/MainLayout";
import About from "./pages/Navigation/About";
import Pricing from "./pages/Navigation/Pricing";
import Services from "./pages/Navigation/Services";
import UseCases from "./pages/Navigation/UseCases";
import NotFound from "./components/requests/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="services" element={<Services />} />
          <Route path="use-case" element={<UseCases />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

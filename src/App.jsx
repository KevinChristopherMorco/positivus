import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import MainLayout from "./pages/MainLayout";
import About from "./pages/Navigation/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="*" element={<NotFound />} /> */}

        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

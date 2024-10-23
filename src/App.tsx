import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portofolio from "./pages/Portofolio";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Portofolio />} path="/portofolio" />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

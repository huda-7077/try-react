import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Portofolio from "./pages/Portofolio";
// import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import AboutMe from "./components/AboutMe";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Jumbotron />
        <Skills />
        <Experience />
        <AboutMe />

        {/* <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Portofolio />} path="/portofolio" />
          <Route element={<NotFound />} path="*" />
          <Route element={<Profile />} path="/profile" />
        </Routes> */}
      </BrowserRouter>
    </>
  );
}

export default App;

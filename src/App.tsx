import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Portofolio from "./pages/Portofolio";
// import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import AboutMe from "./components/AboutMe";
import Testimoni from "./components/Testimoni";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Jumbotron />
        <Skills />
        <Experience />
        <AboutMe />
        <Projects />
        <Testimoni />
        <Contact />
        <Footer />

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

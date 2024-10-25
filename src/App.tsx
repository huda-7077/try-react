import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
      <Router>
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
          <Route element={<Navbar />} path="*" />
          <Route element={<Skills />} path="/skills" />
          <Route element={<AboutMe />} path="/about" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Projects />} path="/projects" />
        </Routes> */}
      </Router>
    </>
  );
}

export default App;

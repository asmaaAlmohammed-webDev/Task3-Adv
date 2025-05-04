import "./App.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import TopBanner from "./components/TopBanner/TopBanner";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { navLinks, logoInfo } from "./data/NavData";
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 0,
      distance: "50px",
      once: false,
      mirror: true,
    });
  }, []);
  return (
    <>
      <div className="top-section px-50 ">
        <TopBanner />
        <NavBar links={navLinks} logo={logoInfo} />
      </div>
      <ScrollToTop />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
      </Routes>
      <FooterComponent />
    </>
  );
}

export default App;

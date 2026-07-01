import "./App.css";
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import PersonalTraining from "./pages/PersonalTraining";
import About from "./pages/About";
import BreakfastClub from "./pages/BreakfastClub";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactGA from "react-ga4";
import WhatsAppFab from "./components/WhatsAppFab";



ReactGA.initialize("G-1R5HPWE4BJ");

ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
  title: "Suikergym",
});

function App() {
  return (
    <HelmetProvider>
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Suikergym - trainen is voor iedereen</title>
      </Helmet>
      <Router>
        <Navbar />
        <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/breakfast-club" element={<BreakfastClub />} />
  <Route path="/personal-training" element={<PersonalTraining />} />
  <Route path="/over-suigergym" element={<About />} />
  <Route path="/kennismaken" element={<Contact />} />
</Routes>
        <Footer />
      </Router>
      <WhatsAppFab />
    </div>
    </HelmetProvider>
  );
}

export default App;

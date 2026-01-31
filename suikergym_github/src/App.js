import "./App.css";
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Tarieven from "./pages/Tarieven";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactGA from "react-ga4";

ReactGA.initialize("G-1R5HPWE4BJ");

ReactGA.send({ 
  hitType: "pageview", 
  page: window.location.pathname,
  title: "Suikergym" });

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Suikergym - trainen is voor iedereen</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/aanbod" element={<Tarieven />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

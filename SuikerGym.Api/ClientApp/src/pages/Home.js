import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Suikergym - trainen is voor iedereen</title>
      </Helmet>
      <div className="home-container">
        <h1>Suikergym</h1>
        <h3>Trainen is voor iedereen</h3>
        <p>
          Voel jij je niet op je gemak in een sportschool? Suikergym biedt een
          veilige en rustige omgeving om aan jezelf te werken. Samen met
          professionele en betrokken begeleiding werk je aan je doelen op een
          manier die bij jou past.
        </p>
        <div className="home-button">
          <Link to="/contact">
            <button> KENNISMAKEN </button>
          </Link>
          <Link to="/aanbod">
            <button> TARIEVEN </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

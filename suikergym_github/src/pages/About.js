import React from "react";
import { Helmet } from "react-helmet";
import "../styles/AboutMe.css";
import ProfilePic from "../assets/profile-pic.jpg";
import Carousel from "../components/Carousel";
import img1 from "../assets/gym/suikergym1.jpg";
import img2 from "../assets/gym/suikergym2.jpg";
import img3 from "../assets/gym/suikergym4.jpg";
import img5 from "../assets/gym/suikergym6.jpg";
import img6 from "../assets/gym/suikergym7.jpg";
import img7 from "../assets/gym/suikergym8.jpg";
import img8 from "../assets/gym/suikergym9.jpg";

const images = [img1, img2, img3, img5, img6, img7, img8];

const About = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Over Suikergym</title>
      </Helmet>
      <div className="about-me-container">
        <div className="profile">
          <img
            src={ProfilePic} // Replace with your own image URL
            alt="Profile"
            className="profile-img"
          />
        </div>

        <div className="info">
          <h1>Hoi, ik ben Elze!</h1>
          <p>
            Ik geloof dat je nooit spijt kan hebben van een goede workout,
            tenzij je een blessure oploopt natuurlijk. Daarom vind ik sporten
            met een goede techniek het allerbelangrijkste. Als dat eenmaal goed
            zit, komen de resultaten vanzelf. Ik help je daarbij door je op een
            rustige manier te coachen om je grenzen te verleggen en sterker en
            fitter te worden.
          </p>
          <p>
            <b>
              Personal trainer is mijn derde leven. Ik geloof in verandering
            </b>
          </p>
          <p>
            In twee vorige levens ben ik journalist en IT'er geweest. Ik merkte
            dat beide gebieden niet helemaal bij mij pasten en dit gaf mij
            stress. Na een bezoek aan de gym voelde ik mij telkens een stuk
            relaxter waardoor ik op een gegeven moment dacht, hier moet ik mijn
            werk van maken.
          </p>
          <p>
            De ervaring die ik als journalist heb opgedaan kan ik combineren in
            mijn werk als pt'er. Ik weet hoe ik scherpe vragen moet stellen
            tijdens een intake en tijdens sessies met cli&#235;nten. Bovendien
            weet ik hoe het is om je leven te veranderen. Dat is soms
            makkelijker gezegd dan gedaan, maar mogelijk voor iedereen!
          </p>
        </div>
      </div>
      <div className="image-slider">
        <Carousel images={images} />
      </div>
    </div>
  );
};

export default About;

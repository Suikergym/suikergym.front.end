import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import LaunchBanner from "../components/LaunchBanner";
import "../styles/Home.css";
import ScrollToTop from "../components/ScrollToTop";

function Home() {
  return (
    <>
      <ScrollToTop />
      <Helmet>
        <title>
          Suikergym | Breakfast Club & Personal Training in Hoogkerk
        </title>
        <meta
          name="description"
          content="Bij Suikergym in Hoogkerk kun je kiezen voor de Breakfast Club of 1-op-1 personal training. Persoonlijke begeleiding in een rustige en veilige omgeving."
        />
      </Helmet>

      <div className="home-page">
        <LaunchBanner buttonLink="/breakfast-club#aanmelden" />

        {/* HERO */}
        <section className="home-hero">
          <div className="hero-content">
            <span className="hero-badge">📍 HFC Hoogkerk</span>

            <h1>Start je dag met energie.</h1>

            <p>
              De Breakfast Club combineert training en een gezond ontbijt in één
              vaste ochtendroutine. Liever persoonlijk trainen? Dan kan dat
              1-op-1 op maat.
            </p>

            <div className="hero-buttons">
              <Link to="/breakfast-club" className="btn btn-primary">
                Bekijk de Breakfast Club
              </Link>

              <Link to="/contact" className="btn btn-secondary">
                Plan een kennismaking
              </Link>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-placeholder">
              Foto van training of locatie
            </div>
          </div>
        </section>

        {/* AANBOD */}
        <section className="offer-section">
          <h2>Hoe kan ik je helpen?</h2>

          <div className="offer-grid">
            <div className="offer-card">
              <div className="offer-icon">🥣</div>

              <h3>Breakfast Club</h3>

              <p>
                Begin je dag met een groepsworkout en een gezond ontbijt. De
                perfecte combinatie van beweging, structuur en energie.
              </p>

              <ul>
                <li>Maandag, woensdag en vrijdag</li>
                <li>Start om 07:00 uur</li>
                <li>Training + ontbijt</li>
                <li>Maximaal 10 deelnemers</li>
              </ul>

              <Link to="/breakfast-club" className="btn btn-primary">
                Meer informatie
              </Link>
            </div>

            <div className="offer-card">
              <div className="offer-icon">🏋️</div>

              <h3>1-op-1 Personal Training</h3>

              <p>
                Persoonlijke begeleiding die volledig is afgestemd op jouw
                doelen, niveau en mogelijkheden.
              </p>

              <ul>
                <li>Persoonlijke aandacht</li>
                <li>Training op maat</li>
                <li>Ma, wo en vr tot 15:00 uur</li>
                <li>Voor ieder niveau</li>
              </ul>

              <Link to="/contact" className="btn btn-secondary">
                Plan een kennismaking
              </Link>
            </div>
          </div>
        </section>

        {/* WAAROM SUIKERGYM */}
        <section className="why-section">
          <h2>Waarom Suikergym?</h2>

          <div className="why-grid">
            <div className="why-card">
              ❤️
              <h3>Persoonlijk</h3>
              <p>Geen grote sportschool, maar begeleiding die bij jou past.</p>
            </div>

            <div className="why-card">
              👥
              <h3>Kleinschalig</h3>
              <p>Kleine groepen en veel persoonlijke aandacht.</p>
            </div>

            <div className="why-card">
              🌱
              <h3>Gezonde leefstijl</h3>
              <p>
                Meer dan alleen sporten: ook aandacht voor voeding en structuur.
              </p>
            </div>

            <div className="why-card">
              ⭐<h3>Voor iedereen</h3>
              <p>Of je nu begint of al ervaring hebt, je bent welkom.</p>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="reviews-section">
          <h2>Wat anderen zeggen</h2>

          <div className="reviews-grid">
            <div className="review-card">
              ⭐⭐⭐⭐⭐
              <p>"Voor het eerst houd ik sporten echt vol."</p>
            </div>

            <div className="review-card">
              ⭐⭐⭐⭐⭐
              <p>"Een fijne sfeer en persoonlijke begeleiding."</p>
            </div>

            <div className="review-card">
              ⭐⭐⭐⭐⭐
              <p>"Ik heb veel meer energie gedurende de dag."</p>
            </div>
          </div>
        </section>

        {/* OVER JOU */}
        <section className="about-section">
          <div className="about-image">
            <div className="image-placeholder">Foto van jou</div>
          </div>

          <div className="about-content">
            <h2>Over Suikergym</h2>

            <p>
              Ik geloof dat sporten voor iedereen toegankelijk moet zijn. Daarom
              bied ik persoonlijke begeleiding in een rustige en veilige
              omgeving waarin jij op jouw eigen tempo kunt werken aan je doelen.
            </p>

            <Link to="/contact" className="btn btn-primary">
              Kennismaken
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="final-cta">
          <h2>Klaar om aan jezelf te werken?</h2>

          <p>
            Kies voor een gezonde start van je dag of ga aan de slag met
            persoonlijke begeleiding.
          </p>

          <div className="hero-buttons">
            <Link to="/breakfast-club" className="btn btn-primary">
              Breakfast Club
            </Link>

            <Link to="/contact" className="btn btn-secondary">
              Personal Training
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;

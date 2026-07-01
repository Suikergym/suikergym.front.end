import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "../styles/PersonalTraining.css";
import ScrollToTop from "../components/ScrollToTop";

function PersonalTraining() {
  return (
    <div className="pt-page">
      <ScrollToTop />

      <Helmet>
        <title>
          Personal Training bij Suikergym | 1-op-1 coaching in Hoogkerk
        </title>
        <meta
          name="description"
          content="Persoonlijke begeleiding bij Suikergym in Hoogkerk. Voor mensen die onzeker zijn in de gym of begeleiding nodig hebben om te starten."
        />
      </Helmet>

      {/* HERO */}
      <section className="pt-hero">
  <span className="eyebrow">Personal training in Hoogkerk</span>

  <h1>
    Train met vertrouwen, ook als je niet weet waar je moet beginnen.
  </h1>

  <p className="hero-subtext">
    1-op-1 begeleiding voor mensen die zich onzeker voelen in de gym en
    eindelijk resultaat willen zien — zonder drukke sportschool of ingewikkelde schema’s.
  </p>

  <div className="hero-proof">
    <div>✔ Persoonlijke begeleiding bij elke oefening</div>
    <div>✔ Rustige, kleinschalige trainingsomgeving</div>
    <div>✔ Focus op techniek, resultaat en structuur</div>
  </div>

  <div className="hero-buttons">
    <a href="#contact" className="btn-primary">
      Plan gratis kennismaking
    </a>

    <a href="#pt-voor-wie" className="btn-secondary">
      Bekijk voor wie het is
    </a>
  </div>

  <div className="hero-note">
    Geen verplichtingen • Vrijblijvende intake • Binnen 24 uur reactie
  </div>
</section>
      {/* PROBLEM SECTION */}
      <section className="pt-problem">
        <h2>Herken je dit?</h2>

        <div className="problem-grid-pt">
          <div className="problem-card">
            <span className="problem-icon">😕</span>
            <h3>Onzeker in de gym</h3>
            <p>Je voelt je bekeken of weet niet goed waar je moet beginnen.</p>
          </div>

          <div className="problem-card">
            <span className="problem-icon">🤷</span>
            <h3>Geen idee wat werkt</h3>
            <p>
              Je doet maar wat en twijfelt of je de oefeningen goed uitvoert.
            </p>
          </div>

          <div className="problem-card">
            <span className="problem-icon">📉</span>
            <h3>Weinig resultaat</h3>
            <p>Je doet je best, maar ziet nauwelijks vooruitgang.</p>
          </div>

          <div className="problem-card">
            <span className="problem-icon">🗓️</span>
            <h3>Gebrek aan structuur</h3>
            <p>Je mist een plan en een stok achter de deur om vol te houden.</p>
          </div>
        </div>

        <p className="highlight">
          Dan is 1-op-1 personal training precies wat je nodig hebt.
        </p>
      </section>

      {/* SOLUTION */}
      <section className="pt-solution">
        <div className="section-container">
          <span className="eyebrow">
            Persoonlijke begeleiding van begin tot eind
          </span>

          <h2>Wat je van mij kunt verwachten</h2>

          <p className="section-intro">
            Geen standaard trainingsschema of drukke sportschool. Je krijgt
            persoonlijke begeleiding in een rustige omgeving, zodat je met meer
            vertrouwen kunt werken aan jouw doelen.
          </p>

          <div className="solution-grid">
            <div className="solution-card">
              <div className="solution-icon">🎯</div>
              <h3>Training op maat</h3>
              <p>
                Een persoonlijk trainingsplan dat volledig aansluit op jouw
                doelen, niveau en mogelijkheden.
              </p>
            </div>

            <div className="solution-card">
              <div className="solution-icon">🏋️</div>
              <h3>Begeleiding bij elke oefening</h3>
              <p>
                Je staat er nooit alleen voor. Ik leg uit wat je doet en waarom
                je het doet.
              </p>
            </div>

            <div className="solution-card">
              <div className="solution-icon">💡</div>
              <h3>Duidelijke uitleg</h3>
              <p>
                Geen ingewikkelde fitnessjargon, maar duidelijke en geduldige
                begeleiding.
              </p>
            </div>

            <div className="solution-card">
              <div className="solution-icon">🌿</div>
              <h3>Rustige omgeving</h3>
              <p>
                Geen overvolle sportschool, maar een plek waar je je op je gemak
                kunt voelen.
              </p>
            </div>

            <div className="solution-card">
              <div className="solution-icon">📈</div>
              <h3>Focus op resultaat</h3>
              <p>
                Samen werken we aan meer kracht, vertrouwen en duurzame
                resultaten.
              </p>
            </div>

            <div className="solution-card">
              <div className="solution-icon">🤝</div>
              <h3>Een stok achter de deur</h3>
              <p>
                Je hebt een vast moment en iemand die je helpt om gemotiveerd te
                blijven.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOR WHO */}
<section id="pt-voor-wie" className="pt-forwho">
    <span className="eyebrow">
    Misschien herken je jezelf hierin
  </span>

  <h2>1-op-1 personal training is perfect voor jou als je…</h2>

  <p className="section-intro">
    Je hoeft niet fit of ervaren te zijn om te beginnen. Het belangrijkste is
    dat je graag aan jezelf wilt werken en behoefte hebt aan persoonlijke
    begeleiding.
  </p>

  <div className="forwho-grid">
    <div className="forwho-card">
      <span className="forwho-icon">🌱</span>

      <h3>Net begint met sporten</h3>

      <p>
        Je weet niet goed waar je moet beginnen en wilt graag begeleiding.
      </p>
    </div>

    <div className="forwho-card">
      <span className="forwho-icon">🔄</span>

      <h3>Opnieuw wilt starten</h3>

      <p>
        Je hebt een tijd niet gesport en wilt weer structuur en energie
        opbouwen.
      </p>
    </div>

    <div className="forwho-card">
      <span className="forwho-icon">🤝</span>

      <h3>Je onzeker voelt in een sportschool</h3>

      <p>
        Je vindt een drukke gym spannend en wilt in een rustige omgeving
        trainen.
      </p>
    </div>

    <div className="forwho-card">
      <span className="forwho-icon">📈</span>

      <h3>Eindelijk resultaat wilt zien</h3>

      <p>
        Je doet al veel, maar hebt behoefte aan een plan en een stok achter de
        deur.
      </p>
    </div>
  </div>
</section>

      {/* TRUST */}
      <section className="pt-trust">
        <h2>Waarom bij Suikergym?</h2>

        <p>
          Ik werk rustig, duidelijk en stap voor stap. Geen druk, geen haast —
          alleen begeleiding die past bij jou.
        </p>
      </section>

      <section className="pt-reviews">
  <h2>Wat anderen zeggen</h2>

  <div className="reviews-grid">
    <div className="review-card">
      ⭐⭐⭐⭐⭐
      <p>
        "Ik durfde nooit een sportschool binnen te stappen, maar bij Suikergym
        voelde ik me meteen op mijn gemak."
      </p>
    </div>

    <div className="review-card">
      ⭐⭐⭐⭐⭐
      <p>
        "Door de persoonlijke begeleiding weet ik eindelijk wat ik moet doen en
        zie ik resultaat."
      </p>
    </div>

    <div className="review-card">
      ⭐⭐⭐⭐⭐
      <p>
        "De rustige sfeer en duidelijke uitleg hebben ervoor gezorgd dat ik
        sporten eindelijk volhoud."
      </p>
    </div>
  </div>
</section>

      {/* CTA */}
      <section className="pt-cta">
        <h2>Klaar om te beginnen?</h2>

        <p>
          Plan een vrijblijvende kennismaking. Dan kijken we samen of dit bij je
          past.
        </p>

        <Link to="/kennismaken" className="btn-primary">
          Kennismaken plannen
        </Link>
      </section>
    </div>
  );
}

export default PersonalTraining;

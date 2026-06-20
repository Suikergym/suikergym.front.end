import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "../styles/BreakfastClub.css";

function BreakfastClub() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("Verzenden...");

    try {
      // TODO: Integrate with your backend API
      // For now, just simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setResult("Bedankt voor je interesse! We nemen snel contact met je op.");
      setFormData({ name: "", email: "", phone: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("Er is een fout opgetreden. Probeer het later opnieuw.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
  <div className="breakfast-club-page">
    <Helmet>
      <meta charSet="utf-8" />
      <title>
        Breakfast Club Groningen | Trainen & Ontbijten voor Werk
      </title>
      <meta
        name="description"
        content="Train 45 minuten, geniet van een gezond ontbijt en begin je werkdag vol energie. Breakfast Club bij Suikergym in Hoogkerk."
      />
    </Helmet>

    {/* HERO */}
    <section className="breakfast-hero">
      <div className="breakfast-hero-content">

        <div className="breakfast-badge">
          Voor drukke Groningers
        </div>

        <h1>Train. Ontbijt. Begin je dag sterk.</h1>

        <p className="hero-tagline">
          Een energieke groepstraining inclusief gezond ontbijt.
          Voor mensen die fitter willen worden zonder dat sporten hun hele dag kost.
        </p>

        <div className="hero-benefits">
          <span>✓ 45 minuten trainen</span>
          <span>✓ Inclusief ontbijt</span>
          <span>✓ Voor werk klaar</span>
          <span>✓ Maximaal 8 deelnemers</span>
        </div>

        <a href="#aanmelden" className="hero-button">
          Vraag een gratis proeftraining aan
        </a>
      </div>

      <div className="hero-image">
        <img src="/images/elze-kuiper.jpg" alt="Elze Kuiper Personal Trainer" />
      </div>
    </section>

    {/* INFO / VOORDELEN */}
    <section className="breakfast-info">
      <div className="info-container">

        <div className="info-card">
          <div className="info-icon">🏋️</div>
          <h3>Professionele Training</h3>
          <p>45 minuten trainen onder begeleiding van een ervaren personal trainer.</p>
        </div>

        <div className="info-card">
          <div className="info-icon">🥗</div>
          <h3>Eiwitrijk Ontbijt</h3>
          <p>
            Na je workout een voedzaam ontbijt dat je energie geeft voor de dag.
          </p>
        </div>

        <div className="info-card">
          <div className="info-icon">⏰</div>
          <h3>Voor Werk Klaar</h3>
          <p>
            Trainen en ontbijten voor 8:00 zodat je fris je werkdag begint.
          </p>
        </div>

      </div>
    </section>

    {/* DETAILS */}
    <section className="breakfast-details">
      <div className="details-container">

        <h2>Praktische informatie</h2>

        <div className="details-grid">

          <div className="detail-item">
            <span className="detail-label">Wanneer</span>
            <span className="detail-value">Dinsdag & Donderdag</span>
          </div>

          <div className="detail-item">
            <span className="detail-label">Training</span>
            <span className="detail-value">06:30 - 07:15</span>
          </div>

          <div className="detail-item">
            <span className="detail-label">Ontbijt</span>
            <span className="detail-value">07:15 - 08:00</span>
          </div>

          <div className="detail-item">
            <span className="detail-label">Groepsgrootte</span>
            <span className="detail-value">Maximaal 8 deelnemers</span>
          </div>

          <div className="detail-item">
            <span className="detail-label">Niveau</span>
            <span className="detail-value">Alle niveaus welkom</span>
          </div>

          <div className="detail-item">
            <span className="detail-label">Locatie</span>
            <span className="detail-value">Suikergym Hoogkerk</span>
          </div>

        </div>
      </div>
    </section>

    {/* COACH SECTION */}
    <section className="coach-section">
      <div className="coach-content">

        <div className="coach-image">
          <img src="/images/elze-kuiper.jpg" alt="Elze Kuiper" />
        </div>

        <div className="coach-text">
          <h2>Over Elze</h2>

          <p>
            Ik ben Elze Kuiper, 38 jaar, vader van drie kinderen en personal trainer uit Groningen.
          </p>

          <p>
            De combinatie van werk, gezin en fit blijven is niet altijd makkelijk.
          </p>

          <p>
            Daarom heb ik de Breakfast Club ontwikkeld: trainen vóór de dag begint.
          </p>

          <p>
            Simpel, effectief en vol te houden.
          </p>
        </div>

      </div>
    </section>

    {/* TESTIMONIALS */}
    <section className="testimonial-section">

      <h2>Wat deelnemers zeggen</h2>

      <div className="testimonial-grid">

        <div className="testimonial">
          <p>"Voor het eerst lukt het me om sporten vol te houden."</p>
          <strong>Mark</strong>
        </div>

        <div className="testimonial">
          <p>"Ik heb veel meer energie op werk."</p>
          <strong>Linda</strong>
        </div>

        <div className="testimonial">
          <p>"Perfecte combinatie van trainen en ontbijt."</p>
          <strong>Bas</strong>
        </div>

      </div>
    </section>

    {/* PRICING */}
    <section className="pricing-section">

      <h2>Investering</h2>

      <div className="pricing-card">
        <div className="price">€25</div>
        <p>per sessie inclusief ontbijt</p>

        <ul>
          <li>45 minuten training</li>
          <li>Gezond ontbijt</li>
          <li>Kleine groep (max 8)</li>
          <li>Persoonlijke begeleiding</li>
        </ul>
      </div>

    </section>

    {/* FAQ */}
    <section className="faq-section">

      <h2>Veelgestelde vragen</h2>

      <div className="faq-item">
        <h3>Moet ik fit zijn?</h3>
        <p>Nee, iedereen kan meedoen.</p>
      </div>

      <div className="faq-item">
        <h3>Kan ik een proeftraining doen?</h3>
        <p>Ja, meld je aan via het formulier.</p>
      </div>

      <div className="faq-item">
        <h3>Waar is het?</h3>
        <p>Suikergym Hoogkerk.</p>
      </div>

    </section>

    {/* FORM */}
    <section className="breakfast-registration" id="aanmelden">

      <div className="registration-container">

        <div className="registration-content">
          <h2>Vraag een gratis proeftraining aan</h2>
          <p>
            Laat je gegevens achter en ik neem persoonlijk contact met je op.
          </p>
        </div>

        <form className="registration-form" onSubmit={handleSubmit}>

          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label>Volledige naam</label>
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label>Email</label>
          </div>

          <div className="form-group">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label>Telefoonnummer</label>
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Verzenden..." : "Aanmelden"}
          </button>

          {result && <div className="form-result">{result}</div>}
        </form>

      </div>
    </section>
  </div>
);
}

export default BreakfastClub;

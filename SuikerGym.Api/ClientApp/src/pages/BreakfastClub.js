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
        <title>Breakfast Club - Suikergym</title>
        <meta
          name="description"
          content="Train en geniet van een gezond ontbijt voor werk bij Suikergym Breakfast Club"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="breakfast-hero">
        <div className="breakfast-hero-content">
          <div className="breakfast-badge">Nieuw!</div>
          <h1>Breakfast Club</h1>
          <h2>Train & Ontbijt voor Werk</h2>
          <p className="hero-tagline">
            Start je dag met energie! Train hard, eet goed, en begin je werkdag
            als een winnaar.
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="breakfast-info">
        <div className="info-container">
          <div className="info-card">
            <div className="info-icon">🏋️</div>
            <h3>Intensieve Workout</h3>
            <p>
              Een krachtige trainingssessie van 45 minuten om je dag energiek te
              beginnen. Van cardio tot kracht - we pakken alles aan.
            </p>
          </div>

          <div className="info-card">
            <div className="info-icon">🥗</div>
            <h3>Gezond Ontbijt</h3>
            <p>
              Na je workout geniet je van een voedzaam en smaakvol ontbijt,
              speciaal samengesteld om je lichaam te voeden en je energie level
              hoog te houden.
            </p>
          </div>

          <div className="info-card">
            <div className="info-icon">⏰</div>
            <h3>Voor Werk</h3>
            <p>
              Perfecte timing: train van 6:30 tot 7:15, ontbijt tot 8:00, en
              start fris en gefocust je werkdag. Optimaal voor drukke
              professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="breakfast-details">
        <div className="details-container">
          <h2>Wat kun je verwachten?</h2>
          <div className="details-grid">
            <div className="detail-item">
              <span className="detail-label">Wanneer</span>
              <span className="detail-value">
                Dinsdag & Donderdag ochtend
              </span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Training</span>
              <span className="detail-value">6:30 - 7:15 uur</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Ontbijt</span>
              <span className="detail-value">7:15 - 8:00 uur</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Groepsgrootte</span>
              <span className="detail-value">Max. 8 personen</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Niveau</span>
              <span className="detail-value">Alle niveaus welkom</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Prijs</span>
              <span className="detail-value">€25 per sessie</span>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="breakfast-registration">
        <div className="registration-container">
          <div className="registration-content">
            <h2>Meld je Interesse Aan</h2>
            <p>
              Wil je bij de eerste Breakfast Club sessies zijn? Laat hieronder
              je gegevens achter en we nemen contact met je op zodra we van
              start gaan!
            </p>
          </div>

          <form className="registration-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label htmlFor="name">Volledige Naam</label>
            </div>

            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label htmlFor="email">Email Adres</label>
            </div>

            <div className="form-group">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label htmlFor="phone">Telefoonnummer</label>
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Verzenden..." : "Interesse Aanmelden"}
            </button>

            {result && <div className="form-result">{result}</div>}
          </form>
        </div>
      </section>
    </div>
  );
}

export default BreakfastClub;

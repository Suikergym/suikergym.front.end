import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "../styles/BreakfastClub.css";
import BreakfastBox from "../assets/breakfast-box.png";
import PancakeBowl from "../assets/pancake-bowl.jpg";
import OvernightOats from "../assets/overnight-oats.jpg";
import QuarkGranola from "../assets/quark-granola.jpg";
import ElzeKuiper from "../assets/ElzeKuiper.jpeg";
import { Link } from "react-router-dom";
import LaunchBanner from "../components/LaunchBanner";

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
        <title>Breakfast Club Groningen | Sporten vóór Werk + Ontbijt</title>
        <meta
          name="description"
          content="Train 45 minuten, geniet van een gezond ontbijt en begin je werkdag vol energie. Breakfast Club bij Suikergym in Hoogkerk."
        />
      </Helmet>

      {/* LAUNCH BANNER */}
      <LaunchBanner />
      {/* HERO */}
      <section className="breakfast-hero">
        <div className="breakfast-hero-content">
          <div className="breakfast-badge">Voor drukke Groningers</div>

          <h1>Sport, ontbijt en zit vóór 08:00 op je werk.</h1>

          <p className="hero-tagline">
            Speciaal voor drukke ouders en professionals die fitter willen
            worden zonder dat sporten hun avond kost.
          </p>

          <div className="hero-benefits">
            <span>✓ 45 minuten trainen</span>
            <span>✓ Eiwitrijk ontbijt inbegrepen</span>
            <span>✓ Voor 08:00 klaar</span>
            <span>✓ Maximaal 10 deelnemers</span>
          </div>

          <a href="#aanmelden" className="hero-button">
            Reserveer jouw gratis proeftraining
          </a>
        </div>

        <div className="hero-image">
          <img src={BreakfastBox} alt="Breakfast Club ontbijtbox" />
        </div>
      </section>

      {/* HET PROBLEEM */}
      <section className="problem-section">
        <div className="problem-container">
          <h2>Waarom lukt sporten vaak niet?</h2>

          <p className="problem-intro">
            De meeste mensen weten dat bewegen belangrijk is. Het probleem is
            niet motivatie. Het probleem is tijd.
          </p>

          <div className="problem-grid">
            <div className="problem-card">
              <div className="problem-icon">👨‍👩‍👧‍👦</div>
              <h3>Gezin</h3>
              <p>
                Kinderen naar school brengen, koken en het huishouden laten
                weinig ruimte over voor jezelf.
              </p>
            </div>

            <div className="problem-card">
              <div className="problem-icon">💼</div>
              <h3>Werk</h3>
              <p>
                Na een lange werkdag ontbreekt vaak de energie om nog naar de
                sportschool te gaan.
              </p>
            </div>

            <div className="problem-card">
              <div className="problem-icon">⏰</div>
              <h3>Tijdgebrek</h3>
              <p>
                Sporten wordt uitgesteld tot morgen. En morgen wordt volgende
                week.
              </p>
            </div>
          </div>

          <div className="problem-solution">
            <h3>Daarom bestaat de Breakfast Club</h3>

            <p>
              Train voordat de dag begint. Om 08:00 heb je al gesport, ontbeten
              en een overwinning binnen. Geen avondstress, geen uitstelgedrag en
              geen schuldgevoel.
            </p>
          </div>
        </div>
      </section>

      {/* HOE WERKT HET */}
      <section className="morning-timeline">
        <h2>Om 08:00 heb je al gesport én ontbeten</h2>

        <div className="timeline-container">
          <div className="timeline-step">
            <div className="timeline-time">07:00</div>
            <div className="timeline-icon">🏋️</div>
            <h3>Training</h3>
            <p>45 minuten kracht en conditie.</p>
          </div>

          <div className="timeline-arrow">→</div>

          <div className="timeline-step">
            <div className="timeline-time">07:45</div>
            <div className="timeline-icon">🥣</div>
            <h3>Ontbijt</h3>
            <p>Een vers en eiwitrijk ontbijt voor optimaal herstel.</p>
          </div>

          <div className="timeline-arrow">→</div>

          <div className="timeline-step">
            <div className="timeline-time">08:00</div>
            <div className="timeline-icon">💼</div>
            <h3>Naar werk</h3>
            <p>Vol energie aan je werkdag beginnen.</p>
          </div>
        </div>
      </section>

      {/* ONTBIJT */}
      <section className="food-section">
        <div className="container">
          <p className="diet-options">
            🌱 Vegan opties beschikbaar • 🥛 Lactosevrij mogelijk • 🌾
            Glutenvrije opties op aanvraag
          </p>

          <div className="section-header">
            <h2>Kies jouw favoriete ontbijt</h2>
            <p>
              Geen stress over ontbijt of meal prep. Na iedere training staat er
              een vers ontbijt voor je klaar. Kies jouw favoriet bij je
              inschrijving en wijzig je keuze wanneer je daar behoefte aan hebt.
            </p>
          </div>
          <div className="breakfast-grid">
            <div className="food-card">
              <div className="food-tag">Meest gekozen</div>
              <img
                src={QuarkGranola}
                alt="Kwark met granola"
                className="food-image"
              />
              <h3>Kwark met granola</h3>
              <p>Magere kwark met huisgemaakte granola en blauwe bessen.</p>

              <div className="macros">
                <div className="macro">
                  <strong>25g</strong>
                  <span>Eiwit</span>
                </div>

                <div className="macro">
                  <strong>35g</strong>
                  <span>Koolhydraten</span>
                </div>

                <div className="macro">
                  <strong>8g</strong>
                  <span>Vet</span>
                </div>

                <div className="macro">
                  <strong>320</strong>
                  <span>Kcal</span>
                </div>
              </div>
            </div>

            <div className="food-card">
              <img
                src={OvernightOats}
                alt="Overnight oats"
                className="food-image"
              />
              <h3>Overnight oats</h3>
              <p>Romige overnight oats met banaan, chiazaad en vers fruit.</p>

              <div className="macros">
                <div className="macro">
                  <strong>25g</strong>
                  <span>Eiwit</span>
                </div>

                <div className="macro">
                  <strong>35g</strong>
                  <span>Koolhydraten</span>
                </div>

                <div className="macro">
                  <strong>8g</strong>
                  <span>Vet</span>
                </div>

                <div className="macro">
                  <strong>320</strong>
                  <span>Kcal</span>
                </div>
              </div>
            </div>

            <div className="food-card">
              <img
                src={PancakeBowl}
                alt="Pancake bowl"
                className="food-image"
              />
              <h3>Pancake bowl</h3>
              <p>Eiwitrijke pancakes met yoghurt en vers fruit.</p>

              <div className="macros">
                <div className="macro">
                  <strong>25g</strong>
                  <span>Eiwit</span>
                </div>

                <div className="macro">
                  <strong>35g</strong>
                  <span>Koolhydraten</span>
                </div>

                <div className="macro">
                  <strong>8g</strong>
                  <span>Vet</span>
                </div>

                <div className="macro">
                  <strong>320</strong>
                  <span>Kcal</span>
                </div>
              </div>
            </div>
          </div>
          <div className="food-benefit">
            <h3>Waarom een ontbijt na je training?</h3>

            <p>
              Door direct na je training te ontbijten ondersteun je je
              spierherstel, blijf je langer verzadigd en begin je de dag met
              meer energie.
            </p>
          </div>
          <div className="smoothie-section">
            <h3>🥤 Maak je ontbijt compleet (+ €5)</h3>
            <p>Kies iedere training uit één van deze smaken:</p>

            <div className="smoothie-grid">
              <div className="smoothie-card">
                <h4>🍓 Aardbei-Banaan Boost</h4>
                <p>±24g eiwit • ±230 kcal</p>
              </div>

              <div className="smoothie-card">
                <h4>🥭 Mango-Tropical Protein</h4>
                <p>±23g eiwit • ±220 kcal</p>
              </div>

              <div className="smoothie-card">
                <h4>🍫 Chocolate Banana Recovery</h4>
                <p>±27g eiwit • ±250 kcal</p>
              </div>
            </div>

            <div className="smoothie-bonus">
              🎉 Na iedere 10 bezoeken ontvang je een gratis proteïnesmoothie
              naar keuze.
            </div>
          </div>
          <div className="food-note">
            <p>🌱 Vegan en lactosevrije varianten beschikbaar.</p>

            <p>
              🌾 Glutenvrije opties mogelijk. Omdat de ontbijtjes thuis worden
              bereid, kunnen sporen van gluten niet volledig worden uitgesloten.
            </p>

            <small>*Macro's zijn indicatief en kunnen licht afwijken.</small>
          </div>
        </div>
      </section>

      {/* COACH SECTION */}
      <section className="coach-section">
        <div className="coach-content">
          <div className="coach-image">
            <img src={ElzeKuiper} alt="Elze Kuiper" />
          </div>

          <div className="coach-text">
            <h2>Over Elze</h2>

            <p>
              Ik ben Elze Kuiper, 38 jaar, vader van drie kinderen en personal
              trainer uit Groningen.
            </p>

            <p>
              De combinatie van werk, gezin en fit blijven is niet altijd
              makkelijk.
            </p>

            <p>
              Daarom heb ik de Breakfast Club ontwikkeld: trainen vóór de dag
              begint.
            </p>

            <p>Simpel, effectief en vol te houden.</p>
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
              <span className="detail-value">Maandag, Woensdag & Vrijdag</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Training</span>
              <span className="detail-value">07:00 - 07:45</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Douchen & Omkleden</span>
              <span className="detail-value">07:45 - 08:00</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Ontbijt</span>
              <span className="detail-value">08:00</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Groepsgrootte</span>
              <span className="detail-value">Maximaal 10 deelnemers</span>
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

      {/* PRICING */}
      <section className="pricing-section">
        <div className="pricing-banner">
          <div className="pricing-badge">🎉 Oprichtingsleden-aanbod</div>

          <h2>Vanaf €59 per maand</h2>

          <p>
            Exclusieve introductieprijs voor de eerste 10 deelnemers. Geldig
            gedurende de eerste 3 maanden.
          </p>
        </div>

        <div className="pricing-table-wrapper">
          <table className="pricing-table">
            <thead>
              <tr>
                <th>Abonnement</th>
                <th>Introductieprijs</th>
                <th>Reguliere prijs</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1x per week</td>
                <td className="intro-price">€59</td>
                <td className="regular-price">€79</td>
              </tr>

              <tr>
                <td>2x per week</td>
                <td className="intro-price">€89</td>
                <td className="regular-price">€139</td>
              </tr>

              <tr>
                <td>3x per week</td>
                <td className="intro-price">€109</td>
                <td className="regular-price">€179</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="pricing-benefits">
          <p>✓ Inclusief ontbijt</p>
          <p>✓ Gratis proeftraining</p>
          <p>✓ Maximaal 10 deelnemers per groep</p>
          <p>✓ Na 3 maanden beslis je zelf of je wilt verlengen</p>
        </div>

        <div className="pricing-cta">
          <a href="#aanmelden" className="hero-button">
            Claim jouw introductieplek
          </a>
        </div>

        <p className="pricing-spots">
          Slechts 10 introductieplekken beschikbaar.
        </p>
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
            {/* Ontbijtkeuze */}
            <div className="form-group">
              <select
                name="breakfastChoice"
                value={formData.breakfastChoice}
                onChange={handleChange}
                required
              >
                <option value="">Kies je ontbijt</option>
                <option value="kwark_granola">Kwark met granola</option>
                <option value="overnight_oats">Overnight oats</option>
                <option value="pancake_bowl">Pancake bowl</option>
                <option value="don't_know">Ik weet het nog niet</option>
              </select>
              <label>Ontbijtkeuze</label>
            </div>

            {/* Smoothie keuze */}
            <div className="form-group">
              <select
                name="smoothieChoice"
                value={formData.smoothieChoice}
                onChange={handleChange}
                required
              >
                <option value="">Kies je smoothie</option>
                <option value="aardbei_banaan_boost">
                  Aardbei-banaan boost
                </option>
                <option value="mango_tropical_protein">
                  Mango tropical protein
                </option>
                <option value="chocolate_banana_recovery">
                  Chocolate banana recovery
                </option>
              </select>
              <label>Smoothiekeuze</label>
            </div>

            {/* Voedingswensen */}
            {/* <div className="form-group">
              <label className="group-title">Voedingswensen</label>
              <div className="option-cards">
                <label
                  className={`option-card ${formData.dietPreference === "standaard" ? "active" : ""}`}
                >
                  <input
                    type="radio"
                    name="dietPreference"
                    value="standaard"
                    onChange={handleChange}
                    checked={formData.dietPreference === "standaard"}
                  />
                  <span>Standaard</span>
                </label>

                <label
                  className={`option-card ${formData.dietPreference === "vegan" ? "active" : ""}`}
                >
                  <input
                    type="radio"
                    name="dietPreference"
                    value="vegan"
                    onChange={handleChange}
                    checked={formData.dietPreference === "vegan"}
                  />
                  <span>Vegan</span>
                </label>

                <label
                  className={`option-card ${formData.dietPreference === "lactosevrij" ? "active" : ""}`}
                >
                  <input
                    type="radio"
                    name="dietPreference"
                    value="lactosevrij"
                    onChange={handleChange}
                    checked={formData.dietPreference === "lactosevrij"}
                  />
                  <span>Lactosevrij</span>
                </label>

                <label
                  className={`option-card ${formData.dietPreference === "vegan_lactosevrij" ? "active" : ""}`}
                >
                  <input
                    type="radio"
                    name="dietPreference"
                    value="vegan_lactosevrij"
                    onChange={handleChange}
                    checked={formData.dietPreference === "vegan_lactosevrij"}
                  />
                  <span>Vegan & lactosevrij</span>
                </label>
              </div>
            </div> */}

            {/* Allergieën / opmerkingen */}
            <div className="form-group">
              <textarea
                name="allergies"
                value={formData.allergies}
                onChange={handleChange}
                placeholder=" "
                rows="4"
              />
              <label>Allergieën / dieetwensen / opmerkingen</label>
            </div>

            {/* Naam */}
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

            {/* Email */}
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

            {/* Telefoon */}
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

            {/* Submit */}
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Verzenden..." : "Aanmelden"}
            </button>

            {result && <div className="form-result">{result}</div>}
          </form>
        </div>
      </section>
      <Link to="/contact" className="mobile-cta">
  Meld je aan
</Link>
    </div>
  );
}

export default BreakfastClub;

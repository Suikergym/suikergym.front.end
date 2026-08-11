import React from "react";
import { Helmet } from "react-helmet-async";
import "../styles/Contact.css";

import PhoneIcon from "@mui/icons-material/Phone";
import LocationIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/AlternateEmail";
import AccessTime from "@mui/icons-material/AccessTime";

import { submitContactForm } from "../services/apiService";

function Contact() {
  const [result, setResult] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    // Honeypot: bots vullen dit veld vaak automatisch in
    if (formData.get("petname") !== "") {
      return;
    }

    setIsSubmitting(true);
    setResult("");

    try {
      const contactData = {
        subject: formData.get("subject"),
        firstname: formData.get("firstname"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
      };

      const response = await submitContactForm(contactData);

      if (response.success) {
        setResult(
          response.message || "Bedankt voor je bericht! Ik neem zo snel mogelijk contact met je op."
        );
        event.target.reset();
      } else {
        setResult(
          response.message ||
            "Er is iets misgegaan. Probeer het later opnieuw."
        );
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setResult(
        "Er is iets misgegaan. Probeer het later opnieuw."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact - Suikergym</title>
        <meta
          name="description"
          content="Heb je een vraag over personal training, de Breakfast Club of Suikergym? Neem vrijblijvend contact op."
        />
      </Helmet>

      <section className="contact">
        <div className="content">
          <h1>Neem contact op</h1>

          <p>
            Heb je een vraag over trainen bij Suikergym, personal training of
            de Breakfast Club? Stuur me gerust een bericht.
          </p>

          <p>
            Je kunt het formulier hieronder gebruiken. Liever direct contact?
            Je kunt me ook bellen of mailen.
          </p>
        </div>

        <div className="container">
          <div className="contactInfo">
            <div className="box">
              <div className="icon-background">
                <div className="icon">
                  <PhoneIcon />
                </div>
              </div>

              <div className="text">
                <h3>Telefoon</h3>
                <a href="tel:+31651521894">+31 6 515 21 894</a>
              </div>
            </div>

            <div className="box">
              <div className="icon-background">
                <div className="icon">
                  <EmailIcon />
                </div>
              </div>

              <div className="text">
                <h3>E-mail</h3>
                <a href="mailto:info@suikergym.nl">
                  info@suikergym.nl
                </a>
              </div>
            </div>

            <div className="box">
              <div className="icon-background">
                <div className="icon">
                  <LocationIcon />
                </div>
              </div>

              <div className="text">
                <h3>Locatie</h3>
                <p>
                  Peizerweg 295
                  <br />
                  9744 BG Groningen
                  <br />
                  Sportpark Hoogkerk
                </p>
              </div>
            </div>

            <div className="box">
              <div className="icon-background">
                <div className="icon">
                  <AccessTime />
                </div>
              </div>

              <div className="text">
                <h3>Bereikbaar</h3>
                <p>Maandag: 07:00 – 15:00</p>
                <p>Woensdag: 07:00 – 15:00</p>
                <p>Woensdag: 18:00 – 21:00</p>
                <p>Vrijdag: 07:00 – 15:00</p>
              </div>
            </div>
          </div>

          <div className="contactForm">
            <form onSubmit={onSubmit}>
              <h2>Waar kan ik je mee helpen?</h2>

              <div className="inputBox">
                <label htmlFor="subject">Onderwerp</label>

                <select name="subject" id="subject" required>
                  <option value="">Maak een keuze</option>
                  <option value="Personal training">
                    Personal training
                  </option>
                  <option value="Breakfast Club">
                    Breakfast Club
                  </option>
                  <option value="Proefles">
                    Proefles
                  </option>
                  <option value="Tarieven">
                    Tarieven
                  </option>
                  <option value="Locatie">
                    Locatie
                  </option>
                  <option value="Overig">
                    Anders
                  </option>
                </select>
              </div>

              <div className="inputBox">
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  required
                  placeholder=" "
                  autoComplete="given-name"
                />
                <span>Voornaam</span>
              </div>

              <div className="petname" aria-hidden="true">
                <input
                  type="text"
                  id="petname"
                  name="petname"
                  defaultValue=""
                  tabIndex="-1"
                  autoComplete="off"
                />
                <span>Petname</span>
              </div>

              <div className="inputBox">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder=" "
                  autoComplete="email"
                />
                <span>E-mailadres</span>
              </div>

              <div className="inputBox">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder=" "
                  autoComplete="tel"
                />
                <span>Telefoonnummer (optioneel)</span>
              </div>

              <div className="inputBox">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  placeholder=" "
                ></textarea>
                <span>Je bericht</span>
              </div>

              <div className="inputBox">
                <button
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Verzenden..." : "Verstuur bericht"}
                </button>
              </div>

              {result && (
                <div
                  className="result-message"
                  role="status"
                  aria-live="polite"
                >
                  {result}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
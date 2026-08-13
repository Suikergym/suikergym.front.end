import React from "react";
import { Helmet } from "react-helmet-async";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/AlternateEmail";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact - Suikergym Groningen</title>
        <meta
          name="description"
          content="Neem contact op met Suikergym in Groningen. Heb je een vraag over personal training, de Breakfast Club, tarieven of een proefles? Neem gerust contact op."
        />
      </Helmet>

      <section className="contact">
        <div className="content">
          <span className="eyebrow">CONTACT</span>

          <h1>Heb je een vraag?</h1>

          <p>
            Wil je meer weten over personal training, de Breakfast Club,
            tarieven of trainen bij Suikergym? Neem gerust contact met me op.
          </p>

          <p>
            Je kunt me bellen, mailen of gewoon even een bericht sturen.
            Ik help je graag verder.
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
                <a href="tel:+31651521894">
                  +31 6 515 21 894
                </a>
                <p>Bel of stuur me een WhatsApp-bericht.</p>
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
                <p>Voor vragen of meer informatie.</p>
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
                </p>
                <p>Sportpark Hoogkerk</p>
              </div>
            </div>

            <div className="box">
              <div className="icon-background">
                <div className="icon">
                  <AccessTimeIcon />
                </div>
              </div>

              <div className="text">
                <h3>Wanneer kun je me bereiken?</h3>

                <p>
                  <strong>Maandag</strong>
                  <br />
                  07:00 – 15:00
                </p>

                <p>
                  <strong>Woensdag</strong>
                  <br />
                  07:00 – 15:00
                  <br />
                  18:00 – 21:00
                </p>

                <p>
                  <strong>Vrijdag</strong>
                  <br />
                  07:00 – 15:00
                </p>
              </div>
            </div>
          </div>

          <div className="contact-cta">
            <h2>Liever eerst kennismaken?</h2>

            <p>
              Wil je niet alleen een vraag stellen, maar eens ervaren hoe
              trainen bij Suikergym is? Plan dan een gratis kennismaking en
              proefles.
            </p>

            <a href="/contact" className="btn-primary">
              Plan een gratis proefles
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
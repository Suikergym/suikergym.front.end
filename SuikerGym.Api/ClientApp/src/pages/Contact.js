import React from "react";
import { Helmet } from "react-helmet";
import "../styles/Contact.css";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/AlternateEmail";
import AccessTime from "@material-ui/icons/AccessTime"

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ee586f46-eabc-4e66-8ba9-c9e05773f99d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (formData.get("petname") === "") {
      if (data.success) {
        setResult("We nemen snel contact op!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    }
  };

  return (
    <div className="form">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Suikergym - Contact</title>
      </Helmet>
      <title>{(document.title = "Contact - Suikergym")}</title>

      <section className="contact">
        <div className="content">
          <h2>Vraag een gratis kennismaking en proefles aan</h2>
          <p>
            Wil je je leven veranderen door af te vallen, sterker te worden en
            met meer energie en zelfvertrouwen in de wereld te staan? Bij
            Suikergym geloven we dat trainen voor iedereen is, wat je
            achtergrond, lichaamsvorm of leeftijd ook is.
          </p>
          <p>
            Vraag hier vrijblijvend een kennismaking en gratis proefles aan
            zodat we aan de slag kunnen met jouw doelen. Ik adviseer en motiveer
            je met schema’s voor in de gym en in de keuken waar jij mee aan de
            slag kunt. Samen gaan we dus hard werken aan het veranderen van jouw
            leefstijl!
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
                <p>+316 515 21 894</p>
              </div>
            </div>
            <div className="box">
              <div className="icon-background">
                <div className="icon">
                  <EmailIcon />
                </div>
              </div>
              <div className="text">
                <h3>Email</h3>
                <p>info@suikergym.nl</p>
              </div>
            </div>
            <div className="box">
              <div className="icon-background">
                <div className="icon">
                  <LocationIcon />
                </div>
              </div>
              <div className="text">
                <h3>Adres</h3>
                <p>
                  Peizerweg 295 <br /> 9744BG <br /> Groningen /
                </p>
                <p>Sportpark Hoogkerk</p>
              </div>
            </div>
            <div className="box">
              <div className="icon-background">
                <div className="icon">
                  <AccessTime />
                </div>
                
              </div>
              <div className="text">
                  <h3>Openingstijden</h3>
                  <p>Maandag: 7.00-15.00 uur</p>
                  <p>Woensdag: 7.00-15.00 uur</p>
                  <p>Woensdag: 18.00-21.00 uur</p>
                  <p>Vrijdag: 7.00-15.00 uur</p>

                </div>
            </div>
          
          </div>
          <div className="contactForm">
            {/* <form
              action="https://formsubmit.co/485175c148f64ddb9c422a6911c64e11"
              method="POST"
            > */}
            <form onSubmit={onSubmit}>
              <h2>Neem vrijblijvend contact op</h2>
              <div className="inputBox">
                <label>
                  Programma:&nbsp;
                  <select name="goal" id="goal">
                    <option value="kort&krachtig">Kort & krachtig</option>
                    <option value="core">Core business</option>
                    <option value="intensief">Intensief en effectief</option>
                    <option value="duo">Duo training</option>
                  </select>
                </label>
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  required="required"
                />
                <span>Voornaam</span>
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  required="required"
                />
                <span>Achternaam</span>
              </div>
              <div className="petname">
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
                  type="text"
                  id="email"
                  name="email"
                  required="required"
                />
                <span>Email</span>
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  required="required"
                />
                <span>Telefoon</span>
              </div>
              <div className="inputBox">
                <textarea
                  id="message"
                  name="message"
                  required="required"
                ></textarea>
                <span>Wat is je doel?</span>
              </div>
              <div className="inputBox">
                <input type="submit" name="" value="Verstuur"></input>
              </div>
            </form>
            <span>{result}</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

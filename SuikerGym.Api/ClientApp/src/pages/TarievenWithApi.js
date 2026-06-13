import React from "react";
import { Helmet } from "react-helmet";
import "../styles/Tarieven.css";
import Program from "../components/Program.js";
import { usePrograms } from "../hooks/usePrograms";

function TarievenWithApi() {
  const { programs, loading, error } = usePrograms();

  if (loading) {
    return (
      <div className="programs-container">
        <div className="text-container">
          <h1>Aanbod</h1>
          <p>Programma's laden...</p>
        </div>
      </div>
    );
  }

  if (error) {
    // Fallback to static data if API fails
    return <TarievenStatic />;
  }

  return (
    <div className="programs-container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Suikergym - Tarieven</title>
      </Helmet>
      <div className="text-container">
        <h1>Aanbod</h1>
        <p>
          Suikergym staat voor betrokken en persoonlijke begeleiding. Dat gaat
          verder dan het ene uurtje in de week dat jij komt sporten. Wil je je
          leefstijl veranderen, dan denken we graag met je mee over schema's
          waar jij in je eigen tijd mee aan de slag kan, in de gym en in de
          keuken!
        </p>
      </div>
      <div className="card-container">
        {programs.map((program) => (
          <Program
            key={program.id}
            wrapperTitle={program.wrapperTitle}
            title={program.title}
            content1={program.content1}
            content2={program.content2}
            content3={program.content3}
            content4={program.content4}
            content5={program.content5}
            content6={program.content6}
            content7={program.content7}
            ribbonText={program.ribbonText}
          />
        ))}
      </div>
    </div>
  );
}

// Static fallback component
function TarievenStatic() {
  return (
    <div className="programs-container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Suikergym - Tarieven</title>
      </Helmet>
      <div className="text-container">
        <h1>Aanbod</h1>
        <p>
          Suikergym staat voor betrokken en persoonlijke begeleiding. Dat gaat
          verder dan het ene uurtje in de week dat jij komt sporten. Wil je je
          leefstijl veranderen, dan denken we graag met je mee over schema's
          waar jij in je eigen tijd mee aan de slag kan, in de gym en in de
          keuken!
        </p>
      </div>
      <div className="card-container">
        <Program
          wrapperTitle="Kort & Krachtig"
          title="Kort & Krachtig"
          content1="1-op-1 training"
          content2="30 minuten"
          content3="1x per week"
          content4="Perfect voor beginnende sporters"
          content5="Gratis intake + proefles"
          content6="Uitgebreide bewegingsanalyse"
          content7="Prijs inclusief btw"
          ribbonText="€ 30,- per 30 min"
        />
        <Program
          wrapperTitle="Core Business"
          title="Core Business"
          content1="1-op-1 training"
          content2="60 minuten"
          content3="1x per week"
          content4="Focus op een sterkere core"
          content5="Gratis intake + proefles"
          content6="Uitgebreide bewegingsanalyse"
          content7="Prijs inclusief btw"
          ribbonText="€ 45,- per 60 min"
        />
        <Program
          wrapperTitle="Intensief & Effectief"
          title="Intensief & Effectief"
          content1="1-op-1 training"
          content2="60 minuten"
          content3="1x per week"
          content4="Specifiek afgestemd op jouw doelen"
          content5="Gratis intake + proefles"
          content6="Uitgebreide bewegingsanalyse"
          content7="Prijs inclusief btw"
          ribbonText="€ 45,- per 60 min"
        />
        <Program
          wrapperTitle="Duo training"
          title="Duo training"
          content1="Extra motiverend"
          content2="60 minuten"
          content3="1x per week"
          content4="Samen werken aan een fitter leven"
          content5="Gratis intake + proefles"
          content6="Uitgebreide bewegingsanalyse"
          content7="Prijs inclusief btw"
          ribbonText="€ 35,- p.p."
        />
      </div>
    </div>
  );
}

export default TarievenWithApi;

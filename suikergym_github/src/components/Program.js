import React from "react";
import { Link } from "react-router-dom";
import "../styles/Program.css";

const Card = ({
  wrapperTitle,
  content1,
  content2,
  content3,
  content4,
  content5,
  content6,
  content7,
  ribbonText,
}) => {
  return (
    <div className="card">
      {
        <div className="program-box">
          <div className="ribbon ribbon-top-right">
            <span className="ribbon-text">{ribbonText}</span>
          </div>
          <div className="wrapper">
            <p className="wrapper-title">{wrapperTitle}</p>
          </div>
          <div className="program-info">
            <p className="card-text">{content1}</p>
            <p className="card-text">{content2}</p>
            <p className="card-text">{content3}</p>
            <p className="card-text">{content4}</p>
            <p className="card-text">{content5}</p>
            <p className="card-text">{content6}</p>
            <p className="card-text">{content7}</p>
          </div>
          <div className="button-box">
            <Link className="card-link" to="/contact">
              <button className="card-button"> PROEFLES AANVRAGEN </button>
            </Link>
          </div>
        </div>
      }
    </div>
  );
};

export default Card;

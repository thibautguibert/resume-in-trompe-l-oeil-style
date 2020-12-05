import React from "react";
import "./header.css";
import githubIcon from "../icons/github.svg";
import linkedInIcon from "../icons/linkedin.svg";
import twitterIcon from "../icons/twitter.svg";
import placeIcon from "../icons/pin.svg";
import emailIcon from "../icons/at-sign.svg";
import phoneIcon from "../icons/call-phone.svg";
import profilePic from "../images/photoCVsquare040v4.JPG";

const place = "La Loupe";
const Header = () => {
  return (
    <header>
      <div className="profile-container">
        <h1>Thibaut Guibert</h1>
        <div className="subtitle-container">
          <h2>Développeur fullstack React.js & node.js</h2>
          <span>|</span>
          <figure>
            <img src={linkedInIcon} alt="linkedin icon" className="icon" />
            <img src={githubIcon} alt="github icon" className="icon" />
            <img src={twitterIcon} alt="twitter icon" className="icon" />
          </figure>
        </div>
        <div className="contact-container">
          <div className="place-container">
            <img src={placeIcon} alt="place icon" className="icon" />
            <h3>{place}</h3>
          </div>
          <div className="email-container">
            <img src={emailIcon} alt="email icon" className="icon" />
            <h3>thibaut.guibert@edu.escp.eu</h3>
          </div>
          <div className="phone-container">
            <img src={phoneIcon} alt="phone icon" className="icon" />
            <h3>06.71.28.43.79</h3>
          </div>
        </div>
      </div>
      <figure className="profile-pic-container">
        <img src={profilePic} alt="profile of Thibaut Guibert" />
      </figure>
      <p>
        Disponible à partir du <span>15 février</span> pour un{" "}
        <span>stage de 4 à 6 mois</span> dans toute la France
      </p>
    </header>
  );
};

export default Header;

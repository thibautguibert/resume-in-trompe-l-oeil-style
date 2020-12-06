import React, { useState } from "react";
import { useTheme } from "../ThemeContext.tsx";

import { shakeAnimation, giveGrayScale, showBang } from "../jsFunctionLibrary";

import "./header.css";

import githubIcon from "../icons/github.svg";
import linkedInIcon from "../icons/linkedin.svg";
import twitterIcon from "../icons/twitter.svg";
import placeIcon from "../icons/pin.svg";
import emailIcon from "../icons/at-sign.svg";
import phoneIcon from "../icons/call-phone.svg";

const place = "La Loupe";
const Header = () => {
  const { setTheme } = useTheme();
  const [ko, setKo] = useState(0);
  const [downgrade, setDowngrade] = useState(100);
  const changeTheme = (event) => {
    const eventClass = event.target.className;
    if (ko < 4) {
      shakeAnimation(`.${eventClass}`);
      giveGrayScale(`.${eventClass}`, downgrade === 100 ? "90" : downgrade);
      setKo(ko + 1);
      setDowngrade(downgrade - 20);
      showBang(".profile-pic-container");
    } else if (ko === 4) {
      shakeAnimation(`.${eventClass}`);
      setKo(6);
      setTheme("dark");
      const icons = document.querySelectorAll(".icon");
      for (let i = 0; i < icons.length; i += 1) {
        icons[i].style.filter =
          "invert(54%) sepia(15%) saturate(950%) hue-rotate(295deg) brightness(89%) contrast(85%)";
      }
      giveGrayScale(`.${eventClass}`, "10");
    }
  };
  return (
    <header>
      <div className="profile-container">
        <h1>Thibaut Guibert</h1>
        <div className="subtitle-container">
          <h2>Développeur fullstack React.js & node.js</h2>
          <span>|</span>
          <figure>
            <a
              href="https://www.linkedin.com/in/thibautguibert/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedInIcon} alt="linkedin icon" className="icon" />
            </a>
            <a
              href="https://github.com/thibautguibert"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="github icon" className="icon" />
            </a>
            <a
              href="https://twitter.com/Thibaut_Guibert"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitterIcon} alt="twitter icon" className="icon" />
            </a>
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
        <button
          type="button"
          aria-label="clickable button for easter egg"
          className="profile-pic-btn"
          onClick={changeTheme}
        />
      </figure>
      <p>
        Disponible à partir du <span>15 février</span> pour un{" "}
        <span>stage de 4 à 6 mois</span> dans toute la France
      </p>
    </header>
  );
};

export default Header;

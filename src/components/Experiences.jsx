import React from "react";

import "./experiences.css";
import calendarIcon from "../icons/calendar-dates.svg";
import placeIcon from "../icons/pin.svg";

const Experiences = () => {
  return (
    <div className="experiences-container">
      <h1>expériences professionnelles</h1>
      <hr className="bold-hr" />
      <h2>
        <span>❖</span>Développement web
      </h2>
      <h3>Projets réalisés pendant la formation Wild Code School : </h3>
      <p>
        <span className="arrow">➢</span>Création d’une application React
        recommandant des séries TV à partir de l’API de{" "}
        <span>TheMovieDatabase</span> et de notre algorithme.
      </p>
      <p>
        <span className="arrow">➢</span>Hackathon{" "}
        <span> Back To The Future</span>: prix “Coup de cœur du Jury” avec une
        application React mobile de navigation routière.{" "}
      </p>
      <p>
        <span className="arrow">➢</span>Projet de coding dojo pour enseigner les
        bases de React en créant un Pokédex avec PokeAPI.
      </p>
      <hr className="light-hr" />

      <h2>
        <span>❖</span>Entrepreneuriat
      </h2>
      <h3>Fondateur</h3>
      <h4>Jomto, startup qui promeut la sculpture facile</h4>
      <div className="spacetime-container">
        <div>
          <img src={calendarIcon} alt="calendar" className="icon" />
          <p>Mai 2019 – Avril 2020</p>
        </div>
        <div>
          <img src={placeIcon} alt="place" className="icon" />
          <p>Paris</p>
        </div>
      </div>
      <p>
        <span className="arrow">➢</span>Création de la marque et de l’identité
        graphique <span className="brackets">(logo et packaging)</span>
      </p>
      <p>
        <span className="arrow">➢</span>Production et distribution d’un Minimum
        Viable Product
      </p>
      <hr className="light-hr" />

      <h3>Manager de Cafeteria</h3>
      <h4>
        Schoolab, cafeteria-bar <span>Schoolbar St-Lazare</span>
      </h4>
      <div className="spacetime-container">
        <div>
          <img src={calendarIcon} alt="calendar" className="icon" />
          <p>Juil 2019 – Dec 2019</p>
        </div>
        <div>
          <img src={placeIcon} alt="place" className="icon" />
          <p>Paris</p>
        </div>
      </div>
      <p>
        <span className="arrow">➢</span>Instauration du suivi financier de
        l’activité (P&L)
      </p>
      <p>
        <span className="arrow">➢</span>Mise en place d’un plan marketing, d’une
        politique de prix et de réduction des coûts{" "}
        <span className="highlight">
          → CA +30%, retour des comptes à l’équilibre
        </span>
      </p>
      <hr className="light-hr" />
    </div>
  );
};

export default Experiences;

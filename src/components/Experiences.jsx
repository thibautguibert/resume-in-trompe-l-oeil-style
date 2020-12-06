import React from "react";

import "./experiences.css";

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
    </div>
  );
};

export default Experiences;

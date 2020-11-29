import React from "react";
import "./header.css";

const place = "La Loupe";
const Header = () => {
    return (
        <header>
            <div className="profile-container">
                <h1>Thibaut Guibert</h1>
                <div className="subtitle-container">
                    <h2>Developpeur fullstack React.js & node.js</h2>
                    <span>|</span>
                    <figure>
                        <img src="" alt="linkedin icon" />
                        <img src="" alt="github icon" />
                        <img src="" alt="twitter icon" />
                    </figure>
                </div>
                <div className="contact-container">
                    <div className="place-container">
                        <img src="" alt="place icon" />
                        <h3>La Loupe</h3>
                    </div>
                    <div className="email-container">
                        <img src="" alt="email icon" />
                        <h3>thibaut.guibert@edu.escp.eu</h3>
                    </div>
                    <div className="phone-container">
                        <img src="" alt="phone icon" />
                        <h3>06.71.28.43.79</h3>
                    </div>
                </div>
            </div>
            <figure className="profile-pic-container">
                <img src="" alt="profile picture" />
            </figure>
            <p>Disponible à partir du <span>15 février</span> pour un <span>stage de 4 à 6 mois</span> dans toute la France</p>
        </header>
    )
}

export default Header;
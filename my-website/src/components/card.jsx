import React, { useState } from "react";
import "../styles/card.css";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Card({ image, title, description, link }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className="card">
        <img className="card__image" src={image} alt={title} />

        <div className="card__content">
          <h2 className="card__title">{title}</h2>
          <p className="card__description">
            {expanded ? description : `${description.slice(0, 80)}...`}
          </p>
          <div className="card__buttons">
            <button
              className="card__button"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Show Less" : "Read More"}
            </button>
            <GitHubIcon
              style={{ fontSize: 24, cursor: "pointer" }}
              onClick={() => window.open(link, "_blank")}
              className="card__github-icon"
            />
          </div>
        </div>
      </div>
    </>
  );
}

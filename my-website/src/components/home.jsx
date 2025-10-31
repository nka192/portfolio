import React from "react";
import "../styles/home.css";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  return (
    <>
      <section className="home-section">
        <div className="hero-content">
          <h1>
            Hello, I'm <span className="highlight">Nayoung Kim!</span>
          </h1>
          <h2>
            I'm {""}
            <span className="typewriter">
              <Typewriter
                words={[
                  "a Software Developer",
                  "a UX Enthusiast",
                  "a Problem Solver",
                ]}
                loop
                cursor
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
                cursorColor="#40e0d0"
              ></Typewriter>
            </span>
          </h2>
          <p className="hero-desc">
            I love building apps that simplify tasks, encourage learning, and
            empower people to reach their goals.
          </p>
          <button
            className="view_button"
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            View My Projects
          </button>
        </div>
      </section>
    </>
  );
}

export default Home;

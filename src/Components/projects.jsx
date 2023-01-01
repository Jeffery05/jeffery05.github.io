import React, { Component } from "react";
import TrashDash from "./images/TrashDash.png";
import Inflector from "./images/Inflector.png";
import DECAWebsite from "./images/DECAWebsite.png";
import DEEP from "./images/DEEP Computational Physics Challenge Presentation.png";
import LyonHacks from "./images/LyonHacks Greg The Teaching Assistant.png";
import SimonSays from "./images/SimonSays_PNG.webp";
import TheAdventure from "./images/The Adventure_PNG.webp";

export default function Projects() {
  return (
    <div className="container body-content text-center">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Cabin&family=Questrial&display=swap"
          rel="stylesheet"
        />
      </head>
      <div className="projects">
        <div className="projectsheader">
          <h1>Past Projects</h1>
          <p>Feel free to look around at some of my past projects!</p>
        </div>
        <div className="card rounded mb-4 shadow-sm">
          <img className="card-img-top" alt="Tash Dash" src={TrashDash} />
          <div className="card-body">
            <h5 className="card-title">Tash Dash</h5>
            <p className="card-text text-left">
              In this project, I worked with 3 other group members to solve the
              particle in a box problem computationally as part of University of
              Toronto's DEEP Computational Physics Challenge. In this problem,
              we used Schrödinger's equation and Python to graph the probability
              of a particle being in different areas of a box (assuming v=0 is
              inside the box and V = ∞ is outside).
            </p>
          </div>
          <div className="card-footer">
            <a
              href="https://github.com/Jeffery05/Solving-Quantum-Mechanics-Using-Python"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary bg-primary"
            >
              View GitHub
            </a>
          </div>
        </div>

        <div className="card rounded mb-4 shadow-sm">
          <img className="card-img-top" alt="Inflector" src={Inflector} />
          <div className="card-body">
            <h5 className="card-title">Inflector</h5>
            <p className="card-text text-left">
              In this project, I worked with 3 other group members to solve the
              particle in a box problem computationally as part of University of
              Toronto's DEEP Computational Physics Challenge. In this problem,
              we used Schrödinger's equation and Python to graph the probability
              of a particle being in different areas of a box (assuming v=0 is
              inside the box and V = ∞ is outside).
            </p>
          </div>
          <div className="card-footer">
            <a
              href="https://github.com/Jeffery05/Solving-Quantum-Mechanics-Using-Python"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary bg-primary"
            >
              View GitHub
            </a>
          </div>
        </div>

        <div className="card rounded mb-4 shadow-sm">
          <img
            className="card-img-top"
            alt="DECA Mackenzie Website"
            src={DECAWebsite}
          />
          <div className="card-body">
            <h5 className="card-title">DECA Mackenzie Website</h5>
            <p className="card-text text-left">
              In this project, I worked with 3 other group members to solve the
              particle in a box problem computationally as part of University of
              Toronto's DEEP Computational Physics Challenge. In this problem,
              we used Schrödinger's equation and Python to graph the probability
              of a particle being in different areas of a box (assuming v=0 is
              inside the box and V = ∞ is outside).
            </p>
          </div>
          <div className="card-footer">
            <a
              href="https://github.com/Jeffery05/Solving-Quantum-Mechanics-Using-Python"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary bg-primary"
            >
              View GitHub
            </a>
          </div>
        </div>

        <div className="card rounded mb-4 shadow-sm">
          <img className="card-img-top" alt="Quantum Mechanics" src={DEEP} />
          <div className="card-body">
            <h5 className="card-title">
              Solving the Particle in a Box Challenge Computationally
            </h5>
            <p className="card-text text-left">
              In this project, I worked with 3 other group members to solve the
              particle in a box problem computationally as part of University of
              Toronto's DEEP Computational Physics Challenge. In this problem,
              we used Schrödinger's equation and Python to graph the probability
              of a particle being in different areas of a box (assuming v=0 is
              inside the box and V = ∞ is outside).
            </p>
          </div>
          <div className="card-footer">
            <a
              href="https://github.com/Jeffery05/Solving-Quantum-Mechanics-Using-Python"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary bg-primary"
            >
              View GitHub
            </a>
          </div>
        </div>

        <div className="card rounded mb-4 shadow-sm">
          <img className="card-img-top" alt="Discord Bot" src={LyonHacks} />
          <div className="card-body">
            <h5 className="card-title">
              LyonHacks2: Greg The Teaching Assistant
            </h5>
            <p className="card-text text-left">
              This program creates a discord bot that will assist the teacher
              with their morning routine. This includes taking attendance,
              surveying the students, and keeping track of student data.
            </p>
          </div>
          <div className="card-footer">
            <a
              href="https://devpost.com/software/greg-the-teaching-assistant"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary bg-primary"
            >
              View DevPost
            </a>
          </div>
        </div>

        <div className="card rounded mb-4 shadow-sm">
          <img
            className="card-img-top"
            alt="Simon Says Homepage"
            src={SimonSays}
          />
          <div className="card-body">
            <h5 className="card-title">Simon Says</h5>
            <p className="card-text text-left">
              This program is intended to simulate playing virtual Simon Says.
              Simon Says starts off with the program flashing a series of
              colours in a specific pattern on the colour wheel. Then, you will
              have to use your keyboard to play back the exact pattern,
              including the correct colours in the correct order.
            </p>
          </div>
          <div className="card-footer">
            <a
              href="https://github.com/Jeffery05/ICS-11-Final-Project"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary bg-primary"
            >
              View GitHub
            </a>
          </div>
        </div>

        <div className="card rounded mb-4 shadow-sm">
          <img
            className="card-img-top"
            alt="The Adventure Homepage"
            src={TheAdventure}
          />
          <div className="card-body">
            <h5 className="card-title">The Adventure</h5>
            <p className="card-text text-left">
              <b>Synopsis:</b> The fly twins and their friend, Anty, went on a
              stroll one day when they found a shiny peach! As they try to get a
              closer look, they suddenly become surrounded by bees and spiders.
              Will they make it out? Or will they be next for dinner?
            </p>
          </div>
          <div className="card-footer">
            <a
              href="https://github.com/Jeffery05/ICS-10-Final-Project"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary bg-primary"
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>
      <hr />
      <footer>
        <p>© 2022 - Jeffery Hu</p>
      </footer>
    </div>
  );
}

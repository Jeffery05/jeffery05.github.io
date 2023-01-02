import React, { Component } from "react";
import TrashDash from "./images/TrashDash2.png";
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
          <h1><b>Past Projects</b></h1>
          <p>Feel free to look around at some of my past projects!</p>
        </div>
        <div className="card rounded mb-4 shadow-sm">
          <img className="card-img-top" alt="Tash Dash" src={TrashDash} />
          <div className="card-body">
            <h3 className="card-title"><b>trashdash</b></h3>
            <p className="card-text text-left">
            To deal with the problem of litter, this web application encourages citizen led environmental cleanups! It does this by introducing a centralized litter database, where citizens can post about areas with high levels of trash so it can be cleaned up during community pickup days! As an extra incentive, users gain points whenever they report/resolve litter piles, which can be exchanged for donations to a charity of their choice!.
            </p>
          </div>
          <div className="card-footer">
          <a
              href="https://trash-dash-htv.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary "
            >
              View Website
            </a>
            <a
              href="https://devpost.com/software/trashdash"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary  ms-3"
            >
              Devpost
            </a>
            <a
              href="https://github.com/Jeffery05/Hack-The-Valley"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary  ms-3"
            >
              View GitHub
            </a>
          </div>
        </div>

        <div className="card rounded mb-4 shadow-sm">
          <img className="card-img-top" alt="Inflector" src={Inflector} />
          <div className="card-body">
            <h3 className="card-title"><b>Inflector</b></h3>
            <p className="card-text text-left">
            Calculate the effects of inflation on your life using this simple tool. Using inflation rates updated in real time, find out how much your current spending habits would cost you every month for the next year. <br/><b>Note: Overall winner for Ignition Hacks 2022!</b>
            </p>
          </div>
          <div className="card-footer">
          <a
              href="https://www.inflector.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary "
            >
              View Website
            </a>
            <a
              href="https://devpost.com/software/inflector-the-inflation-projector"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary  ms-3"
            >
              Devpost
            </a>
            <a
              href="https://github.com/Jeffery05/New-Ignition-Hacks"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary  ms-3"
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
            <h3 className="card-title"><b>DECA Mackenzie Website</b></h3>
            <p className="card-text text-left">
              The official website for William Lyon Mackenzie CI's DECA chapter built using HTML, CSS, Javascript, and Boostrap. It features more about the club including photos, announcements, and more!
            </p>
          </div>
          <div className="card-footer">
          <a
              href="https://decamackenzie.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary "
            >
              View Website
            </a>
            <a
              href="https://github.com/Jeffery05/DECA-Website"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary  ms-3"
            >
              View GitHub
            </a>
          </div>
        </div>

        <div className="card rounded mb-4 shadow-sm">
          <img className="card-img-top" alt="Quantum Mechanics" src={DEEP} />
          <div className="card-body">
            <h3 className="card-title"><b>
              Solving Quantum Mechanics Using Python 
              </b></h3>
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
              className="btn btn-primary "
            >
              View GitHub
            </a>
          </div>
        </div>

        <div className="card rounded mb-4 shadow-sm">
          <img className="card-img-top" alt="Discord Bot" src={LyonHacks} />
          <div className="card-body">
            <h3 className="card-title">
            <b>LyonHacks2: Greg The Teaching Assistant</b>
            </h3>
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
              className="btn btn-primary "
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
            <h3 className="card-title"><b>Simon Says</b></h3>
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
              className="btn btn-primary "
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
            <h3 className="card-title"><b>The Adventure</b></h3>
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
              className="btn btn-primary "
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>
      <hr />
      <footer>
        <p>© 2023 - Jeffery Hu</p>
      </footer>
    </div>
  );
}

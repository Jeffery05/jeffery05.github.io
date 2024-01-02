import React from "react";
import TrashDash from "./images/TrashDash2.png";
import Inflector from "./images/Inflector.png";
import ConvertIt from "./images/ConvertIt.png";
import DECAWebsite from "./images/DECAWebsite.png";
import DEEP from "./images/DEEP Computational Physics Challenge Presentation.png";
import LyonHacks from "./images/LyonHacks Greg The Teaching Assistant.png";
import SimonSays from "./images/SimonSays_PNG.webp";
import TheAdventure from "./images/The Adventure_PNG.webp";
import pAIge from "./images/pAIge.png";
import Traffic_System from "./images/Traffic_System.jpg";
import MeetUp from "./images/MeetUp.png";
import Jobber from "./images/Jobber.png";

export default function Projects() {
  return (
    <div className="container body-content text-center">
      <div className="projects">
        <div className="projectsheader">
          <h1><b>Past Projects</b></h1>
          <p>Feel free to look around at some of my past projects!</p>
        </div>

        <div className="card rounded mb-4 shadow-sm">
          <img className="card-img-top" alt="Inflector" src={MeetUp} />
          <div className="card-body">
            <h3 className="card-title"><b>Meet Up</b></h3>
            <p className="card-footer-txt"><i>Languages: Python, JavaScript, SQL, HTML/CSS</i></p>
            <p className="card-text text-left">
            Tired of plans getting lost in the chat? Introducing MeetUp, an event management platform to streamline the event planning process! <br/>
            </p>
          </div>
          <div className="card-footer">
          <a
              href="https://meet-up-300c2e0fdbd2.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary "
            >
              View Website
            </a>
            <a
              href="https://www.youtube.com/watch?v=Sja8227G8SQ"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary  ms-3"
            >
              Demo
            </a>
            <a
              href="https://github.com/Jeffery05/MeetUp"
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
            <p className="card-footer-txt"><i>Languages: JavaScript, HTML/CSS</i></p>
            <p className="card-text text-left">
            Try out this inflation bugeting tool that uses live inflation data to project your budget for next year! <br/>
            </p>
          </div>
          <div className="card-footer">
          <a
              href="https://inflector.jefferyhu.me/"
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
          <img className="card-img-top" alt="Traffic System" src={Jobber} />
          <div className="card-body">
            <h3 className="card-title"><b>Jobber</b></h3>
            <p className="card-footer-txt"><i>Languages: Python, TypeScript, SQL, HTML/CSS</i></p>
            <p className="card-text text-left">
            Need help moving in? Or maybe getting a haircut? Try Jobber, an online marketplace to create and apply for postings for quick, individual services!
            </p>
          </div>
          <div className="card-footer">
          <a
              href="https://devpost.com/software/jobber-vn8dua"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary  ms-3"
            >
              View Devpost
            </a>
          </div>
        </div>

        <div className="card rounded mb-4 shadow-sm">
          <img className="card-img-top" alt="Traffic System" src={Traffic_System} />
          <div className="card-body">
            <h3 className="card-title"><b>Traffic Management System</b></h3>
            <p className="card-footer-txt"><i>Languages: C++</i></p>
            <p className="card-text text-left">
            Developed a model traffic light management system, complete with a gate, streetlight, traffic lights and a button to reset the timing.
            </p>
          </div>
          <div className="card-footer">
            <a
              href="https://github.com/Jeffery05/TrafficLight"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary  ms-3"
            >
              View GitHub
            </a>
          </div>
        </div>

        <div className="card rounded mb-4 shadow-sm">
          <img className="card-img-top" alt="pAIge" src={pAIge} />
          <div className="card-body">
            <h3 className="card-title"><b>pAIge</b></h3>
            <p className="card-footer-txt"><i>Languages: Python, JavaScript, SQL, HTML/CSS</i></p>
            <p className="card-text text-left">
            Harness the power of AI to swiftly generate a personalized website using your LinkedIn profile, in just a single click!
            </p>
          </div>
          <div className="card-footer">
            <a
              href="https://devpost.com/software/paige"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary  ms-3"
            >
              Devpost
            </a>
            <a
              href="https://github.com/Jeffery05/pAIge"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary  ms-3"
            >
              View GitHub
            </a>
          </div>
        </div>

        

        <div className="card rounded mb-4 shadow-sm">
          <img className="card-img-top" alt="Tash Dash" src={TrashDash} />
          <div className="card-body">
            <h3 className="card-title"><b>TrashDash</b></h3>
            <p className="card-footer-txt"><i>Languages: Python, SQL, HTMl/CSS</i></p>
            <p className="card-text text-left">
            Who thought litter cleanups could be fun? Now with TrashDash, communities can work together to keep their streets clean - all while racking up points!
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
          <img
            className="card-img-top"
            alt="Convert It"
            src={ConvertIt}
          />
          <div className="card-body">
            <h3 className="card-title"><b>Convert It.</b></h3>
            <p className="card-footer-txt"><i>Languages: TypeScript, HTML/CSS</i></p>
            <p className="card-text text-left">
            A currency exchange tracker built using React.js that can covert between 200+ currencies with real-time exchange rates updated every hour. 
            </p>
          </div>
          <div className="card-footer">
          <a
              href="https://converter.jefferyhu.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary "
            >
              View Website
            </a>
            <a
              href="https://github.com/Jeffery05/currency-converter"
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
            <p className="card-footer-txt"><i>Languages: JavaScript, HTML/CSS </i></p>
            <p className="card-text text-left">
              The official website for William Lyon Mackenzie CI's DECA chapter. It features more about the club including photos, announcements, and more!
            </p>
          </div>
          <div className="card-footer">
          <a
              href="https://jeffery05.github.io/DECA-Website/"
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
            <p className="card-footer-txt"><i>Languages: Python</i></p>
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
            <p className="card-footer-txt"><i>Languages: Python</i></p>
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
            <p className="card-footer-txt"><i>Languages: Java</i></p>
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
            <p className="card-footer-txt"><i>Languages: Java</i></p>
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

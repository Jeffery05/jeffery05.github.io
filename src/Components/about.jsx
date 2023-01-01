import React, { Component } from "react";
import potrait from "./images/JefferyWebPhoto.jpg";
import github from "./images/GitHub.png";
import devpost from "./images/DevPost.jpg";
import dmoj from "./images/Dmoj.png";
import mcpt from "./images/MCPT.png";
import sciencefair from "./images/Jeffery Science Fair.jpg";
import soccer from "./images/Jeffery_Soccer.jpg";
import linkedin from "./images/LinkedIn.png";
import gmail from "./images/Gmail Logo.png";
import softwareDev from "./images/Software Development.svg";
import engineering from "./images/Engineering.svg";
import business from "./images/Business.svg";
import sports from "./images/Sports.svg";
import community from "./images/Community.svg";
import travel from "./images/Travel.svg";
import hackathons from "./images/Hackathons.svg";
import machineLearning from "./images/Machine Learning.svg";
import mandarin from "./images/Mandarin.svg";

export default function About() {
  return (
    <div className="about container">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Cabin&family=Questrial&display=swap"
          rel="stylesheet"
        />
      </head>
      <div className="row gx-5 mb-6 mt-6">
        <div className="col-md-8">
          <h1 className="my-3">
            <b>Hello!</b>
          </h1>
          <p>
            I'm Jeffery, a grade 12 student at William Lyon Mackenzie CI. I have
            a strong interest in software development, engineering, technology
            and business. In the future, I would like to use my technical
            knowledge in STEM and my practical understanding of business to
            solve pressing real-world issues and make a positive impact on the
            world! I love to innovate and learn new things, whether that's
            through developing impactful web application or leading a middle
            school science olympiad. Have a closer look at my passions and goals
            below!
          </p>
        </div>
        <div className="col-md-4 portrait">
          <img src={potrait} alt="Jeffery Hu Potrait" />
        </div>
      </div>

      <div className="row gx-5">
        <h1> Passions</h1>
        <div className="col-md-4 logos">
          <img
            src={softwareDev}
            alt="Software Development"
            width="100%"
            height="100%"
            className="rounded img-fluid"
          />
          <h3>Software Development</h3>
          <p>
            I love the creative nature of building software applications -
            there's no limits to what you can build!
          </p>
        </div>
        <div className="col-md-4 logos">
          <img
            src={engineering}
            alt="Software Development"
            width="100%"
            height="100%"
            className="rounded img-fluid"
          />
          <h3>Engineering</h3>
          <p>
            I am intrigued by the applied nature of engineering and how it uses
            technology and critical thinking to solve large problems.
          </p>
        </div>
        <div className="col-md-4 logos">
          <img
            src={business}
            alt="Software Development"
            width="100%"
            height="100%"
            className="rounded img-fluid"
          />
          <h3>Business</h3>
          <p>
            Whether I persue a start-up or work within a large corporation,
            business knowledge will help me excel in future managerial
            positions.
          </p>
        </div>
      </div>

      <div className="row gx-5 mb-6 mt-6">
        <h1 className="mt-6 my-3">
          <b>Current Goals</b>
        </h1>
        <div className="col-md-4 logos">
          <img
            src={hackathons}
            alt="Software Development"
            width="100%"
            height="100%"
            className="rounded img-fluid"
          />
          <h3>Hackathons</h3>
          <p>
            I would like to attend even more hackathons in the future so I can
            continue to innovate and build impactful projects!
          </p>
        </div>
        <div className="col-md-4 logos">
          <img
            src={machineLearning}
            alt="Software Development"
            width="100%"
            height="100%"
            className="rounded img-fluid"
          />
          <h3>Machine Learning</h3>
          <p>
            I would like to take a deeper dive into machine learning - an
            emerging technology that can revolutionize the way we work, travel,
            and live.
          </p>
        </div>
        <div className="col-md-4 logos">
          <img
            src={mandarin}
            alt="Software Development"
            width="100%"
            s
            height="100%"
            className="rounded img-fluid"
          />
          <h3>Mandarin</h3>
          <p>
            I would like to learn more mandarin to speak to my family and
            friends!
          </p>
        </div>
      </div>

      <div className="row gx-5 mb-6 mt-6">
        <h1 className="mt-6 my-3">
          <b>Other Interests</b>
        </h1>
        <div className="col-md-4 logos">
          <img
            src={sports}
            alt="Software Development"
            width="100%"
            height="100%"
            className="rounded img-fluid"
          />
          <h3>Sports</h3>
          <p>
            I love to exercise and play sports, including soccer, badminton, and
            ultimate frisbee.
          </p>
        </div>
        <div className="col-md-4 logos">
          <img
            src={community}
            alt="Software Development"
            width="100%"
            height="100%"
            className="rounded img-fluid"
          />
          <h3>Community</h3>
          <p>
            In my spare time, I like to volunteer in the community by organizing
            events, working with children, and helping local museums.
          </p>
        </div>
        <div className="col-md-4 logos">
          <img
            src={travel}
            alt="Software Development"
            width="100%"
            height="100%"
            className="rounded img-fluid"
          />
          <h3>Travel</h3>
          <p>I enjoy exploring new places and experiencing new cultures!</p>
        </div>
      </div>

      <div className="row gx-5 mb-6 mt-6">
        <div className="col-md-8">
          <h3 className="p-6">Programming Languages</h3>
          <p>
            <ul>
              <li>Java</li>

              <li>JavaScript</li>

              <li>Processing</li>
              <li>HTML/CSS</li>
              <li>C++</li>
            </ul>
          </p>
        </div>
        <div className="col-md-4 findme">
          <h2 className="mb-2">Find Me</h2>
          <p>
            <a
              href="https://www.linkedin.com/in/jeffery-hu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                alt="LinkedIn Logo"
                className="rounded img-fluid"
              />
            </a>
            <a href="Contact.html" target="_blank" rel="noopener noreferrer">
              <img src={gmail} alt="Gmail Logo" className="rounded img-fluid" />
            </a>
            <a
              href="https://github.com/Jeffery05"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github}
                alt="Github Logo"
                className="rounded img-fluid"
              />
            </a>
            <a
              href="https://devpost.com/jeffery-hu?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={devpost}
                alt="DevPost Logo"
                width="100%"
                height="100%"
                className="rounded img-fluid"
              />
            </a>
            <a
              href="https://dmoj.ca/user/FalconX"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={dmoj}
                alt="Dmoj Logo"
                width="100%"
                height="100%"
                className="rounded img-fluid"
              />
            </a>
            <a
              href="https://mcpt.ca/user/FalconX"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={mcpt}
                alt="MCPT Logo"
                width="100%"
                height="100%"
                className="rounded img-fluid"
              />
            </a>
          </p>
        </div>
      </div>
      <hr />
      <footer>
        <p>© 2023 - Jeffery Hu</p>
      </footer>
    </div>
  );
}
/*
          
          */

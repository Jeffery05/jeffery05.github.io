import React, { Component } from "react";
import potrait from "./images/JefferyWebPhoto.jpg";
import github from "./images/GitHub.png";
import devpost from "./images/DevPost.jpg";
import dmoj from "./images/Dmoj.png";
import mcpt from "./images/MCPT.png";
import linkedin from "./images/LinkedIn.png";
import gmail from "./images/Gmail Logo.png";
import softwareDev from "./images/Software Development.svg";
import business from "./images/Business.svg";
import sports from "./images/Sports.svg";
import community from "./images/Community.svg";
import travel from "./images/Travel.svg";
import hackathons from "./images/Hackathons.svg";
import machineLearning from "./images/Machine Learning.svg";
import mandarin from "./images/Mandarin.svg";
import movie from "./images/Movie.png";

export default function About() {
  return (
    <div className="about container">
      <div className="row gx-5 about-hello">
        <div className="col-md-8">
          <h1 className="my-3">
            <b>Hello!</b>
          </h1>
          <p>
            I'm Jeffery, a CS/BBA student at the University of Waterloo. I have
            a strong interest in software development, financial markets and entrepreneurship.
            During my free time, I like to create impactful projects for hackathons, present innovative solutions in case competitions and participate in sports.
            Regardless of the setting, I am consistently driven to innovate, embrace new challenges and develop my skills to make the world a better place!
          </p>
        </div>
        <div className="col-md-4 portrait">
          <img src={potrait} alt="Jeffery Hu Potrait" />
        </div>
      </div>

      <div className="row gx-5">
        <h1> Passions</h1>
        <div className="col-md-4 icon-card">
          <div className="abt-icon">
          <img
            src={softwareDev}
            alt="Software Development"
           
            className=" img-fluid"
          /></div>
          <h3>Software Development</h3>
          <p>
            I love the creative nature of building software applications where advancements in technology can be applied to limitless fields.
          </p>
        </div>
        <div className="col-md-4 icon-card">
          <div className="abt-icon">
          <img
            src={business}
            alt="Business"
           
            className=" img-fluid"
          /></div>
          <h3>Financial Markets</h3>
          <p>
            I am intrigued by the financial system and how current events, businesses and central banks shape our economy today.
          </p>
        </div>
        <div className="col-md-4 icon-card">
          <div className="abt-icon">
          <img
            src={community}
            alt="Community Building"
           
            className=" img-fluid"
          /></div>
          <h3>Community Building</h3>
          <p>
            I am passionate about giving back to the community, whether through organizing events, mentoring others or supporting charities. 
          </p>
        </div>
      </div>

      <div className="row gx-5 mb-6 mt-6">
        <h1>
          <b>Current Interests</b>
        </h1>
        <div className="col-md-4 icon-card">
          <div className="abt-icon">
          <img
            src={machineLearning}
            alt="Machine Learning"
           
            className=" img-fluid"
          /></div>
          <h3>Generative AI</h3>
          <p>
            I would like to take a deeper dive into Generative AI, which has the potential to revolutionize the way we work, travel, and live.
          </p>
        </div>
        <div className="col-md-4 icon-card">
          <div className="abt-icon">
          <img
            src={hackathons}
            alt="Quantitative Trading"
           
            className=" img-fluid"
          /></div>
          <h3>Quantitative Trading</h3>
          <p>
          I am eager to learn more about quantitative trading, exploring algorithms and financial indicators to formulate trade strategies.
          </p>
        </div>
        <div className="col-md-4 icon-card">
          <div className="abt-icon">
          <img
            src={mandarin}
            alt="Mandarin"

            className=" img-fluid"
          /></div>
          <h3>Mandarin</h3>
          <p>
            I would like to learn more mandarin to speak to my family and
            friends!
          </p>
        </div>
      </div>

      <div className="row gx-5 mb-6 mt-6">
        <h1>
          <b>Other Interests</b>
        </h1>
        <div className="col-md-4 icon-card">
          <div className="abt-icon">
          <img
            src={sports}
            alt="Sports"
           
            className=" img-fluid"
          /></div>
          <h3>Sports</h3>
          <p>
            I love to exercise and play sports, including soccer, badminton, and
            ultimate frisbee.
          </p>
        </div>
        <div className="col-md-4 icon-card">
          <div className="abt-icon">
          <img
            src={movie}
            alt="Movie"
           
            className=" img-fluid"
          /></div>
          <h3>Movies</h3>
          <p>
            I enjoy watching movies with friends, with some of my favourites being the Hunger Games series and Oppenheimer.
          </p>
        </div>
        <div className="col-md-4 icon-card">
          <div className="abt-icon">
          <img
            src={travel}
            alt="Travel"
            className=" img-fluid"
          /></div>
          <h3>Travel</h3>
          <p>I enjoy exploring new places and experiencing new cultures!</p>
        </div>
      </div>

      <div className="row gx-5 mb-6 mt-6">
        <div className="col-md-6">
          <h3 className="p-6"><b>Programming Languages:</b></h3>
          <p>
            <ul>
              <li>Python</li>
              <li>Java</li>
              <li>JavaScript/TypeScript</li>
              <li>HTML/CSS</li>
              <li>SQL</li>
              <li>C/C++</li>
            </ul>
          </p>
        </div>
        <div className="col-md-6 findme">
          <h3 className="mb-2"><b>Find Me:</b></h3>
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
            <a href="mailto:jefferyhu8@gmail.com" target="_blank" rel="noopener noreferrer">
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
        <p>© 2024 - Jeffery Hu</p>
      </footer>
    </div>
  );
}
/*
          
          */

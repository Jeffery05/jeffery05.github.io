import React, { Component } from "react";
import mscLogo from "./images/MSC Logo.png";
import decaLogo from "./images/DECA Logo.png";
import modelUN from "./images/Model UN Logo.png";
import SMS from "./images/SoM-Logo.png";
import metro from "./images/MacLyonsDen.png";
import resume from "./images/Jeffery Hu_Resume.pdf";

export default function Achievements() {
  return (
    <div className="container body-content">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Cabin&family=Questrial&display=swap"
          rel="stylesheet"
        />
      </head>
      <div className="row mb-1">
        <h1>
          <b>Experience:</b>
        </h1>
      </div>
      <div className="row gx-4 mb-3">
        <div className="col-md-3 ps-3">
          <a
            href="https://sites.google.com/site/mackenziescienceclub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={mscLogo}
              alt="Mackenzie Science Club Logo"
              width="80%"
              height="80%"
              className="rounded img-fluid"
            />
          </a>
        </div>
        <div className="col-md-9">
          <p>
            <b>President - Mackenzie Science Club</b>
          </p>
          <p>June 2022-June 2023</p>
          <hr />
          <ul>
            <li>
              Organize and coordinate 30+ weekly interactive STEM events a year
              for 200+ members
            </li>
            <li>
              Host and manage an annual Science and Engineering Olympiad for 20+
              middle schools and 700+ participants in total
            </li>
            <li>Lead monthly executive meetings </li>
            <li>Mentor event designers in developing events</li>
            <li>Previously served as Co-Vice President and Event Designer</li>
          </ul>
        </div>
      </div>
      <div className="row gx-4 mb-3">
        <div className="col-md-3 ps-3">
          <a href="decamackenzie.ca" target="_blank" rel="noopener noreferrer">
            <img
              src={decaLogo}
              alt="DECA Mackenzie Logo"
              width="100%"
              height="100%"
              className="rounded img-fluid"
            />
          </a>
        </div>
        <div className="col-md-9">
          <p>
            <b>President - DECA Mackenzie</b>
          </p>
          <p>June 2022-June 2023</p>
          <hr />
          <ul>
            <li>
              DECA is a business case competition where students compete in
              different events.
            </li>
            <li>
              Lead 10 other executives to help train 60+ members in preparation
              for the competition.
            </li>
            <li>
              Run weekly training sessions and organize chapter-wide events.
            </li>
            <li>
              57 out of 62 members qualified for DECA provincials this year.
            </li>
            <li>Previously served as trainer for 2 years.</li>
          </ul>
        </div>
      </div>
      <div className="row gx-4 mb-3">
        <div className="col-md-3 ps-3">
          <img
            src={SMS}
            alt="Spirit of Math Logo"
            width="100%"
            height="100%"
            className="rounded img-fluid"
          />
        </div>
        <div className="col-md-9">
          <p>
            <b>Assistant Teacher - Spirit of Math Schools</b>
          </p>
          <p>September 2019-June 2023</p>
          <hr />
          <ul>
            <li>
              Lead discussions and engage with students to teach them advanced
              math concepts during weekly Spirit of Math classes.
            </li>
            <li>Complete administrative tasks such as calling parents. </li>
          </ul>
        </div>
      </div>

      <div className="row gx-4 mb-3">
        <div className="col-md-3 ps-3">
          <a href="maclyonsden.com" target="_blank" rel="noopener noreferrer">
            <img
              src={metro}
              alt="Mac Lyons Den Logo"
              width="70%"
              height="70%"
              className="rounded img-fluid"
            />
          </a>
        </div>
        <div className="col-md-9">
          <p>
            <b>Front-End Developer - Project Metropolis</b>
          </p>
          <p>August 2022-June 2023</p>
          <hr />
          <ul>
            <li>
              Collaborate with other developers to build the school website.
            </li>
            <li>
              Created the user interface for club executives to submit
              announcements.
            </li>
          </ul>
        </div>
      </div>

      <div className="row gx-4 mb-3">
        <div className="col-md-3 ps-3">
          <img
            src={modelUN}
            alt="Model UN Logo"
            width="70%"
            height="70%"
            className="rounded img-fluid"
          />
        </div>
        <div className="col-md-9">
          <p>
            <b>Executive - Mackenzie Model UN</b>
          </p>
          <p>June 2022-June 2023</p>
          <hr />
          <ul>
            <li>
              Train 50+ members in preparation for Model United Nations
              Conferences.
            </li>
            <li>
              Develop and teach lessons about international relations related to
              the competition.
            </li>
          </ul>
        </div>
      </div>
      <hr />

      <div className="row mb-1">
        <h1>
          <b>Resume</b>
        </h1>
        <iframe src={resume} width="100%" height="1000px"></iframe>
      </div>
      <hr />
      <footer>
        <p>© 2023 - Jeffery Hu</p>
      </footer>
    </div>
  );
}

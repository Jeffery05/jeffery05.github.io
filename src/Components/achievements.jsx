import React, { Component } from "react";
import mscLogo from "./images/MSC Logo.png";
import decaLogo from "./images/DECA Logo.png";
import modelUN from "./images/Model UN Logo.png";
import SMS from "./images/SoM-Logo.png";
import metro from "./images/MacLyonsDen.png";
import LCT from "./images/LCT Logo.png";
import CSC from "./images/CSC Logo.jpg";
import Blueprint from "./images/New UW Blueprint Logo.jpg";
import OSFI from "./images/OSFI Logo.png";

export default function Achievements() {
  return (
    <div className="container body-content achieve">
      <div className="row mb-3">
        <h1>
          <b>Work Experience:</b>
        </h1>
        <p>Over the past several years, I have had the privilege of serving in diverse roles, from developing software for non-profits to helping safeguard Canada's financial system.
          Have a look at some of my previous and current positions below!
        </p>
      </div>
      <div className="row gx-4 mb-3">
        <div className="col-md-3 ps-3">
          <a
            href="https://www.osfi-bsif.gc.ca/en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={OSFI}
              alt="OSFI" width="100%" height="1000px" className="rounded img-fluid"
            />
          </a>
        </div>
        <div className="col-md-9">
            <h3><b>Data Scientist - Office of the Superintendent of Financial Institutions</b></h3>
          <p>May 2024 - August 2024</p>
          <hr />
          <ul>
            <li>
            Developed a Power BI dashboard to monitor the average risk ratings for 400+ financial institutions across OSFI's 24 risk 
categories, which is utilized by senior management in presentations to the Minister of Finance and boards of directors
            </li>
            <li>
            Optimized data processing by utilizing Python (PySpark), SQL and Excel to reduce the calculation time of 4,000+ key 
risk indicator calculations by 60%, saving supervisors hundreds of hours of time collectively
            </li>
            <li>
            Developed and documented an internal system support application utilized by 400+ supervisors to receive deadline 
reminders and direct assistance for system-related issues, leveraging Power Apps and Power Automate
            </li>
            <li>
            Built pipelines in Microsoft Azure Synapse to automate daily data retrieval, script execution and SQL database refresh
            </li>
          </ul>
        </div>
      </div>
      <div className="row gx-4 mb-3">
        <div className="col-md-3 ps-3">
          <a
            href="https://uwblueprint.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Blueprint}
              alt="UW Blueprint Logo" width="100%" height="1000px" className="rounded img-fluid"
            />
          </a>
        </div>
        <div className="col-md-9">
            <h3><b>Software Developer - University of Waterloo Blueprint</b></h3>
          <p>May 2024 - Present</p>
          <hr />
          <ul>
            <li>
            Collaborated with a team of 8 developers to build a full-stack web application for Extend-A-Family, a Waterloo non-profit, 
to deliver customizable financial literacy courses directly to 1,706 youth with developmental disabilities
            </li>
            <li>
            Implemented complex relationships between courses, elements and users in a MongoDB database using Mongoose
            </li>
            <li>
            Developed backend REST API endpoints using Express.js to manage user authentication, course content retrieval and 
            progress tracking, ensuring secure and efficient data handling across the application
            </li>
            <li>
            Created interactive welcome and login pages utilizing React.js and integrated Google Firebase for user authentication
            </li>
            <li>
            Utilized GitHub, Docker and Agile methodologies to streamline development, version control and timely feature delivery
            </li>
          </ul>
        </div>
      </div>
      <div className="row gx-4 mb-3">
        <div className="col-md-3 ps-3">
          <a
            href="https://csclub.uwaterloo.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={CSC}
              alt="Computer Science Club Logo" width="100%" height="1000px"     className="rounded img-fluid"
            />
          </a>
        </div>
        <div className="col-md-9">
            <h3><b>Software Developer - Computer Science Club</b></h3>
          <p>May 2024 - Present</p>
          <hr />
          <ul>
            <li>
            Enhanced the Computer Science Club website for 4,000+ members using React.js by adding announcement features, 
improving interactivity and upgrading site styling
            </li>
            <li>
            Designed PostgreSQL database schemas with Prisma for a book management app to track the club’s 200+ books
            </li>
            <li>
            Constructed backend REST API endpoints in Next.js for book sign-in/out, alerts and catalog management
            </li>
          </ul>
        </div>
      </div>
      <div className="row gx-4 mb-3">
        <div className="col-md-3 ps-3">
          <a
            href="https://www.linkedin.com/company/laurier-case-competition-team/mycompany/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={LCT}
              alt="Laurier Case Team Logo" width="100%" height="1000px"     className="rounded img-fluid"
            />
          </a>
        </div>
        <div className="col-md-9">
            <h3><b>Competitor - Laurier Case Team</b></h3>
          <p>September 2023 - Present</p>
          <hr />
          <ul>
          <li>
            Selected to represent Wilfrid Laurier University at JDCC, Canada’s largest undergraduate case competition
            </li>
            <li>
            Applied analytical and critical thinking skills to dissect business case studies, research industry trends and present compelling solutions to a judge panel on a weekly basis
            </li>
            <li>
              Utilized Excel to perform financial analysis to justify the viability of recommendations
            </li>
            <li>
              Collaborated with faculty, sponsors, and fellow executives to secure funding, speakers, and resources for the Laurier 
              Interactive Case Summit, a case competition involving 100+ students, 5 universities and $7000 in prizes from Deloitte
            </li>
          </ul>
        </div>
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
              alt="Mackenzie Science Club Logo"width="100%" height="1000px"     className="rounded img-fluid"
            />
          </a>
        </div>
        <div className="col-md-9">
            <h3><b>President - Mackenzie Science Club</b></h3>
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
          <a href="https://jefferyhu.me/DECA-Website/" target="_blank" rel="noopener noreferrer">
            <img
              src={decaLogo}
              alt="DECA Mackenzie Logo"width="100%" height="1000px"     className="rounded img-fluid"
            />
          </a>
        </div>
        <div className="col-md-9">
          <h3>
            <b>President - DECA Mackenzie</b>
          </h3>
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
          <a href="https://maclyonsden.com/" target="_blank" rel="noopener noreferrer">
            <img
              src={metro}
              alt="Mac Lyons Den Logo"width="100%" height="1000px"     className="rounded img-fluid"
            />
          </a>
        </div>
        <div className="col-md-9">
          <h3>
            <b>Front-End Developer - Project Metropolis</b>
          </h3>
          <p>August 2022-June 2023</p>
          <hr />
          <ul>
            <li>
            	Implemented a Rich Text Editor and announcement creation interface in React.js, enabling executives from 60+ clubs to post announcements on William Lyon Mackenzie CI’s official website.
            </li>
            <li>
              Designed a user-friendly announcement viewing page for 600+ students, enhancing announcement accessibility and increasing platform users by 20%.
            </li>
            <li>
              Utilized Agile principles to collaborate with other developers and deliver new features on time.
            </li>
          </ul>
        </div>
      </div>

      <div className="row gx-4 mb-3">
        <div className="col-md-3 ps-3">
          <img
            src={SMS}
            alt="Spirit of Math Logo"width="100%" height="1000px"   className="rounded img-fluid"
          />
        </div>
        <div className="col-md-9">
          <h3>
            <b>Assistant Teacher - Spirit of Math Schools</b>
          </h3>
          <p>September 2019-June 2023</p>
          <hr />
          <ul>
            <li>
              Tutor and mentor 20+ middle school students to teach them advanced
              math concepts.
            </li>
            <li>
              Lead class discussions and engage with students during group work time.
            </li>
            <li>Complete administrative tasks such as calling parents and inputting marks. </li>
          </ul>
        </div>
      </div>

      <div className="row gx-4 mb-3 mt-5">
        <div className="col-md-3 ps-3">
          <img
            src={modelUN}
            alt="Model UN Logo"width="100%" height="1000px"   className="rounded img-fluid"
          />
        </div>
        <div className="col-md-9">
          <h3>
            <b>Executive - Mackenzie Model UN</b>
          </h3>
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
            <li>
              Previously served as a member for 2 years.
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <footer>
        <p>© 2024 - Jeffery Hu</p>
      </footer>
    </div>
  );
}

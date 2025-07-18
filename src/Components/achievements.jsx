import React, { Component } from "react";
import FARMSA from "./images/UW_FARMSA.png";
import CSC from "./images/CSC Logo.jpg";
import LCT from "./images/LCT Logo.png";
import UW from "./images/UW_Logo.png";
import Blueprint from "./images/New UW Blueprint Logo.jpg";
import OSFI from "./images/OSFI Logo.png";
import OTPP from "./images/OTPP.png";

export default function Achievements() {
  return (
    <div className="container body-content achieve">
      <div className="row mb-3">
        <h1>
          <b>Work Experience:</b>
        </h1>
        <p>Over the past few years, I’ve worked at the intersection of technology and finance—refining execution strategies in quantitative trading, building software for non-profits, and researching machine learning-based signals in decentralized finance. Below are some of the roles where I’ve had the opportunity to apply and develop these skills:
        </p>
      </div>
      <div className="row gx-4 mb-3">
        <div className="col-md-3 ps-3">
          <a
            href="https://www.otpp.com/en-ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={OTPP}
              alt="OTPP" width="100%" height="1000px" className="rounded img-fluid"
            />
          </a>
        </div>
        <div className="col-md-9">
            <h3><b>Trading Intern - Ontario Teachers’ Pension Plan</b></h3>
          <p>January 2025 - April 2025</p>
          <hr />
          <ul>
            <li>
            Developed tools supporting the equities, FX, commodities, credit, rates and repo desks, facilitating $3T+ in annual trades
            </li>
            <li>
            Optimized execution strategies for the Quantitative Strategy Research portfolio by modeling volume and volatility curves in Pandas and NumPy to evaluate slippage and market impact, identifying $1.1M+ in projected cost savings
            </li>
            <li>
            Placed 1st out of 40+ teams in OTPP’s internal hackathon by developing an agentic AI assistant integrated with the trading blotter that interprets trader intent and intelligently runs internal tools like performing transaction cost analysis (TCA), displaying dealer commentary and querying historical pricing via MS Teams chat
            </li>
            <li>
            Built a multi-leg OTC options pricer using Black-Scholes, streamlining the execution of $50M+ vega in trades
            </li>
            <li>
            Automated credit derivatives pricing by parsing Bloomberg dealer email runs with Python and visualizing CDX Option, tranche, and TRS quotes in a Power BI dashboard for credit traders
            </li>
          </ul>
        </div>
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
            <h3><b>Data Analyst Intern - Office of the Superintendent of Financial Institutions</b></h3>
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
            href="https://cs.uwaterloo.ca/current-undergraduate-students/research-opportunities/ura"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={UW}
              alt="University of Waterloo Logo"width="100%" height="1000px" className="rounded img-fluid"
            />
          </a>
        </div>
        <div className="col-md-9">
            <h3><b>Undergraduate Research Assistant - University of Waterloo</b></h3>
          <p>May 2025 - August 2025</p>
          <hr />
          <ul>
            <li>
              Researching alpha-driven crypto trading strategies using machine learning (ML) under Professor Raouf Boutaba, Director of the Cheriton School of Computer Science
            </li>
            <li>
              Leveraging XGBoost, a supervised ML model based on gradient-boosted trees, to process on-chain metrics and whale-alert tweets and identify short-term trading opportunities driven by large wallet activity
            </li>
            <li>Translating complex academic papers into practical ML strategies for volatility forecasting and crypto signal development</li>
          </ul>
        </div>
      </div>
      <div className="row gx-4 mb-3">
        <div className="col-md-3 ps-3">
          <a>
            <img
              src={FARMSA}
              alt="DECA Mackenzie Logo"width="100%" height="1000px"     className="rounded img-fluid"
            />
          </a>
        </div>
        <div className="col-md-9">
          <h3>
            <b>Vice President of Quantitative Trading - UW FARMSA</b>
          </h3>
          <p>June 2022-June 2023</p>
          <hr />
          <ul>
            <li>
              Leading a team of 10 analysts to build a vega-neutral dispersion trading algorithm exploiting correlation mispricing
            </li>
            <li>
              Developing trading signals, structuring multi-leg options strategies and guiding analysts in back testing and PnL modeling
            </li>
            <li>
              Managing team workflows and delivering presentations on volatility surfaces, straddles and correlation dynamics
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
            <h3><b>International Team Competitor - Laurier Case Team</b></h3>
          <p>September 2023 - Present</p>
          <hr />
          <ul>
          <li>
          Competed at BBICC (Belgrade) and selected to compete in ROCA (Rotterdam), two of the world’s top 10 most prestigious undergraduate case competitions
            </li>
            <li>
            Placed first in the Digital Strategy category at JDCC (1/9 universities), Canada’s largest undergraduate case competition
            </li>
            <li>
            Delivered real-time strategic decisions under 5-hour time constraints by analyzing market, financial, and operational data
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
          <p>May 2024 - December 2024</p>
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

    
      <hr />
      <footer>
        <p>© 2025 - Jeffery Hu</p>
      </footer>
    </div>
  );
}

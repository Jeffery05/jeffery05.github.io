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
          I'm Jeffery, a grade 12 student in the MaCS program at William Lyon Mackenzie CI. My interests include programming, engineering, business, math, and science. In the future, I would like to use my technical knowledge in STEM and my practical understanding of business to solve pressing real-world issues and make a positive impact on the world! I love to innovate and learn new things, whether that's through developing a web application for an issue I care deeply about or leading a middle school science olympiad. Have a closer look at my passions and goals below!
          </p>
        </div>
        <div className="col-md-4 portrait">
          <img src={potrait} alt="Jeffery Hu Potrait" />
        </div>
      </div>

      <div className="row gx-5">
        <div className="col-md-4 logos">
          <a
            href="https://github.com/Jeffery05"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={github}
              alt="GitHub Logo"
              width="100%"
              height="100%"
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
        </div>
        <div className="col-md-8">
          <h3 className="my-3">
            <b>Passion for Coding</b>
          </h3>
          <p>
            Ever since grade 6, I have been passionate about coding. I remember
            learning my first programming language, JavaScript, through watching
            countless Khan Academy videos on if/else statements, loops,
            functions, and much more. It amazes me how much you can do with a
            few lines of code. Since then, I have remained passionate and active
            in computer programming. In high school, I enrolled in a specialized
            math, science, and computer science program called MaCS. As a part
            of the MaCS program, I was able to take extra enriched computer
            science courses. Outside of school, I have stayed involved in
            computer programming by attending many competitive coding
            competitions, being an active member of my school’s computer
            programming team, and working on personal projects (like this one!).
            I am especially excited about the applications of coding, and how it
            can be applied in different fields such as business, finance, and
            engineering. In the future, I plan to take part in more hackathons
            and keep working on personal projects that I am passionate about
            (e.g. right now I am working on an application to help my parents
            keep track of their stock investments and their performance
            statistics!).
          </p>
        </div>
      </div>

      <div className="row gx-5 mb-6 mt-6">
        <div className="col-md-8">
          <h3 className="mt-6 my-3">
            <b>Love of STEM</b>
          </h3>
          <p>
            In addition to computer programming, I am also very passionate about
            science, engineering, and mathematics. I especially enjoy how these
            subjects can help explain everything that’s happening around me,
            from gravity to micro-bacteria. I particularly enjoy engineering, as
            it takes science concepts and applies them for everyday use. In
            addition to studying and taking enriched courses in these fields, I
            also try to give back to the community by getting involved in school
            clubs. As the President of Mackenzie Science Club, I help coordinate
            and lead weekly STEM-based events for over 200 members. During the
            spring, we also hold the Mackenzie Science and Engineering Olympics,
            which draws over 700 middle school students from across Ontario.
            Overall, taking part in Mackenzie Science Club has allowed me to
            express my passion for STEM while also giving back and getting the
            next generation engaged!
          </p>
        </div>
        <div className="col-md-4 mb-3">
          <img
            src={sciencefair}
            alt="Jeffery Hu Science Fair"
            width="100%"
            height="100%"
            className="rounded img-fluid"
          />
        </div>
      </div>

      <div className="row gx-5 mb-6 mt-6">
        <div className="col-md-4">
          <img
            src={soccer}
            alt="Jeffery Hu Soccer Team"
            width="100%"
            height="100%"
            className="rounded img-fluid"
          />
        </div>
        <div className="col-md-8 ml-3">
          <h3 className="p-8 mt-6 my-3">
            <b>Interest in Other Extra-Curriculars</b>
          </h3>
          <p>
            I am also very intrigued by finance and economics. Recently, I have
            become very interested in using coding to help track business
            growth. As a member and now Co-President of my school’s DECA chapter
            (a business club), I have been able to soak up a lot of business
            knowledge that I want to use with my other skills to solve
            real-world problems. Finally, in my free time, I love to get outside
            with friends and play sports. My favourites include soccer,
            badminton, and ultimate frisbee. I always enjoy the teamwork and
            collaboration involved in these activities and the friendships they
            help to foster!
          </p>
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
          </p>
        </div>
      </div>
      <hr />
      <footer>
        <p>© 2022 - Jeffery Hu</p>
      </footer>
    </div>
  );
}

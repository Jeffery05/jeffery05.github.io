import React, { Component } from "react";
import potrait from "./images/JefferyWebPhoto.jpg"

export default function Home() {
  return (
    <div className="home">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/><link href="https://fonts.googleapis.com/css2?family=Cabin&family=Questrial&display=swap" rel="stylesheet"/>
      </head>
        <div className="container">
          <row>
            <h1 className="h1-Welcome">
              <strong>JEFFERY HU</strong>
            </h1>
          </row>
          <row>
            <h3>I am a 
            <div className="slider">
              <div className="slider-t1">Leader</div>
              <div className="slider-t2">Problem Solver</div>
              <div className="slider-t2">Lifelong Learner</div>
              <div className="slider-t2">Risktaker</div>
              <div className="slider-t2">Teammate</div>
            </div></h3>
          </row>
        </div>
      <div className="row home-bg">
        <div className="col-md-8">
          <div className="m-5">
          <h1 className="text-align: center; margin-bottom: 2%;">
            Hello, I'm Jeffery!
          </h1>
          <p>
            I am currently a grade 12 student in the
            MaCS program (Math and Computer, Science program) at William Lyon
            Mackenzie CI. Feel free to explore around my website! (I built it myself using React.js and HTML/CSS!) It features more about myself, my achievements, and my past coding projects.
          </p>
        </div>
        </div>
        <div className="col-md-4 portrait"><img src={potrait} alt="Jeffery Hu Potrait" /></div>
        {/* <img className="col-md-4 img-fluid" src={potrait} alt="Jeffery Hu Potrait" /> */}
      </div>
    </div>
  );
}

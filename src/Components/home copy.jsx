import React, { Component } from "react";
import potrait from "./images/JefferyWebPhoto.jpg"

export default function Home() {
  return (
    <div>
      <div className="container-fluid jumbotron jumbotron-welcome py-5">
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
      </div>
      <div className="row home-bg">
        <div className="col-md-8">
          <div className="m-5">
          <h1 className="text-align: center; margin-bottom: 2%;">
            Hi there! Welcome to my website!
          </h1>
          <p>
            My name is Jeffery Hu and I am currently a grade 12 student in the
            MaCS program (Math and Computer Science program) at William Lyon
            Mackenzie CI. Feel free to take a look around my website that I
            built using HTML, CSS, and JavaScript! It features some of my past
            coding projects, achievements, and a little bit more about myself.
          </p>
        </div>
        </div>
        <img className="col-md-4 img-fluid" src={potrait} alt="Jeffery Hu Potrait" />
      </div>
    </div>
  );
}

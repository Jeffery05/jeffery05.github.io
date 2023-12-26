import React, { Component } from "react";
import potrait from "./images/JefferyWebPhoto.jpg"

export default function Home() {
  return (
    <div className="home">
        <div className="container">
          <row>
            <h1 className="h1-Welcome">
              <strong>JEFFERY HU</strong>
            </h1>
          </row>
          <row>
            <h3><b>I am a 
            <div className="slider">
              <div className="slider-t1">Risk-Taker</div>
              <div className="slider-t2">Problem Solver</div>
              <div className="slider-t3">Innovator</div>
              <div className="slider-t4">Teammate</div>
              <div className="slider-t5">Leader</div> 
            </div></b></h3>
          </row>
        </div>
      <div className="row home-bg">
        <div className="col-md-8">
          <div className="m-5">
          <h1 className="text-align: center; margin-bottom: 2%;">
            Hello, I'm Jeffery!
          </h1>
          <p>
          Currently, I am pursuing a double degree in Computer Science at the University of Waterloo and Business Administration at Wilfrid Laurier University. In the future, I aim to leverge my passion in both fields to build innovative products that solve pressing issues! <br /><br />Feel free to explore around my website (I built it myself using React.js). It features more about myself, my experiences, and my past coding projects!
          </p>
        </div>
        </div>
        <div className="col-md-4 portrait"><img src={potrait} alt="Jeffery Hu Potrait" /></div>
        {/* <img className="col-md-4 img-fluid" src={potrait} alt="Jeffery Hu Potrait" /> */}
      </div>
    </div>
  );
}

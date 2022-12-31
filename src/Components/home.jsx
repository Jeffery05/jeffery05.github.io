import React, { Component } from "react";
export default function Home() {
  return (
    <div className="container-fluid jumbotron jumbotron-welcome py-5">
      <div className="container">
        <row>
          <h1 className="h1-Welcome"><strong>JEFFERY HU</strong></h1>
        </row>
        <row>
          <h3>I am a </h3>
            <div class="slider">
              <div class="slider-t1">Leader</div>
              <div class="slider-t2">Problem Solver</div>
              <div class="slider-t2">Lifelong Learner</div>
              <div class="slider-t2">Risktaker</div>
              <div class="slider-t2">Teammate</div>
            </div>
        </row>
      </div>
    </div>
  );
}

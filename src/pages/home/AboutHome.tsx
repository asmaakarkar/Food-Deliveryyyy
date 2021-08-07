import React from "react";
import about from "./about.png";

function About() {
  return (
    <div id="about">
      <div className="about-text">
        <h1>UPCOMING EVENT</h1>
        <p>
          He parked the car at the restaurant and turned to her. ... At six
          o'clock we pulled off the highway and found a family style restaurant
          in a small Maryland town.
        </p>
        <button> Read More</button>
      </div>
      <div className="about-image">
        <img src={about} alt="" />
      </div>
    </div>
  );
}

export default About;

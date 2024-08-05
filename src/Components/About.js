import React from "react";
import Team from "../Assets/about.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Team} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
        At Squad of Creators (SoC), we are a team of passionate innovators and creative problem solvers dedicated to turning your visionary ideas into reality.
        </p>

        <h4 className="about-text-title">Why Choose SoC?</h4>

        <SolutionStep
          title="Expertise"
          description="Our team consists of seasoned professionals with diverse backgrounds in technology and design."
        />

        <SolutionStep
          title="Innovation"
          description="We stay at the forefront of industry trends, using the latest tools and techniques to deliver cutting-edge solutions."
        />

        <SolutionStep
          title="Quality"
          description="We are committed to delivering high-quality services that exceed expectations and provide real value."
        />
      </div>
    </div>
  );
}

export default About;

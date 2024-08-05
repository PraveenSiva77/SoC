import React from "react";
import InformationCard from "./InformationCard";
import { faRobot,faDisplay, faChartLine } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Services.css";

import Services_Comp from "./Services_Comp";

function Services() {
  return (
    <Services_Comp/>

    // <div className="info-section" id="services">
    //   <div className="info-title-content">
    //     <h3 className="info-title">
    //       <span>What We Do</span>
    //     </h3>
    //     <p className="info-description">
    //     we specialize in delivering innovative and impactful digital solutions that drive business growth and enhance user experiences. 
    //     Our expertise spans across a variety of fields, 
    //     allowing us to offer a comprehensive suite of services designed to meet your unique needs.
    //     </p>
    //   </div>

    //   <div className="info-cards-content">
    //     <InformationCard
    //       title="AI Solutions"
    //       description="Harness the power of Artificial Intelligence with our cutting-edge AI solutions. 
    //       We create intelligent systems that can analyze data, make predictions, 
    //       and automate tasks to enhance decision-making and operational efficiency."
    //       icon={faRobot}
    //     />

    //     <InformationCard
    //       title="Web Development"
    //       description="We build dynamic, user-friendly websites that are both visually appealing and highly functional. 
    //       From custom-built solutions to responsive designs, 
    //       we ensure your online presence stands out and performs seamlessly."
    //       icon={faDisplay}
    //     />

    //     <InformationCard
    //       title="Data Analysis"
    //       description="Our data analysis services help you uncover trends, patterns, and insights from your data. 
    //       We provide comprehensive reports and actionable recommendations to optimize your business processes."
    //       icon={faChartLine}
    //     />
        
    //   </div>
    // </div>
  );
}

export default Services;

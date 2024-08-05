import React from "react";
import InformationCard from "../InformationCard";
import { faRobot,faDisplay, faChartLine } from "@fortawesome/free-solid-svg-icons";

import "./Services.css";
import ServiceCard from "./ServiceCard";

function Services() {

  const servicesData = [
    {
      icon: 'network',
      title: 'AI Solution',
      description: 'We deliver custom AI solutions to automate processes, enhance decision-making.',
    },
    {
      icon: 'website',
      title: 'Web Development',
      description: 'We create responsive, user-friendly websites tailored to your business needs.',
    },
    {
      icon: 'analytics',
      title: 'Data Analysis',
      description: 'We provide data analysis to uncover insights, trends, and patterns that drive informed decision-making.',
    },
    {
      icon: 'design',
      title: 'UI Designing',
      description: 'We craft intuitive and visually appealing user interfaces for an engaging user experience.',
    },
  ];


  return (
    <section id="services" className="container container__services">
      <div className="services__servicesComp">
        <div>
          <h1>Our Services For Technology You Need</h1>
          <button className="btn btn-primary">Load More</button>
        </div>

        <div className="services_base">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
            />
          ))}
        </div>
      </div>
    </section>


   
  );
}

export default Services;

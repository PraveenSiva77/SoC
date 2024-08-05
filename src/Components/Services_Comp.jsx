import React from 'react'
import { SiMaterialdesignicons } from "react-icons/si";
import { BiSolidNetworkChart } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import { TbDeviceAnalytics } from "react-icons/tb";
    
import "../Styles/Services_Comp.css";

function Services_Comp() {
  return (
    <section id="services" className="container container__services">
        <div className="services__servicesComp">
            <div>
                <h1>Our Servcices For Technology You Need</h1>
                <button className="btn btn-primary">Load More</button>
            </div>

            <div className='services_base'>
                <div>
                    <div className="icon">
                    <BiSolidNetworkChart />
                    </div>
                    <h4>AI Solution</h4>
                    <p> We deliver custom AI solutions to automate processes, enhance decision-making.</p>
                </div>
                <div>
                    <div className="icon">
                    <CgWebsite />
                    </div>
                    <h4>Web Development</h4>
                    <p>We create responsive, user-friendly websites tailored to your business needs.</p>
                </div>
                <div>
                    <div className="icon">
                    <TbDeviceAnalytics />
                    </div>
                    <h4>Data Analysis</h4>
                    <p>We provide data analysis to uncover insights, trends, and patterns that drive informed decision-making.</p>
                </div>
                <div>
                    <div className="icon">
                    <SiMaterialdesignicons />
                    </div>
                    <h4>UI Designing</h4>
                    <p>We craft intuitive and visually appealing user interfaces for an engaging user experience.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services_Comp
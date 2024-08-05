import React from 'react'

import { SiMaterialdesignicons } from "react-icons/si";
import { BiSolidNetworkChart } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import { TbDeviceAnalytics } from "react-icons/tb";
    
import "./ServiceCard.css";

function ServiceCard() {

    const icons = {
        network: <BiSolidNetworkChart />,
        website: <CgWebsite />,
        analytics: <TbDeviceAnalytics />,
        design: <SiMaterialdesignicons />,
      };

    const ServiceCard = ({ icon, title, description }) => (
        <div>
          <div className="icon">
            {icons[icon]}
          </div>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      );
  
}

export default ServiceCard
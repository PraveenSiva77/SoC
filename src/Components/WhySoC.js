import React from "react";
import team_soc from "../Assets/Team_sample.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/WhySoC.css";

function WhySoC() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/");
  };

  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={team_soc} alt="Team SoC" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Why Choose SoC?</span>
        </h3>
        <p className="ba-description">
        Squad of Creators (SoC) stands out due to our diverse expertise, innovative solutions, and commitment to quality. 
        We offer a tailored approach to each project, 
        leveraging cutting-edge technology and creative excellence to deliver measurable results.
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Expertise Across Disciplines
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Innovative and Custom Solutions
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Cutting-Edge Technology
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Dedicated Support
        </p>

        {/* <button
          className="text-joinwithus-btn"
          type="button"
          onClick={handleBookAppointmentClick}>
            Our Team
          <FontAwesomeIcon icon={faArrowRight} />
        </button> */}
      </div>
    </div>
  );
}

export default WhySoC;

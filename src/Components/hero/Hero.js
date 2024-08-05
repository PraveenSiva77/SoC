import React, { useEffect, useState } from "react";
import Developer from "../../Assets/developer_1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "./Hero.css";

import { Links } from "../TeamMembersInfo";


function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const joinWithUs = () => {
    window.location.href = Links[0].link;
  };
  

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">A Team for Success!</p>
          <h2 className="text-title">
          Crafting Digital Masterpieces 
          {/* <span className="hero-spl-name">- Squad of Creators</span>  */}
          </h2>
          <p className="text-descritpion">
          Our expert team turns your visionary concepts into impactful digital experiences, delivering cutting-edge technology and design services tailored to elevate your brand.
          </p>
          <button
            className="text-joinwithus-btn"
            type="button"
            onClick={joinWithUs}>
              Join with Us 
            <FontAwesomeIcon icon={faArrowRight} />
          </button>


          <div className="text-stats">
            <div className="text-stats-container">
              <p className="text-stats-description">5+</p>
              <p className="text-stats-title">Projects</p>
            </div>

            <div className="text-stats-container">
              <p className="text-stats-description">5+</p>
              <p className="text-stats-title">Experts</p>
            </div>

            <div className="text-stats-container">
              <p className="text-stats-description">2+</p>
              <p className="text-stats-title">Experience</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Developer} alt="Developer" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;

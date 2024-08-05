import React from "react";
import "../Styles/Team.css";
import MemberCard from "./MemberCard";
import {MemberInfo} from "./TeamMembersInfo";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

function Team() {
  return (
    <div className="team-section" id="team">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Our Team</span>
        </h3>

        <p className="dt-description">
          Meet our exceptional team of specialist developers, dedicated to
          providing top-notch tecnology services at Squad of Creators.
        </p>
      </div>

      <Swiper className="memberCard-container"
      loop={true}
      grabCursor={true}
      spaceBetween={24}

      autoplay={{
        delay: 300000,
        disableOnInteraction: false,
      }}

      pagination={{
        clickable: true,
      }}
      breakpoints={{
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
      }}
      modules={[Autoplay, Pagination]}
      >
          {MemberInfo.map(({name, id, role, designation, photo}) => {
              return (
                  <SwiperSlide className="member-card">
                    <MemberCard img={photo} name={name} role={role}/>
                  </SwiperSlide>
              )
          })}
      </Swiper>





      <div className="dt-cards-content">
      </div>
    </div>
  );
}

export default Team;

import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import "./FooterCredits.css"


function FooterCredits() {
  return (
    
    <div className='ft_credits_base'>
        <div className="ft_copyright">
            <a href='' className='copyright_text'>© 2024 Squad of Creators</a>
            <a href="">Privacy</a>
            <a href="">terms</a>
        </div>

        <div className="ft_social_icons">
            <ul className="icons_base">
                <li>
                    <a href="#"> <FaInstagram/> </a>
                </li>
                <li>
                    <a href="#"> <FaFacebook/> </a>
                </li>
                <li>
                    <a href="#"> <FaLinkedin/> </a>
                </li>
                <li>
                    <a href="#"> <FaYoutube/> </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default FooterCredits;
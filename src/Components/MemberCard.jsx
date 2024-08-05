import React from 'react';
import "../Styles/MemberCard.css"

function MemberCard(memberData) {
  return (
    <div className="MemberCard_base">
        <img src={memberData.img} alt="Team Member" />
        <div className='member-description'>
            <h2>{memberData.name}</h2>
            <p className="text">{memberData.role}</p>
        </div>
    </div>
  )
}

export default MemberCard
import React from "react";
import { useEffect, useState } from "react";
import "./ContactCard.css";

const ContactCard = ({ avatar, name, email, age }) => {
  const [showAge, setShowAge] = useState(false);
  return (
    <div className="contact-card">
      <img src={avatar} alt="profile" />
      <div className="user-details">
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <button onClick={() => setShowAge(!showAge)}>Toggle Age</button>
        {showAge && <p>Age: {age}</p>}
      </div>
    </div>
  );
};

export default ContactCard;

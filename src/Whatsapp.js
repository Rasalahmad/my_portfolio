import React from "react";
import whatsApp from "./images/whatsApp.png";

const Whatsapp = () => {
  return (
    <div>
      <a
        className="whatsapplink"
        href="https://api.whatsapp.com/send?phone=8801625605340"
        target="_blank"
        rel="noreferrer"
      >
        <img src={whatsApp} alt="whatsapp" className="whatsapp" />
      </a>
    </div>
  );
};

export default Whatsapp;

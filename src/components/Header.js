import React from "react";
import Banner from "react-banner";
import "react-banner/dist/style.css";

const Header = () => {
  return (
    <Banner
      logo="My Logo"
      url={window.location.pathname}
      items={[
        { content: "LinkedIn", url: "https://www.linkedin.com/in/valentine-onah/" },
        { content: "Portfolio", url: "https://codepen.io/ValentineOnah/full/BajaVar" },
        { content: "Contact", url: "/contact" },
      ]}
    />
  );
};

export default Header;
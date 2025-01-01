import React from "react";
import NetflixLogo from '/netflixlogo.svg'
const Header = () => {
  return (
    <div className="absolute  px-8 mt-[-15px] bg-opacity-0 z-10"> 
     <img src='Netflix-Logo.png' alt="" className="h-[7.3rem] ml-24 pointer-events-none"  />
    </div>
  );
};

export default Header;

import React from "react";
import { IoLogoGitlab } from "react-icons/io5";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <div className="w-full h-20 bg-slate-100  flex justify-around items-center shadow-2xl ">
      <IoLogoGitlab size={30} />
      <input type="search" value="search" className="w-[400px] h-10 border  " />
      <Link to="/">Home</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/services">Services</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default NavbarComponent;

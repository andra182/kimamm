import React from "react";
import logo from "/kimamm-logo.png";

const Navbar = () => {
  return (
    <div className="navbar fixed w-full h-16 flex items-center justify-between bg-slate-300 px-8 z-50 font-myfont">
      <div className="brand flex items-center space-x-2">
        <div className="logo">
          <img src={logo} alt="" className="w-12" />
        </div>
        <div className="name text-2xl font-semibold tracking-wider">Kimamm</div>
      </div>
      <div className="menu flex items-center space-x-5 font-medium text-2xl">
        <div className="menu-item">
          <a href="#portofolio">Portofolio</a>
        </div>
        <div className="menu-item">
          <a href="#service">Services</a>
        </div>
        <div className="menu-item">
          <a href="#">Daftar</a>
        </div>
        <div className="menu-item">
          <a href="#">Masuk</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

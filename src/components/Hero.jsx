import React from "react";
import hero from "/kimamm-hero-bg.png";
import hero_logo from "/hero-title-logo.png";

const Hero = () => {
  return (
    <div>
      <div
        className="w-full h-screen py-48 px-44"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex relative font-myfont w-[32rem]">
          <div className="flex flex-col space-y-2">
            <p className="text-8xl ">Kimamm</p>
            <p className="text-5xl tracking-wider">Design Beyond</p>
            <p className="text-5xl tracking-wider">the Ordinary</p>
            <p className="text-2xl">Haikal Hakim Tamam</p>
          </div>
          <div className="absolute right-0 top-0 w-1/4">
            <img src={hero_logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

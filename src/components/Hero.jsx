import React from "react";

const Hero = () => {
  return (
    <div>
      <div
        className="w-full h-screen py-48 px-44"
        style={{
          backgroundImage: "url('/src/assets/kimamm-hero-bg.png')",
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
            <img src="/src/assets/hero-title-logo.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

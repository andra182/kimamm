import React from "react";
import katalogImage from "/portofolio/FEED PROMO RTL 14-11-24-01.jpg";
import feedIgImage from "/portofolio/FEED IG.jpg";
import thumbnailIgImage from "/portofolio/THUMBNAIL.jpg";
import brosurImage from "/portofolio/BROSUR COOKIES_page-0001.jpg";
import kalenderImage from "/portofolio/KALENDER HAIKAL HAKIM T_page-0001.jpg";
import infografisImage from "/portofolio/INFOGRAFIS - Haikal Hakim Tamam - Copy_page-0001 (1).jpg";
import logoImage from "/portofolio/LOGO_page-0001.jpg";
import posterImage from "/portofolio/Poster Cupcake Haikal Hakim tamam_page-0001.jpg";

const Service = () => {
  const Card = ({ title, image }) => {
    return (
      <div className="flex flex-col justify-center items-center gap-4">
        <img src={image} alt="" className="w-64 h-80 object-cover rounded-lg" />
        <p className="text-3xl uppercase">{title}</p>
      </div>
    );
  };

  return (
    <div>
      <div className="w-full py-24 px-44">
        <div className="w-full flex justify-center mb-20">
          <p className="text-3xl font-myfont font-medium tracking-widest">
            Design Beyond the Ordinary
          </p>
        </div>
        <div className="brand w-full flex justify-center">
          <p className="text-4xl font-medium">SERVICE</p>
        </div>
        <div className="flex flex-col mt-10 gap-9 w-full">
          <div className="flex gap-7 w-full justify-center">
            <Card title="Katalog" image={katalogImage} />
            <Card title="Feed IG" image={feedIgImage} />
            <Card title="Thumbnail IG" image={thumbnailIgImage} />
            <Card title="Brosur" image={brosurImage} />
          </div>
          <div className="flex gap-7 w-full justify-center">
            <Card title="Kalender" image={kalenderImage} />
            <Card title="Infografis" image={infografisImage} />
            <Card title="Logo" image={logoImage} />
            <Card title="Poster" image={posterImage} />
          </div>
        </div>
        <div className="w-full mt-20 flex justify-center">
          <p className="text-3xl flex items-center gap-2">
            Lainnya{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="30"
              viewBox="0 0 44 40"
              fill="none"
            >
              <path
                d="M44 20C44 31.0457 34.1503 40 22 40C9.84974 40 0 31.0457 0 20C0 8.9543 9.84974 0 22 0C34.1503 0 44 8.9543 44 20Z"
                fill="#D9D9D9"
              />
              <path
                d="M35.7071 20.7071C36.0976 20.3166 36.0976 19.6834 35.7071 19.2929L29.3431 12.9289C28.9526 12.5384 28.3195 12.5384 27.9289 12.9289C27.5384 13.3195 27.5384 13.9526 27.9289 14.3431L33.5858 20L27.9289 25.6569C27.5384 26.0474 27.5384 26.6805 27.9289 27.0711C28.3195 27.4616 28.9526 27.4616 29.3431 27.0711L35.7071 20.7071ZM9 21L35 21L35 19L9 19L9 21Z"
                fill="black"
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;

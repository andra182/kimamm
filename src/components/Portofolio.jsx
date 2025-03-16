import React from "react";
import feedPromo from "/portofolio/FEED PROMO TASNIM-01.jpg";
import katalogHaikal from "/portofolio/katalog HAIKAL HAKIM TAMAM_page-0001.jpg";
import logoGeoadvance from "/portofolio/Logo geoadvance_page-0001.jpg";
import posterCoffee from "/portofolio/poster coffee_page-0001 (1).jpg";
import posterSuperKebab from "/portofolio/POSTER_page-0001.jpg";

const Portfolio = () => {
  return (
    <div className="w-full py-24 px-44">
      <div className="brand w-full flex justify-center">
        <p className="text-4xl font-semibold">PORTOFOLIO</p>
      </div>
      <div className="flex gap-4 mt-10">
        <div className="w-2/3">
          <img
            className="rounded-xl w-full h-full object-cover"
            src={feedPromo}
            alt="Rumah Syariah Bogor advertisement"
          />
        </div>
        <div className="flex gap-4 w-2/3">
          <div className="flex flex-col gap-4 w-1/2">
            <div className="h-1/2">
              <img
                className="rounded-xl w-full h-full object-cover"
                src={katalogHaikal}
                alt="Mom Bakery dessert advertisement"
              />
            </div>
            <div className="h-1/2">
              <img
                className="rounded-xl w-full h-full object-cover"
                src={logoGeoadvance}
                alt="GeoAdvance SINJ logo"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 w-1/2">
            <div className="h-1/2">
              <img
                className="rounded-xl w-full h-full object-cover"
                src={posterCoffee}
                alt="Coffruit grand opening advertisement"
              />
            </div>
            <div className="h-1/2">
              <img
                className="rounded-xl w-full h-full object-cover"
                src={posterSuperKebab}
                alt="Super Kebab buy 2 get 1 promo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

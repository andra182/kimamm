import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="w-full bg-gray-200 py-14 px-6 flex justify-between">
        <div className="w-1/2">
          <div className="">
            <p className="font-medium text-2xl">Kimamm</p>
          </div>
          <div className="flex gap-10 text-lg">
            <div className="flex w-1/2">
              <p>
                Online graphic design services that guarantee your satisfaction
                with professional design
              </p>
            </div>
            <div className="flex flex-col w-1/2">
              <a href="#contact">Contact Us</a>
              <a href="#payment">Payment</a>
              <a href="#track">Track Order</a>
              <a href="#support">Support</a>
              <a href="#promo">Promo</a>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-4">
          <p className="text-2xl font-medium">Follow Us</p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/">
              <img
                src="/src/assets/fb.png"
                alt=""
                className="h-8 w-16 object-cover"
              />
            </a>
            <a href="https://www.instagram.com/">
              <img
                src="/src/assets/ig.png"
                alt=""
                className="h-8 w-8 mr-4 object-cover"
              />
            </a>
            <a href="https://www.twitter.com/">
              <img
                src="/src/assets/x.png"
                alt=""
                className="h-8 w-8 object-cover rounded-full"
              />
            </a>
            <a href="https://www.tiktok.com/">
              <img
                src="/src/assets/tiktok.png"
                alt=""
                className="h-8 w-8 object-cover ml-4 bg-black rounded-full"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";

const Why = () => {
  return (
    <div>
      <div className="w-full pb-24 px-44 mb-32">
        <div className="w-full flex justify-center mb-20">
          <p className="text-3xl font-myfont font-medium tracking-widest">
            Design Beyond the Ordinary
          </p>
        </div>
        <div className="w-full flex flex-col gap-8">
          <p className="text-3xl">Why Kimamm?</p>
          <div className="flex w-full flex-col gap-4">
            <div className="w-full flex bg-gray-300 rounded-lg p-4 justify-between">
              <div className="w-1/2 flex flex-col gap-4">
                <p className="text-2xl font-myfont font-medium">
                  Creative & Custom Design
                </p>
                <p className="text-lg">
                  We provide original and innovative design solutions, in line
                  with your business values. With an integrated approach, we
                  ensure every design element reflects your brand identity
                </p>
              </div>
              <div className="w-1/2 flex justify-end">
                <img
                  src="/src/assets/why-1.png"
                  alt=""
                  className="h-32 w-332 object-cover"
                />
              </div>
            </div>
            <div className="w-full flex bg-gray-300 rounded-lg p-4 justify-between">
              <div className="w-1/2 flex flex-col gap-4">
                <p className="text-2xl font-myfont font-medium">
                  On Time Guarantee
                </p>
                <p className="text-lg">
                  Delivery of design results is guaranteed on time as we
                  promised. We combine your brief with our latest design
                  knowledge and experienced expertise
                </p>
              </div>
              <div className="w-1/2 flex justify-end">
                <img
                  src="/src/assets/why-2.png"
                  alt=""
                  className="h-32 w-32 object-cover mr-9"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;

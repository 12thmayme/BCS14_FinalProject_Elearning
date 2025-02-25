import React from "react";

const IntroduceBanner = () => {
  return (
    <div className="pt-14 md:pt-20 lg:pt-24 relative overflow-hidden min-h-36 bg-[#8be9e9] ">
      <div className="absolute h-full left-0 top-0 max-w-[20%] lg:max-w-[25%]">
        <img
          className="w-full h-full "
          src="./public/banner_sd.svg"
          alt="banner_sd"
        />
      </div>
      <div className="absolute h-full left-0 top-0 max-w-[23%] ">
        <img
          className=" w-full h-full opacity-40"
          src="./public/banner_sd2.svg"
          alt="banner_sd"
        />
      </div>
      <div className="absolute h-full left-[2%] max-w-[20%] lg:max-w-[28%] xl:left-[10%] xxl:left-[10%] top-[20%] z-50 ">
        <img
          className="opacity-15"
          src="./public/banner_sd5.svg"
          alt="banner_sd"
        />
      </div>
      <div className="absolute h-full right-0 top-[65%] z-50 max-w-[20%] lg:max-w-[25%] ">
        <img
          className="opacity-20"
          src="./public/banner_sd3.svg"
          alt="banner_sd"
        />
      </div>
      <div className="absolute h-full right-[2%] lg:right-[4%] xl:right[6%] top-[55%] z-50  max-w-[14%] lg:max-w-[15%]  xxl:max-w-[20%]">
        <img className="" src="./public/banner_sd4.svg" alt="banner_sd" />
      </div>
      <div className="absolute h-full right-[3%] xl:right-[6%] xxl:right-[4.4%] top-[65%] lg:top-[82%]  z-50  max-w-[12%] lg:max-w-[11%] xxl:max-w-[20%]">
        <img
          className="opacity-50"
          src="./public/banner_sd6.svg"
          alt="banner_sd"
        />
      </div>
      <section className=" relative pb-[25.5%] mt-3 md:mt-0">
        <div className="flex items-center justify-center flex-col absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] font-thin text-center">
          <h2 className="text-xl md:text-3xl lg:text-6xl font-bold lg:pt-5">
            <span className="text-primary">CYBERSOFT</span> - PROGRAMMING EXPERT
            TRAINING
          </h2>
          <p className="text-[12px] md:max-w-[80%] lg:text-2xl">
            Training for all subjects from people in the wrong field, beginners,
            information technology students to those who have a programming
            career.
          </p>
        </div>
      </section>
    </div>
  );
};

export default IntroduceBanner;

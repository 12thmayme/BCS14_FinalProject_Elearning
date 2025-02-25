import React from "react";
import { FaRegHandshake } from "react-icons/fa6";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { PiStudentLight } from "react-icons/pi";

const System = () => {
  const data = [
    {
      icon: <HiOutlineBuildingOffice2 />,
      number: "7",
      content: "Center",
    },
    {
      icon: <PiStudentLight />,
      number: "9500+",
      content: "Student",
    },
    {
      icon: <FaRegHandshake />,
      number: "200+",
      content: "Partner",
    },
  ];
  return (
    <section className="bg-[#FFFFCC] opacity-80">
      <div className="container">
        <div className="py-10 lg:py-20">
          <div className="text-center lg:mb-10">
            <h2 className="lg:tracking-[1px]">
              CYBERSOFT - PROJECT BASED PROGRAMMING TRAINING
            </h2>
            <p className="md:text-xl opacity-80 lg:mt-3">
              Statistics by numbers
            </p>
          </div>
          <div className="flex items-center justify-around mt-5">
            {data.map((item, index) => {
              return (
                <div key={index} className="flex items-center justify-content">
                  <div className="w-10 h-10 md:w-20 md:h-20 lg:w-28 lg:h-28 bg-gradient-custom flex items-center justify-center rounded-[50%]">
                    <div className="text-3xl md:text-5xl lg:text-7xl text-white">
                      {item.icon}
                    </div>
                  </div>
                  <div className="ml-2 md:ml-3">
                    <p className="font-bold text-base md:text-2xl lg:text-5xl bg-gradient-custom bg-clip-text text-transparent">
                      {item.number}
                    </p>
                    <p className="lg:text-xl">{item.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default System;

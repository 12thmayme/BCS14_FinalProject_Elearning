import React from "react";

const Curriculum = () => {
  const data = [
    {
      title: "Learning and work management skills",
      desc: "If you want to study well, you must first know how to study. If you want to work effectively, you must know how to manage your work.",
    },
    {
      title: "Solid programming foundation",
      desc: "To program well, you need to be proficient in problem solving thinking, programming structures, algorithms, debugging, etc.",
    },
    {
      title: "Powerful languages ​​and frameworks",
      desc: "Proficiency in popular languages ​​and frameworks helps students easily find jobs right after graduation.",
    },
    {
      title: "Practical project skills",
      desc: "Students are trained in practical skills through many different projects, large and small, helping them feel confident when they start working.",
    },
  ];
  return (
    <div className="container">
      <div className="p-5">
        <h2>
          <span> CONTENTS OF THE</span> COURSE PROGRAM
        </h2>
        <div className=" flex items-stretch text-white gap-3 lg:gap-10">
          <ul className="md:w-[75vw] lg:w-[60vw] ">
            {data.map((item, index) => {
              return (
                <li className="mt-3 w-full md:mt-10 flex grow " key={index}>
                  <div className="flex items-stretch gap-3 lg:gap-8">
                    <div className="p-5 bg-primary flex items-center justify-center">
                      <p className="text-2xl lg:text-3xl md:px-3 ">
                        {index + 1}
                      </p>
                    </div>
                    <div className="px-5 py-3 bg-dark-2 ">
                      <p className=" text-lg lg:text-xl ">{item.title}</p>
                      <p className="text-sm lg:text-base font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className=" hidden md:block lg:flex justify-center items-center lg:w-[40vw]">
            <img
              className="object-cover lg:w-[70%] lg:h-[35vh] xl:h-[50vh] object-top "
              src="./public/homeCyber/animou_03.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
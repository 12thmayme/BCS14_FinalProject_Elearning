import React from "react";
import { IoStarSharp } from "react-icons/io5";

const Mission = () => {
  const data = [
    {
      icon: <IoStarSharp />,
      title: "MISSION",
      subTitle:
        "Using modern training methods to create a team of high-quality programming staff",
      desc: "CyberSoft uses advanced and modern training methods on the educational technology platform, combining traditional methods, online methods, flipped classrooms and real project-based learning, coordinating between the experienced training team and the requirements of companies and businesses. Thereby, CyberSoft helps learners develop thinking, analysis, career specialization, lifelong learning, ready to meet all business needs.",
      url: "https://cybersoft.edu.vn/wp-content/uploads/2019/01/IMG_3078.jpg",
    },
  ];
  return (
    <section className="py-5 lg:py-10">
      <div className="container">
        {data.map((item, index) => {
          return (
            <div className="lg:flex" key={index}>
              <div className="lg:w-1/2">
                <img className="object-cover" src={item.url} alt={item.title} />
              </div>
              <div className="p-5 lg:w-1/2">
                <div className="flex items-center mb-3">
                  <p className="text-3xl lg:text-5xl mr-2">{item.icon}</p>
                  <h2 className="text-2xl mg:text-3xl lg:text-5xl">
                    {" "}
                    {item.title}
                  </h2>
                </div>
                <p className="font-semibold text-base lg:text-2xl">
                  {item.subTitle}
                </p>
                <p>{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Mission;

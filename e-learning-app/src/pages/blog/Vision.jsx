import React from "react";
import { IoStarSharp } from "react-icons/io5";

const Vision = () => {
  const data = [
    {
      icon: <IoStarSharp />,
      title: "VISION",
      subTitle:
        "Become the leading professional programming training system in the region",
      desc: "Become the leading professional programming training system in the region, providing highly skilled and specialized human resources for the development of the software industry in the current digital age, contributing to the development of society, making Vietnam a software development powerhouse.",
      url: "https://cybersoft.edu.vn/wp-content/uploads/2019/02/cybersoft-lap-trinh-.jpg",
    },
  ];
  return (
    <section className="py-5 lg:py-10">
      <div className="container">
        {data.map((item, index) => {
          return (
            <div className="lg:flex" key={index}>
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
              <div className="lg:w-1/2">
                <img className="object-cover" src={item.url} alt={item.title} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Vision;

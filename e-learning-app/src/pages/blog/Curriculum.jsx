import React from "react";
import { IoCheckboxOutline } from "react-icons/io5";
const Curriculum = () => {
  const data = [
    "The path from zero to work",
    "Compilation of full recruiter skills",
    "Practice from the first lesson",
    "Practice goes hand in hand with theory",
    "Many real projects through capstone projects",
    "The curriculum focuses on logical thinking, business analysis, and problem solving.",
    "Grasp the trend and constantly update with the latest technology today",
    "Previous lesson videos, related course videos, practice materials",
    "Listening to businesses to update vocational training skills",
  ];
  return (
    <section>
      <div className="container">
        <div className="pb-5 lg:flex">
          <div className="lg:w-3/5 lg:p-5">
            <img
              className="w-full object-cover rounded-3xl"
              src="https://cybersoft.edu.vn/wp-content/uploads/2022/11/thuvienanh_6.jpg"
              alt=""
            />
          </div>
          <div className="lg:w-2/5 ">
            <h2 className="my-2 lg:mb-5 lg:text-6xl">Study materials</h2>
            {data.map((item, index) => {
              return (
                <div
                  className="flex justify-items-center items-center lg:mb-4"
                  key={index}
                >
                  <p>
                    <IoCheckboxOutline className="pr-2 text-3xl lg:text-5xl text-primary" />
                  </p>
                  <p className="lg:text-xl lg:max-w-[550px]">{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;

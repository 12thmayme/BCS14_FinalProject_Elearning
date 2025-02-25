import React from "react";
import { FaCheck } from "react-icons/fa6";
import { IoCheckboxOutline } from "react-icons/io5";

const Lecturer = () => {
  const data = [
    "CyberSoft selects Lecturers who are Seniors working at companies and corporations such as ELCA, NashTech, Global CyberSoft, KMS, ... with rich practical experience, good communication skills and dedication.",
    "CyberSoft says NO to empty theory and learning means having to CODE until your hands are tired!",
    "CyberSoft always trains instructors, participates in training courses at ASU University - Arizona, USA and always improves the program and teaching methods to ensure that students learn best, code fluently and analyze well, and have a job right after studying.",
    "Lecturers enthusiastically share all the experiences gained from the projects they are working on. Mentors actively supervise coding, support code correction and give suggestions for standard code.",
  ];
  const urlImages = [
    "https://cybersoft.edu.vn/wp-content/uploads/2022/09/hinhanhlop2-2.jpg",
    "https://cybersoft.edu.vn/wp-content/uploads/2022/09/gv-1.jpg",
    "https://cybersoft.edu.vn/wp-content/uploads/2018/02/UNADJUSTEDNONRAW_thumb_413.jpg",
    "https://cybersoft.edu.vn/wp-content/uploads/2022/09/hinhanhlop1-1.jpg",
  ];
  return (
    <section>
      <div className="container">
        <div className="pb-5 lg:flex">
          <div className="lg:w-2/5 ">
            <h2 className="my-2 lg:mb-7 lg:text-6xl">Study materials</h2>
            {data.map((item, index) => {
              return (
                <div
                  className=" justify-items-center items-center lg:mb-5"
                  key={index}
                >
                  <p className="lg:text-xl lg:max-w-[500px] ">
                    <FaCheck className="pr-2 text-xl lg:text-3xl text-primary inline-block" />{" "}
                    <span className="text-black opacity-80 leading-6 lg:leading-8 ">
                      {item}
                    </span>
                  </p>
                </div>
              );
            })}
          </div>

          <div className="lg:w-3/5 lg:p-5">
            <div className="grid grid-cols-4 gap-4 mt-4">
              {urlImages.map((src, index) => (
                <div
                  key={index}
                  className={`relative group ${
                    index === 0 || index === 2
                      ? "col-span-2 row-span-2"
                      : "col-span-2"
                  }`}
                >
                  <img
                    src={src}
                    alt={`lecturer ${index + 1}`}
                    className="rounded-lg shadow-md w-full h-full object-cover"
                  />
                  <div className="rounded-lg absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lecturer;

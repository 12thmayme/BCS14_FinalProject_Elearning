import React from "react";
import { BiSupport } from "react-icons/bi";
import { FaCheck, FaMedal, FaRegHandshake } from "react-icons/fa6";

const Certification = () => {
  const certification = [
    {
      icon: <FaMedal />,
      desc: "Certificate of completion issued",
    },
    {
      icon: <FaRegHandshake />,
      desc: "Connect jobs with many businesses",
    },
    {
      icon: <BiSupport />,
      desc: "Certificate of completion issued",
    },
  ];
  const steps = [
    {
      title: "After starting to study 1-2 months",
      items: [
        "Join the employment system",
        "Automated CV System Guide",
        "Update first projects on CV",
        "Update first projects on CV",
      ],
    },
    {
      title: "During the study",
      items: [
        "Support CV update notification",
        "Tskill assessment test",
        "Support to track learning progress",
        "Update transcript according to learning progress",
      ],
    },
    {
      title: "While doing the final project",
      items: [
        "Create CVs on LinkedIn, Github, Web Portfolio",
        "Interview questions",
        "Share experience pv",
        "Support business connection",
      ],
    },
    {
      title: "After completing the course",
      items: [
        "Certification",
        "Lifetime support employment system",
        "Connecting businesses on the job system",
        "Competency assessment test",
      ],
    },
  ];
  return (
    <section className="bg-[#482A10] text-white">
      <div className="container">
        <div className="py-10">
          <div className="text-center">
            <h2 className="text-white text-[1.5rem] md:text-3xl lg:text-5xl">
              DEGREE AND JOBS AFTER THE COURSE
            </h2>
            <p className="max-w-[400px] md:max-w-[600px] lg:max-w-[900px] mx-auto pt-3">
              After completing the projects in the course, CyberSoft will issue
              a certificate to the students. Cybersoft will continuously and
              actively support you to find a job in the technology field, guide
              you in making a CV & Salary Deal, support job connection with
              businesses after completing all the projects in the course
            </p>
          </div>
          <div>
            <div className="pt-8 text-center mx-auto lg:flex justify-center items-center">
              <div className="text-center lg:w-1/2">
                {certification.map((item, index) => {
                  return (
                    <div
                      className="flex p-2 items-center justify-center"
                      key={index}
                    >
                      <p className="w-1/5 flex justify-center pl-3 lg:pb-7 text-2xl lg:text-5xl text-primary">
                        {item.icon}
                      </p>
                      <p className="w-4/5 text-left text-base lg:pb-7 font-semibold lg:text-2xl max-w-[320px]  md:max-w-[450px] la:max-w-[650px]">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="w-4/5 mt-3 mx-auto lg:w-1/2 ">
                <img
                  className="w-full object-cover rounded-2xl"
                  src="https://cybersoft.edu.vn/wp-content/uploads/2025/02/snapedit_1738923701602.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mt-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-[#5E442F] p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <p className="pr-2 text-base lg:text-xl text-primary">
                        <FaCheck />
                      </p>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;

import React from "react";
import { GiCheckMark } from "react-icons/gi";
import { LiaChessKnightSolid } from "react-icons/lia";
import { BsFire, BsQrCode } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import { MdOutlineVpnKey } from "react-icons/md";

const PriorityPoints = () => {
  const data = [
    {
      icon: <GiCheckMark />,
      title: "Learning by schedule, with direction",
      desc: "CyberSoft will guide and provide learning paths for the career you pursue. Develop your programming ability and passion.",
    },
    {
      icon: <LiaChessKnightSolid />,
      title: "Foundation, mindset, core in programming",
      desc: "CyberSoft provides the most fundamental foundations and core values ​​in programming. You will be confident in the face of changes in technology and the working environment.",
    },
    {
      icon: <BsFire />,
      title: "Sharpen you through experience, real projects",
      desc: "The team of Lecturers and Mentors are experienced people through real projects at large companies who will impart their 'bloody' experiences to you.",
    },
    {
      icon: <RiTeamFill />,
      title: "Teamwork, Scrum - Agile. Dedicated Mentor",
      desc: "You will be assigned projects and work in teams from the very first days. Play the role of a member in the Scrum, Agile process. Receive dedicated and enthusiastic support from Mentors.",
    },
    {
      icon: <BsQrCode />,
      title: "New technology, in-depth, practical",
      desc: "You will learn and experience the latest programming technologies, in depth, closely following the actual recruitment needs of businesses.",
    },
    {
      icon: <MdOutlineVpnKey />,
      title: "Handing over the key to total success",
      desc: "CV writing and interview guidance. Connecting with businesses, meeting businesses, and interviewing with businesses right after graduation.",
    },
  ];
  return (
    <section className="bg-blue-100 py-5 lg:py-10 ">
      <div className="container">
        <div className="text-center">
          <h2>Advantage</h2>
          <p>only at CyberSoft</p>
        </div>
        <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, index) => {
            return (
              <div className="">
                <div className="flex items-center justify-center  mx-auto lg:mx-0 w-20 h-20 lg:w-24 lg:h-24 border-2 border-primary rounded-[50%] hover:bg-primary ease-in-out transition duration-700 hover:scale-110">
                  <p className="text-3xl md:text-4xl lg:text-5xl text-primary hover:text-white ">
                    {item.icon}
                  </p>
                </div>
                <div>
                  <h3 className="text-base lg:text-xl lg:mt-3">{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PriorityPoints;

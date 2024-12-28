import React from "react";
import {
  BE,
  DESIGN,
  FE,
  FULL_STACK,
  MOBILE,
  THINKING,
} from "../../util/API/constants/Constants";
import Banner from "./HomeLayout/Banner";
import GetCourse from "./HomeLayout/CourseList/GetCourse";
import Headers from "./HomeLayout/Headers";
import CourseList from "./HomeLayout/CourseList/CourseList";
import { twMerge } from "tailwind-merge";
import Advice from "./HomeLayout/discover/advice";
// import CourseList from "./HomeLayout/CourseList/CourseList";

const HomePage = () => {
  const listCourse = [
    {
      title: "FontEnd",
      value: FE,
    },
    {
      title: "BackEnd",
      value: BE,
    },
    {
      title: "FullStack",
      value: FULL_STACK,
    },
    {
      title: "DeSign",
      value: DESIGN,
    },
    {
      title: "Thinking",
      value: THINKING,
    },
    {
      title: "Mobile",
      value: MOBILE,
    },
  ];

  return (
    <>
      <Headers />
      <Banner />
      <main className="container">
        {listCourse?.map((item, index) => {
          return (
            <section>
              <h2
                className={twMerge([
                  "pt-14 pl-5 text-xl md:text-4xl lg:text-[2.5rem] xl:text-4xl font-semibold",
                  index === 0 && "pt-0",
                ])}
              >
                <span className="text-yellow-500 mr-2">{item.title}</span>
                Courses
              </h2>
              <GetCourse course={item.value} />
            </section>
          );
        })}
        <Advice />
        {/* <CourseList /> */}
      </main>
    </>
  );
};

export default HomePage;

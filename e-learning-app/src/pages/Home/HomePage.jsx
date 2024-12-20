import React from "react";
import Header from "./HomeLayout/Header";
import { Outlet } from "react-router-dom";
import Footer from "./HomeLayout/Footer";
import Banner from "./HomeLayout/Banner";
import MobileCourse from "./HomeLayout/CourseList/MobileCourse";
import FullStackCourse from "./HomeLayout/CourseList/FullStackCourse";
import FECourse from "./HomeLayout/CourseList/FECourse";
import DesignCourse from "./HomeLayout/CourseList/DesignCourse";
import ProgrammingThinkingCourse from "./HomeLayout/CourseList/ProgrammingThinkingCourse";
import BECourse from "./HomeLayout/CourseList/BECourse";
// import CourseList from "./HomeLayout/CourseList/CourseList";

const HomePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <main>
        {/* <CourseList /> */}
        <FullStackCourse />
        <FECourse />
        <BECourse />
        <DesignCourse />
        <ProgrammingThinkingCourse />
        <MobileCourse />
      </main>
    </>
  );
};

export default HomePage;

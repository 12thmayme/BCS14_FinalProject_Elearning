import React from "react";
import System from "../blog/system";
import Banner from "./HomeLayout/Banner";
import Advice from "./HomeLayout/discover/advice";
import Benefit from "./HomeLayout/propose/Benefit";
import Curriculum from "./HomeLayout/propose/Curriculum";
import Evaluate from "./HomeLayout/propose/Evaluate";
import TheReasons from "./HomeLayout/propose/TheReasons";
import TrainingCatalog from "./HomeLayout/propose/TrainingCatalog";
import Auto from "./auto";
import PriorityPoints from "../blog/PriorityPoints";
// import CourseList from "./HomeLayout/CourseList/CourseList";

const HomePage = () => {
  return (
    <>
      {/* <Headers /> */}
      <Banner />
      <Auto />
      <System />
      <TheReasons />
      <Benefit />
      <Curriculum />
      <Advice />
      <TrainingCatalog />
      <PriorityPoints />
      <Evaluate />
    </>
  );
};

export default HomePage;

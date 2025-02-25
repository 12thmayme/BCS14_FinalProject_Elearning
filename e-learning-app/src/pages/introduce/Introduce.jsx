import React from "react";
import IntroduceBanner from "./IntroduceBanner";
import PriorityPoints from "../blog/PriorityPoints";
import Lecturer from "../blog/Lecturer";
import Vision from "../blog/Vision";
import Mission from "../blog/Mission";

const Introduce = () => {
  return (
    <>
      <IntroduceBanner />
      <Lecturer />
      <Mission />
      <Vision />
      <PriorityPoints />;
    </>
  );
};

export default Introduce;

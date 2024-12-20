import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Home/HomeLayout/Header";
import Footer from "../Home/HomeLayout/Footer";

const HomeMaster = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeMaster;

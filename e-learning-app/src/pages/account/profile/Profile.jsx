import React from "react";
import HeaderProfile from "./HeaderProfile";
import { Outlet } from "react-router-dom";
import FromProfile from "./FromProfile";

const Profile = () => {
  return (
    <>
      <HeaderProfile />
      <main className="container">
        <FromProfile />
      </main>
    </>
  );
};

export default Profile;

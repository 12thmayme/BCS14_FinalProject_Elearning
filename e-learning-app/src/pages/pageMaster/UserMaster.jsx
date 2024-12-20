import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const UserMaster = () => {
  return (
    <div className="signup">
      <div className="container">
        <div className="row signup_form  ">
          <div className="col-6 signup_left">
            <div className="signup_overlay"></div>
            <img
              src="https://images.unsplash.com/photo-1599081595476-75608b796d52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGxlYXJuaW5nfGVufDB8fDB8fHww"
              alt="imgLogin"
            />
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserMaster;

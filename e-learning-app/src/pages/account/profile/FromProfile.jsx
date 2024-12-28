import React, { useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

const FromProfile = () => {
  const fromProfile = [
    { title: "Account", type: "text", name: "taiKhoan", id: "taiKhoan" },
    { title: "Password", type: "password", name: "matKhau", id: "matKhau" },
    { title: "Phone", type: "text", name: "soDt", id: "soDt" },
    { title: "Full name", type: "text", name: "hoten", id: "hoten" },
    { title: "Email", type: "text", name: "email", id: "email" },
  ];
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="card md:px-5 md:py-10">
      <div className="px-5 mt-10">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl text-secondary font-semibold mt">
              <span className="text-primary">Edit </span>
              your profile
            </h2>
            <p className="text-sm font-thin md:mt-2 md:mb-5">
              This will be shared with other students
            </p>
          </div>
          <button className="py-3 rounded-3xl px-10 bg-blue-500 text-white hidden md:block mr-10">
            Save
          </button>
        </div>
        <div>
          <ul className="lg:flex w-full lg:flex-wrap ">
            {fromProfile?.map((item) => {
              return (
                <li className="lg:w-1/2 pr-3" key={item.id}>
                  <div className="form-group">
                    <label
                      htmlFor={item.id}
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      {item.title}{" "}
                    </label>
                    <div className={item.type === "password" ? "relative" : ""}>
                      <input
                        type={
                          item.type === "password" && showPassword
                            ? "text"
                            : item.type
                        }
                        id={item.id}
                        name={item.name}
                        disabled={item.id === "taiKhoan"}
                      />
                      {item.type === "password" && (
                        <div
                          onClick={togglePasswordVisibility}
                          className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
                        >
                          {showPassword ? <FaRegEye /> : <FaEyeSlash />}
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <button className="py-3 px-10 mt-10 bg-blue-500 text-white block md:hidden">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default FromProfile;

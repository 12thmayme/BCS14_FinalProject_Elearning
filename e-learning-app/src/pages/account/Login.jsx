import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import React, { useState } from "react";
import { FaArrowLeft, FaEyeSlash, FaRegEye } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { localService } from "../../api/localService";
import { loginApi } from "../../util/API/User/UserApi";
import { showSuccessToast } from "../../util/customs/CustomAlert";
const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string()
        .matches(/^[a-zA-Z0-9]+$/, "Invalid account please re-enter")
        .required("Required account cannot be blank"),
      matKhau: Yup.string()
        .matches(/^.{6,12}$/, "Password must be between 6 and 12 characters")
        .required("Required password cannot be blank"),
    }),
    onSubmit: (values) => {
      mutation.mutateAsync(values);
    },
  });
  const mutation = useMutation({
    mutationKey: ["loginApi"],
    mutationFn: loginApi,
    onSuccess: (data) => {
      console.log(data);
      showSuccessToast(`Login Success`);
      const accessToken = data.accessToken;
      const userData = data;
      localService.setAccessToken(accessToken);
      localService.setUser(userData);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="col-6 signup_right">
        <h1 className="signup_heading">Sign In</h1>
        <h2 className="signup_caption">sign in of with</h2>
        <div className="signup-social">
          <div className="signup-social_item">
            <i className="fa-brands fa-google signup-social_icon"></i>
            <span className="sign-social_text">Sign in with Google</span>
          </div>
          <div className="signup-social_item">
            <i className="fa-brands fa-facebook-f signup-social_icon"></i>
            <span className="sign-social_text">Sign in with Fabook</span>
          </div>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="taiKhoan">Account</label>
            {formik.errors.taiKhoan ? (
              <p className="text-danger">{formik.errors.taiKhoan}</p>
            ) : null}
            <input
              type="text"
              className="form-control"
              id="taiKhoan"
              name="taiKhoan"
              onChange={formik.handleChange}
              onBlur={formik.onBlur}
            />
          </div>
          <div className="form-group">
            <label htmlFor="matKhau">Password</label>
            {formik.errors.matKhau ? (
              <p className="text-danger">{formik.errors.matKhau}</p>
            ) : null}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                id="matKhau"
                name="matKhau"
                onChange={formik.handleChange}
                onBlur={formik.onBlur}
              />
              <div
                onClick={togglePasswordVisibility}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <FaRegEye /> : <FaEyeSlash />}
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-5 text-white">
            <button
              type="submit"
              className="px-8 py-4 rounded-3xl bg-blue-700  "
              style={{ padding: "15px 40px" }}
            >
              Login
            </button>
            <NavLink className="text-lg text-blue-500 flex items-center" to="/">
              <FaArrowLeft />
              Back to home
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

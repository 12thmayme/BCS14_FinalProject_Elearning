import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { registerApi } from "../../util/API/User/UserApi";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../util/Setting/Setting";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import {
  showErrorToast,
  showSuccessToast,
} from "../../util/customs/CustomAlert";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

const Signup = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      maNhom: "GP01",
      email: "",
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string()
        .matches(/^[a-zA-Z0-9]+$/, "Invalid account please re-enter")
        .required("Required account cannot be blank"),
      matKhau: Yup.string()
        .matches(/^.{6,12}$/, "Password must be between 6 and 12 characters")
        .required("Required password cannot be blank"),
      hoTen: Yup.string()
        .matches(
          /^[a-zA-ZÀ-ỹ\s]+$/,
          "Full name can only contain letters and spaces"
        )
        .required("Required fullname cannot be blank"),
      soDT: Yup.string()
        .matches(/^\d{10,11}$/, "Phone number must be 10 to 11 digits")
        .required("Required phone cannot be blank"),
      email: Yup.string()
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          "Invalid email "
        )
        .required("Required email cannot be blank"),
    }),
    onSubmit: (values) => {
      console.log(values);
      mutation.mutateAsync(values);
    },
  });

  const mutation = useMutation({
    mutationKey: ["registerApi"],
    mutationFn: registerApi,
    onSuccess: (data) => {
      console.log(data);
      showSuccessToast("Registration successful");
      navigate("/users/login");
    },
    onError: (error) => {
      console.log(error);
      showErrorToast(error);
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="col-6 signup_right">
      <h1 className="signup_heading">Sign Up</h1>
      <h2 className="signup_caption">sign up of with</h2>
      <div className="signup-social">
        <div className="signup-social_item">
          <i className="fa-brands fa-google signup-social_icon"></i>
          <span className="sign-social_text">Sign up with Google</span>
        </div>
        <div className="signup-social_item">
          <i className="fa-brands fa-facebook-f signup-social_icon"></i>
          <span className="sign-social_text">Sign up with Fabook</span>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label className="text-lg" htmlFor="taiKhoan">
            Account
          </label>
          {formik.errors.taiKhoan ? (
            <p className="text-danger">{formik.errors.taiKhoan}</p>
          ) : null}
          <input
            type="text"
            className="form-control"
            id="taiKhoan"
            name="taiKhoan"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="form-group">
          <label className="text-lg" htmlFor="matKhau">
            Password
          </label>
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
        <div className="form-group">
          <label className="text-lg" htmlFor="hoTen">
            Full name
          </label>
          {formik.errors.hoTen ? (
            <p className="text-danger">{formik.errors.hoTen}</p>
          ) : null}
          <input
            type="text"
            className="form-control"
            id="hoTen"
            name="hoTen"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="form-group">
          <label className="text-lg" htmlFor="soDT">
            Phone
          </label>
          {formik.errors.soDT ? (
            <p className="text-danger">{formik.errors.soDT}</p>
          ) : null}
          <input
            type="text"
            className="form-control"
            id="soDT"
            name="soDT"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="form-group">
          <label className="text-lg" htmlFor="maNhom">
            Group code
          </label>

          <input
            type="text"
            className="form-control"
            id="maNhom"
            name="maNhom"
            onChange={formik.handleChange}
            value={formik.values.maNhom}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="form-group">
          <label className="text-lg" htmlFor="email">
            Email
          </label>
          {formik.errors.email ? (
            <p className="text-danger">{formik.errors.email}</p>
          ) : null}
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="px-8 py-4 rounded-2xl bg-blue-700 mt-5 "
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;

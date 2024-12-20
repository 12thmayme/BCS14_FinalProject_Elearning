import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { registerApi } from "../../util/API/User/UserApi";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../util/Setting/Setting";

const Signup = () => {
  const navigate = useNavigate();

  const [userRegister, setUserRegister] = useState({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    soDT: "",
    maNhom: "",
    email: "",
  });
  const mutation = useMutation({
    mutationKey: ["registerApi"],
    mutationFn: registerApi,
    onSuccess: (data) => {
      console.log(data);
      alert("Đăng ký thành công");
      navigate("/users/login");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const handleChangeInput = (e) => {
    let { id, value } = e.target;
    setUserRegister({ ...userRegister, [id]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userRegister);
    mutation.mutateAsync(userRegister);
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
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="taiKhoan">Account</label>
          <input
            type="text"
            className="form-control"
            id="taiKhoan"
            name="taiKhoan"
            onChange={handleChangeInput}
            values={userRegister.taiKhoan}
          />
        </div>
        <div className="form-group">
          <label htmlFor="matKhau">Password</label>
          <input
            type="text"
            className="form-control"
            id="matKhau"
            name="matKhau"
            onChange={handleChangeInput}
            values={userRegister.matKhau}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hoTen">Full name</label>
          <input
            type="text"
            className="form-control"
            id="hoTen"
            name="hoTen"
            onChange={handleChangeInput}
            values={userRegister.hoTen || ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="soDT">Phone</label>
          <input
            type="text"
            className="form-control"
            id="soDT"
            name="soDT"
            onChange={handleChangeInput}
            values={userRegister.soDT || ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="maNhom">Group code</label>
          <input
            type="text"
            className="form-control"
            id="maNhom"
            name="maNhom"
            onChange={handleChangeInput}
            values={userRegister.maNhom}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={handleChangeInput}
            values={userRegister.email}
          />
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-primary mt-3"
            styles={{ padding: "15px 40px" }}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;

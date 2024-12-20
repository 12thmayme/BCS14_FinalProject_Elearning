import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../../util/API/User/UserApi";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../util/Setting/Setting";
const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    taiKhoan: "",
    matKhau: "",
  });
  const mutation = useMutation({
    mutationKey: ["loginApi"],
    mutationFn: loginApi,
    onSuccess: (data) => {
      console.log(data);
      alert("Đăng nhập thành công");
      const accessToken = data.accessToken;
      const userData = data;
      setCookie("accessToken", accessToken, 7);
      setCookie("userData", JSON.stringify(userData), 7);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const handleChangeInput = (e) => {
    let { id, value } = e.target;
    setUser({ ...user, [id]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    mutation.mutateAsync(user);
  };
  return (
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
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="taiKhoan">Account</label>
          <input
            type="text"
            className="form-control"
            id="taiKhoan"
            name="taiKhoan"
            onChange={handleChangeInput}
          />
        </div>
        <div className="form-group">
          <label htmlFor="matKhau">Password</label>
          <input
            type="password"
            className="form-control"
            id="matKhau"
            name="matKhau"
            onChange={handleChangeInput}
          />
        </div>
        <div className="d-flex justify-content-between align-items-end">
          <button
            type="submit"
            className="btn btn-primary mt-3"
            style={{ padding: "15px 40px" }}
          >
            Login
          </button>
          <NavLink to="/"> Back to home</NavLink>
        </div>
      </form>
    </div>
  );
};

export default Login;

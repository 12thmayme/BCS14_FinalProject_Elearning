import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-top  ">
        <ul className="d-flex align-item-center me-auto justify-content-end">
          <li>
            <NavLink to="./course-list">Blog</NavLink>
          </li>
          <li>
            <NavLink>Oline learning CyberSoft.vn</NavLink>
          </li>
          <li>
            <NavLink className="navbar-top_hotline">Hotline:0934567890</NavLink>
          </li>
          <li>
            <ul className="d-flex align-item-center">
              <li>
                <NavLink>
                  <i className="fa-brands fa-facebook-f"></i>
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <i className="fa-brands fa-youtube"></i>
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <nav className={`navbar navbar-bottom navbar-expand-lg `}>
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img
              src="./public/logoSybersoft.png"
              alt=""
              style={{ height: "70px" }}
            />
          </NavLink>

          <div className="d-flex align-items-center">
            <button
              className="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-search ">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                />
              </form>
            </div>
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <NavLink to="/">
                  Courses
                  <i className="fa-solid fa-angle-down"></i>
                </NavLink>
                <ul>
                  <li></li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink to="/">Blog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-button  ms-2 ">
            <NavLink to="/users/login" className="button_login">
              Login
            </NavLink>
            <NavLink to="/users/sign-up" className="button_login">
              Sign up
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

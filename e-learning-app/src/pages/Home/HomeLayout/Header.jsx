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
    <>
      <header className={`${scrolled ? "scrolled" : ""} hidden md:block`}>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
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
    </>
  );
};

export default Header;

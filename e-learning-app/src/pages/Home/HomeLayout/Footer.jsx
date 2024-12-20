import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row p-5">
            <div className="col-4">
              <NavLink className="navbar-brand" to="/">
                <img
                  src="./public/logoSybersoft.png"
                  alt=""
                  style={{ height: "70px" }}
                />
              </NavLink>
              <div>
                <ul className="d-flex align-item-center mt-3">
                  <li>
                    <NavLink className="footer_social">
                      <i className="fa-brands fa-facebook-f"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="footer_social">
                      <i className="fa-brands fa-youtube"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="footer_social">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-2">
              <h3 className="footer_title">Product</h3>
              <ul>
                <li>
                  <NavLink className="footer_item">Courses</NavLink>
                </li>
                <li>
                  <NavLink className="footer_item">Blog</NavLink>
                </li>
                <li>
                  <NavLink className="footer_item">Contact us</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-2">
              <h3 className="footer_title">General policies & support</h3>
              <ul>
                <li>
                  <NavLink className="footer_item">Blogs</NavLink>
                </li>
                <li>
                  <NavLink className="footer_item">Team of service</NavLink>
                </li>
                <li>
                  <NavLink className="footer_item">Privacy policy</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <h3 className="footer_title">Stay up to date</h3>
              <ul>
                <li className="d-flex flex-no-wrap">
                  <input type="text" placeholder="Email" />
                  <button>Get update</button>
                </li>
                <li>
                  <NavLink className="footer_item">Hotline:0123456789</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <p>https://cybersoft.edu.vn/</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

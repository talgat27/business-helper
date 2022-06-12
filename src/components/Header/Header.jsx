import React from "react";
import Logo from "../../images/logo.svg";
import "./Header.css";
import Login from "../../images/login.svg";

export default function Header() {
  return (
    <header>
      <div className="header">
        <nav className="navbar">
          <img className="logo" src={Logo} alt="" />
          <div className="navbar_right_content">
            <div className="Sign_in">
              <div className="Sign">
                <p>
                  <a href="#">Войти</a>
                </p>
              </div>
              <div className="login_logo">
                <img src={Login} alt="" />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

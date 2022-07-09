import React from "react";
import Logo from "../../images/logo.png";
import "./Header.css";
import ProfileIcon from "../../images/profile-icon.png";
import { Link } from "react-router-dom";

export default function Header({ login, children }) {
  return (
    <header>
      <div className="header-wrapper">
        <div className="header-container">
          <Link to="/HomePage/HomePage">
            <img className="header-logo" src={Logo} alt="Logo" />
          </Link>
          {login &&
            <Link className="header-btn" to="/Login/Login">
              <p className="header-btn-p">Войти</p>
              <img src={ProfileIcon} alt="Profile Icon" className="header-btn-img" />
            </Link>
          }
        </div>
      </div>
      {children}
    </header>
  );
}

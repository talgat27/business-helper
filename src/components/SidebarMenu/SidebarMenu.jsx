import React from "react";
import "./SidebarMenu.css";
import { Link } from 'react-router-dom';
import DocIcon from "../../images/doc-icon.png";
import ProfileIcon from "../../images/profile-icon.png";
import CloudIcon from "../../images/cloud-icon.png";
import TestIcon from "../../images/test-icon.png";
import UserIcon from "../../images/user-icon.png";
import ExitIcon from "../../images/exit-icon.png";
import EarthIcon from "../../images/earth-icon.png";

export default function SidebarMenu({ children }) {
  const onSearch = (value) => console.log(value);

  return (
    <div className="page-wrapper">
      <div className="menu-panel">
        <div className="menu-panel-title">
          <h1 className="menu-panel-title-h1">Codify</h1>
        </div>
        <div className="menu-panel-title-content">
          <div className="menu-panel-content-top">
            <button className="menu-panel-btn">
              <img src={DocIcon} alt="Document Icon" className="menu-panel-icon" />
              Документация
            </button>
            <button className="menu-panel-btn">
              <img src={ProfileIcon} alt="Profile Icon" className="menu-panel-icon" />
              Cотрудники
            </button>
            <button className="menu-panel-btn">
              <img src={CloudIcon} alt="Cloud Icon" className="menu-panel-icon" />
              База резюме
            </button>
            <button className="menu-panel-btn">
              <img src={TestIcon} alt="Test Icon" className="menu-panel-icon" />
              Тесты
            </button>
            <button className="menu-panel-btn">
              <img src={UserIcon} alt="User Icon" className="menu-panel-icon2" />
              Регистрация нового сотрудника
            </button>
          </div>
          <div className="menu-panel-content-bottom">
            <button className="menu-panel-btn">
              <img src={ProfileIcon} alt="Profile Icon" className="menu-panel-icon" />
              Alina Dzhakypova
            </button>
            <Link to="/HomePage/HomePage" className="menu-panel-link">
              <button className="menu-panel-exit-btn">
                <img src={ExitIcon} alt="Exit Icon" className="menu-panel-icon" />
                Выход
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="crm-content-panel">
        <div className="crm-content-panel-header-wrapper">
          <div className="crm-content-panel-header-content">
            <div className="crm-content-panel-header-icons">
              <input type="text" className="crm-content-panel-header-search" placeholder="Поиск"/>
              <button className="crm-content-panel-header-btn">
                <img src={EarthIcon} alt="Earth Icon" className="crm-content-panel-header-img"/>
              </button>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

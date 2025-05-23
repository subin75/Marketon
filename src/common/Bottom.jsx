import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Home from "../Icon/Home";
import Home2 from "../Icon/Home2";
import Heart from "../Icon/Heart";
import Fe_heart from "../Icon/Fe_heart";
import Mypage from "../Icon/Mypage";
import Mypage2 from "../Icon/Mypage2";
import "../scss/bottom.scss";

const Bottom = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveTab = () => {
    if (location.pathname.startsWith("/Home/List")) return "home";
    if (location.pathname.startsWith("/Home/Heartlist")) return "heart";
    if (location.pathname.startsWith("/Mypage/Mypage")) return "mypage";
    return "";
  };

  const active = getActiveTab();

  const tabs = [
    { key: "home", path: "/Home/List", icon: Home, activeIcon: Home2 },
    { key: "heart", path: "/Home/Heartlist", icon: Heart, activeIcon: Fe_heart },
    { key: "mypage", path: "/Mypage/Mypage", icon: Mypage, activeIcon: Mypage2 },
  ];

  const handleClick = (tabKey, path) => {
    navigate(path);
  };

  return (
    <div className="bottom-wrapper">
      <div className="bottom-nav">
        {tabs.map(({ key, path, icon: Icon, activeIcon: ActiveIcon }) => (
          <div
            key={key}
            className="bottom-item"
            onClick={() => handleClick(key, path)}
            style={{ cursor: "pointer" }}
          >
            {active === key ? <ActiveIcon /> : <Icon />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bottom;
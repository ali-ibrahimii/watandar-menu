import React from "react";
import { translations } from "../data/menuItems";
import { Icon } from "@iconify/react";
import LanguageSelector from "./LanguageSelector";

const Header = ({language, setLanguage}) => {
  return (
    <div className={`relative`}>
      <img src="header-bg.jpg" alt="" />
        <LanguageSelector language={language} setLanguage={setLanguage} />
      <div className="absolute top-9/12 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1>{translations[language]?.menu}</h1>
      </div>
      <img src="nav-header.png" alt="nav-header" className="w-7/12 absolute top-11/12 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      
    </div>
  );
};

export default Header;

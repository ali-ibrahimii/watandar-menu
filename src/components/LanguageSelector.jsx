import React, { useState } from 'react'
import { translations } from '../data/menuItems';

const LanguageSelector = ({language, setLanguage}) => {
  return (
      <div 
      dir={language === "fa" || language === "ar" ? "rtl" : "ltr"}
      className={`relative`}>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="absolute top-10/12 left-0 text-[12px] md:text-base border border-gray-300 rounded ml-2 bg-white shadow-md focus:outline-none transition-all md:h-8 w-9 h-5 pb-1 md:w-12" name="" id="">
          <option className="text-[12px]" value="fa">Fa</option>
          <option className="text-[12px]" value="ar">Ar</option>
          <option className="text-[12px]" value="en">En</option>
        </select>
      </div>
    );
}

export default LanguageSelector
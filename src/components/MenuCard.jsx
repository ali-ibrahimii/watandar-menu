import React from 'react'
import { menuItems, translations } from '../data/menuItems'

const MenuCard = ({language}) => {
  return (
    <div className="container mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 px-4 mt-5">
      {menuItems.map((item) => (
        <div key={item.id} className="relative  mt-18">
          {/* تصویر غذا */}
          <div className="absolute -top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-24 h-24">
            <img
              src={item.image}
              alt={item.name[language]}
              className="rounded-full w-full h-full border-3 border-white bg-cover shadow-lg"
            />
          </div>

          {/* اطلاعات غذا */}
          <div className="bg-gray-700 w-full h-50 p-5 rounded-xl pt-16 shadow-lg">
            <h3 className="text-[15px] font-semibold text-center">
              {item.name[language]}
            </h3>
            <p className={`text-gray-200 text-[14px] `}>
              {item.description[language]}
            </p>
            <p className="text-[12px] text-orange-300 font-bold text-center mt-2">
              {item.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default MenuCard
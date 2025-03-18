import React from 'react'
import { translations } from '../data/menuItems'

const Navbar = ({language}) => {
  return (
    <div>
        <ul className='flex items-center justify-center mt-5'>
          <li><a href="#" className='mx-5'>{translations[language]?.food}</a></li>
          <li><a href="#" className='mx-5'>{translations[language]?.salad}</a></li>
          <li><a href="#" className='mx-5'>{translations[language]?.drink}</a></li>
        </ul>
    </div>
  )
}

export default Navbar
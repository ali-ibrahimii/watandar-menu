import React, { useState } from 'react'
import Header from './components/Header'
import LanguageSelector from './components/LanguageSelector'
import Navbar from './components/Navbar'
import MenuCard from './components/MenuCard'
import AboutUs from './components/AboutUs'
import Address from './components/Address'

const App = () => {
    const [language, setLanguage] = useState('fa')
  return (
    <div dir={language == 'fa' || language === 'ar' ? 'rtl' : 'ltr'}>
      <Header language={language} setLanguage={setLanguage} />
      <Navbar language={language} />
      <MenuCard language={language} setLanguage={setLanguage} />
      <AboutUs />
      <Address />
    </div>
  )
}

export default App
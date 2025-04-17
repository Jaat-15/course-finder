import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/Navbar'
import AboutPage from './assets/Aboutpage';
import ContactPage from './assets/Contactpage';
import Allcourses from './assets/Allcourses';
import Coursedetail from './assets/Coursedetail';
import Homepage from './assets/Homepage'

function App() {
  
  
  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/allcourses" element={<Allcourses />} />
        <Route path="/course/:id" element={<Coursedetail />} />
      </Routes>
    </Router>
    </>
  )
}

export default App

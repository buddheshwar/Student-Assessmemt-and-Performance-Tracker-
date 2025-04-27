import React from 'react'
import { BrowserRouter, Router, Route, Routes, Link } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Contact from './Component/Contact/Contact'
import Footer from './Footer'
import AdminLogin from './Component/Admin/AdminLogin'
import StudentLogin from './Component/Student/StudentLogin'
import TeacherLogin from './Component/Teacher/TeacherLogin'
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/StudentLogin" element={<StudentLogin />} />
        <Route path="/TeacherLogin" element={<TeacherLogin />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;

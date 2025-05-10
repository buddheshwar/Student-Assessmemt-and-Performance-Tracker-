import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Contact from './Component/Contact/Contact'
import Footer from './Footer'
import AdminLogin from './Component/Admin/AdminLogin'
import StudentLogin from './Component/Student/StudentLogin'
import TeacherLogin from './Component/Teacher/TeacherLogin'
import AdminNav from './Component/Admin/AdminPanel/AdminNavbar'
import AdminNavbar from './Component/Admin/AdminPanel/AdminNavbar'
import { useAuth } from './Component/AuthContext/AuthContext'
import AdminDashboard from './Component/Admin/AdminDashboard/AdminDashboard'
import RedirectOnRefresh from './Component/ProtectedRoute/RedirectOnRefresh'
const App = () => {
  const { user } = useAuth();

  const renderNavbar = () =>{
    if (user?.role === 'admin') return <AdminNavbar />;
    return <Navbar />;

  }
  return (
    <div>
      <RedirectOnRefresh />
       {renderNavbar()}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path='/AdminNav' element={<AdminNav />} />
        <Route path="/Dashboard" element={<AdminDashboard />} />
        <Route path="/StudentLogin" element={<StudentLogin />} />
        <Route path="/TeacherLogin" element={<TeacherLogin />} />
        
      </Routes>
      <Footer />
    </div>
  )
}

export default App;

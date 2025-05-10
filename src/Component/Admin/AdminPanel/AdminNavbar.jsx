import React from 'react'
import img from '../../../assets/img/logo.png'
import { Link } from 'react-router-dom'
import { Route , Router , Routes , BrowserRouter } from 'react-router-dom'
import AdminTopNavbar from './AdminTopNavbar'
import AdminSidebar from './AdminSidebar'

const AdminNavbar = () => {
  return (
    <div >
      <AdminTopNavbar />
      <AdminSidebar />
    </div>
  )
}

export default AdminNavbar;
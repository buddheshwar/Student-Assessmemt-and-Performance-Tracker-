import React from 'react'
import './Admin.css'
import { Link } from 'react-router-dom'

const AdminSidebar = () => {
    return (
        <div>
            <div class="sidebar">
                <Link to="/Dashboard" class="logo">
                    {/* <i class='bx bx-book-bookmark'></i> */}
                    <img src="" alt='Logo' />
                    <div class="logo-name"><span class="text-warning">E</span><span class="darkTextColor">R</span><span class="text-warning">P</span></div>
                </Link>

                <ul class="side-menu-opener">
                    {/* <li>
                        <div class='open-arrow SidebarOpener'><i class='bx bxs-chevron-right'></i></div>
                    </li>  */}
                </ul>

                <ul class="side-menu main-side-board">
                    <li><Link ><i class='bx bxs-dashboard'></i>Dashboard</Link></li>
                    <li><Link ><i class='bx bxs-user-rectangle'></i>Teacher</Link></li>
                    <li><Link ><i class='bx bxs-user-detail'></i>Student</Link></li>
                    <li><Link ><i class='bx bx-book-bookmark'></i>Subjects</Link></li>
                    <li><Link ><i class='bx bx-list-check'></i>Attendence</Link></li>
                    <li><Link ><i class='bx bx-bookmark'></i>Notice Board</Link></li>
                    <li><Link ><i class='bx bx-table'></i>Time Table</Link></li>
                    <li><Link ><i class='bx bx-file-blank'></i>Syllabus</Link></li>
                    <li><Link ><i class='bx bx-note'></i>Notes</Link></li>
                    <li><Link ><i class='bx bx-paste'></i>Marks</Link></li>
                    <li><Link ><i class='bx bxs-bus'></i>Bus Service</Link></li>
                    <li><Link ><i class='bx bx-cog'></i>Settings</Link></li>
                </ul>
                <ul class="side-menu">
                    <li>
                        <a class="logout" data-bs-toggle="modal" data-bs-target="#logout-modal">
                            <i class='bx bx-log-out-circle'></i>
                            Logout
                        </a>
                    </li>
                </ul>
                
            </div>
            <div className='sidebarSpace'></div>
        </div>
    )
}

export default AdminSidebar
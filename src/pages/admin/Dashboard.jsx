/*import { Link, useNavigate } from "react-router-dom";

import './Student.css'

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="admin">
      <div className="welcome" >
        <h2>Welcome To Admin Panel</h2>
    </div>
    <div className="navbar">
      <Link to={'/ManageStudent'} className="navbar-links" onClick={()=>navigate('/ManageStudent')}>Manage Student</Link>
      <div className="navbar-links" onClick={()=>navigate('/ManageStaff')}>Manage Staffs</div>
      <div className="navbar-links">Clearance</div>
      <div className="navbar-links">Records</div>
      <Link to={'/Examination'} className="navbar-links" onClick={()=>navigate('/Examination')}>Examination Results</Link>
    </div>
      
        
    </div>
  )
}
export default Dashboard;





*/


//https://www.figma.com/make/C8ey3CexfZNSRtTv6WwEUx/Secondary-School-Management-System?t=j2yHi9khdMLGhMnU-0

import React, { useState } from "react";
import "./AdminDashboard.css"; // we'll create this file for styles

const AdminDashboard = () => {
  // State to track active sidebar item (optional, for UI feedback)
  const [activeItem, setActiveItem] = useState("dashboard");

  // Quick actions data for the left taskbar
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: "fa-th-large" },
    { id: "manageStudent", label: "Manage Student", icon: "fa-user-graduate" },
    { id: "manageStaff", label: "Manage Staff", icon: "fa-chalkboard-teacher" },
    { id: "announcement", label: "Announcement", icon: "fa-bullhorn" },
    { id: "examinations", label: "Examinations", icon: "fa-file-alt" },
    { id: "allStudents", label: "All Students", icon: "fa-users" },
  ];

  // Footer items (Settings & Logout)
  const footerItems = [
    { id: "settings", label: "Settings", icon: "fa-cog" },
    { id: "logout", label: "Logout", icon: "fa-sign-out-alt" },
  ];

  return (
    <div className="dashboard-container">
      {/* ========== LEFT SIDEBAR (TASKBAR) ========== */}
      <aside className="sidebar">
        {/* Brand / Logo */}
        <div className="sidebar-brand">
          <i className="fas fa-graduation-cap"></i>
          <span>Admin</span>
        </div>

        {/* Navigation – Quick Actions */}
        <nav className="nav-section">
          {navItems.map((item) => (
            <div
              key={item.id}
              className={`nav-item ${activeItem === item.id ? "active" : ""}`}
              onClick={() => setActiveItem(item.id)}
            >
              <i className={`fas ${item.icon}`}></i>
              {item.label}
            </div>
          ))}
          <div className="nav-divider"></div>
          {/* Extra "Reports" item to fill the space (optional) */}
          <div className="nav-item" style={{ opacity: 0.7 }}>
            <i className="fas fa-chart-line"></i> Reports
          </div>
        </nav>

        {/* Footer: Settings & Logout */}
        <div className="sidebar-footer">
          {footerItems.map((item) => (
            <div
              key={item.id}
              className={`nav-item ${activeItem === item.id ? "active" : ""}`}
              onClick={() => setActiveItem(item.id)}
            >
              <i className={`fas ${item.icon}`}></i>
              {item.label}
            </div>
          ))}
        </div>
      </aside>

      {/* ========== MAIN DASHBOARD CONTENT ========== */}
      <main className="main-content">
        {/* Top Bar: Title + User Badge */}
        <div className="top-bar">
          <h1>Admin Dashboard</h1>
          <div className="user-badge">
            <i className="fas fa-user-circle"></i> Admin User <span className="dot">·</span> Admin
          </div>
        </div>

        {/* Stats Cards: Total Students, Staff, Classes, Announcements */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-label">
              <i className="fas fa-user-graduate"></i> Total Students
            </div>
            <div className="stat-number">4</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">
              <i className="fas fa-users"></i> Total Staff
            </div>
            <div className="stat-number">3</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">
              <i className="fas fa-school"></i> Total Classes
            </div>
            <div className="stat-number">4</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">
              <i className="fas fa-bullhorn"></i> Announcements
            </div>
            <div className="stat-number">4</div>
          </div>
        </div>

        {/* Performance Overview Card */}
        <div className="performance-card">
          <h3>
            <i className="fas fa-chart-simple"></i> Performance Overview
          </h3>
          <div className="sub">Overall student performance metrics</div>
          <div className="performance-metric">
            <span className="big-number">85.4%</span>
            <span className="badge">
              <i className="fas fa-arrow-up"></i> Average Performance
            </span>
          </div>
        </div>

        {/* Buttons: Build, Default, Logout (matching the image) */}
        <div className="action-row">
          <button className="btn btn-primary">
            <i className="fas fa-rocket"></i> Build
          </button>
          <button className="btn btn-outline">
            <i className="fas fa-rotate-left"></i> Default
          </button>
          <button className="btn btn-danger">
            <i className="fas fa-sign-out-alt"></i> Logout
          </button>

          {/* Extra subtle hint: "Exams for all" – but the sidebar already has "Examinations" and "All Students" */}
          <div className="exams-hint">
            <i className="fas fa-clipboard-list"></i> Exams for all
          </div>
        </div>

        {/* Extra contextual info (optional) */}
        <div className="extra-info">
          <span>
            <i className="fas fa-check-circle"></i> 4 active examinations
          </span>
          <span>
            <i className="fas fa-clock"></i> 2 upcoming
          </span>
          <span>
            <i className="fas fa-flag-checkered"></i> All students have access
          </span>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
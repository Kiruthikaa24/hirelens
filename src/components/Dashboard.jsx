// src/components/DashboardLayout.jsx
import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import '../App.css';

const DashboardLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-wrapper">
      {/* Top Navbar */}
      <header className="navbar-glass">
  <h1 className="logo">HireLens</h1>
  <div className="nav-actions">
    <button className="nav-btn" onClick={() => navigate('/login')}>Login</button>
    <button className="nav-btn" onClick={() => navigate('/signup')}>Sign Up</button>
  </div>
</header>


      {/* Main Layout */}
      <div className="dashboard-container">
        <aside className="sidebar">
          <nav>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/upload">Upload</NavLink></li>
              <li><NavLink to="/results">Results</NavLink></li>
              <li><NavLink to="/roles">Job Roles</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </nav>
        </aside>

        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;





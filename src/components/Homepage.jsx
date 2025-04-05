import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import logo from '../assets/logo.png';
import banner2 from '../assets/banner2.jpg'; // Hero background
import banner from "../assets/wallpaper.jpg"; 

function Homepage({ onLogout }) {
  return (
    <div>
      {/* Top Bar */}
      <div className="top-bar bg-dark text-white py-1 px-3">
        <div className="top-bar-content d-flex justify-content-end gap-3 small">
          <span><i className="fa fa-info-circle"></i> About</span>
          <Link to="/contact" className="text-white text-decoration-none">
            <i className="fa fa-envelope"></i> Contact
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-light py-3 px-4">
        <div className="container-fluid d-flex justify-content-between align-items-center flex-wrap">
          <div className="d-flex align-items-center">
            <img src={logo} alt="ResumeAI Logo" className="logo me-3" />
            <div className="navigation-links d-flex gap-3">
              <Link to="/" className="text-dark text-decoration-none">Home</Link>
              <a href="#features" className="text-dark text-decoration-none">Features</a>
              <a href="#how-it-works" className="text-dark text-decoration-none">How It Works</a>
              <Link to="/contact" className="text-dark text-decoration-none">Contact</Link>
            </div>
          </div>
          <div className="right-navigation">
            <Link to="/login" className="btn btn-outline-primary me-2">Login</Link>
            <Link to="/signup" className="btn btn-primary">Sign Up</Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div
        className="hero-section text-white text-center"
        style={{
          backgroundImage: `url(${banner2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: '100px 20px'
        }}
      >
        <h1 className="display-4 fw-bold">Welcome to ResumeAI</h1>
        <p className="lead">Smarter Resume Screening with AI</p>
        <Link to="/signup" className="btn btn-lg btn-primary mt-3">Get Started</Link>
      </div>

      {/* Features Section */}
      <div className="container my-5" id="features">
        <h2 className="text-center mb-4">Our Features</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <i className="fa fa-file-alt fa-3x mb-2 text-primary"></i>
            <h5>Resume Parsing</h5>
            <p>Extract and analyze key data from resumes in seconds.</p>
          </div>
          <div className="col-md-4 mb-3">
            <i className="fa fa-briefcase fa-3x mb-2 text-success"></i>
            <h5>Job Matching</h5>
            <p>Match applicants to the right job roles using AI algorithms.</p>
          </div>
          <div className="col-md-4 mb-3">
            <i className="fa fa-chart-line fa-3x mb-2 text-warning"></i>
            <h5>Analytics Dashboard</h5>
            <p>Visualize screening insights, ranking, and performance metrics.</p>
          </div>
        </div>
      </div>

      <div
  className="how-it-works-section text-white text-center py-5"
  style={{
    backgroundImage: `url(${banner})`, // using wallpaper.jpg
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed', // for parallax effect
  }}
>
  <div className="container">
    <h1 className="mb-4">How It Works</h1>
    <ol className="list-unstyled fs-5">
      <li>1. Sign Up / Login to your account</li>
      <li>2. Upload your resume or import via LinkedIn</li>
      <li>3. System screens and ranks resumes based on job role</li>
    </ol>
  </div>
</div>


      {/* Footer */}
      <div className="footer-section bg-dark text-white py-4">
        <div className="container d-flex justify-content-between flex-wrap">
          <div>
            <h5>ResumeAI</h5>
            <p>&copy; 2024 ResumeAI Pvt. Ltd.</p>
          </div>
          <div>
            <h6>Quick Links</h6>
            <p><Link to="/privacy-policy" className="text-white text-decoration-none">Privacy Policy</Link></p>
            <p><Link to="/terms" className="text-white text-decoration-none">Terms of Service</Link></p>
          </div>
          <div>
            <h6>Connect</h6>
            <p>📧 support@resumeai.com</p>
            <p>📱 +91 98765 43210</p>
          </div>
        </div>
      </div>

      {/* Optional Logout Button */}
      {onLogout && (
        <div className="text-center mt-3">
          <button className="btn btn-danger" onClick={onLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default Homepage;

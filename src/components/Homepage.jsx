// Homepage.jsx
// src/components/Homepage.jsx
// src/components/Homepage.jsx
// src/components/Homepage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

import logo from '../assets/logo.png'; // Removed the duplicate import
import banner2 from '../assets/banner2.jpg'; // Hero background
import banner from "../assets/wallpaper.png"; // How it works background

function Homepage() {
  const [role, setRole] = useState('');
  const [files, setFiles] = useState([]);
  const [response, setResponse] = useState('');

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('role', role);
    for (let i = 0; i < files.length; i++) {
      formData.append('resumes', files[i]);
    }
  
    try {
      const res = await fetch('https://0a95-34-91-31-215.ngrok-free.app/filter', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
    } catch (err) {
      console.error('❌ Error:', err);
      setResponse('Request failed.');
    }
  };

  return (
    <div className="homepage">
      {/* Navigation Bar */}
      <nav className="navbar-glass">
        <img src={logo} alt="Logo" className="logo" />
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="#features">Features</Link>
          <Link to="/how-it-works">How It Works</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="auth-buttons">
          <Link to="/login" className="btn btn-outline-primary">Login</Link>
          <Link to="/signup" className="btn btn-primary">Sign Up</Link>
        </div>
      </nav>

      {/* Resume Upload & Role Input Section */}
      <section className="upload-resume-glass">
        <h2>Upload Your Resume</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <input
            type="text"
            placeholder="Enter Job Role (e.g., Web Developer)"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          /><br /><br />
          <input
            type="file"
            name="resumes"
            multiple
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx"
          /><br /><br />
          <button type="submit" className="btn btn-primary">Upload & Filter</button>
        </form>

        <div style={{ marginTop: '20px' }}>
          <strong>Server Response:</strong>
          <pre>{response}</pre>
        </div>
      </section>

      {/* Hero Section */}
      <header className="hero-glass">
        <div className="hero-content">
          <h1>Welcome to ResumeAI</h1>
          <p>Smarter Resume Screening with AI</p>
          <a href="#features" className="btn btn-primary">Get Started</a>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="features-glass">
        <h2>Our Features</h2>
        <div className="features-grid">
          <div>
            <h5>Resume Parsing</h5>
            <p>Extract and analyze key data from resumes in seconds.</p>
          </div>
          <div>
            <h5>Job Matching</h5>
            <p>Match applicants to the right job roles using AI algorithms.</p>
          </div>
          <div>
            <h5>Analytics Dashboard</h5>
            <p>Visualize screening insights, ranking, and performance metrics.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <div
        className="how-it-works-section text-center py-5"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          color: 'black', // Ensures text is visible on the background
        }}
      >
        <div className="container">
          <h1 className="mb-4">How It Works</h1>
          <ol className="list-unstyled fs-5 text-start mx-auto" style={{ maxWidth: '600px' }}>
            <li className="mb-2">1. Sign Up / Login to your account</li>
            <li className="mb-2">2. Upload your resume or import via LinkedIn</li>
            <li className="mb-2">3. System screens and ranks resumes based on job role</li>
          </ol>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer-glass">
        <div>
          <h5>ResumeAI</h5>
          <p>© 2024 ResumeAI Pvt. Ltd.</p>
        </div>
        <div>
          <h6>Quick Links</h6>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
        <div>
          <h6>Connect</h6>
          <p>📧 support@resumeai.com</p>
          <p>📱 +91 98765 43210</p>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;


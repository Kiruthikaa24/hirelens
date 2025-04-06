import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Signup() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5001/signup", {
        fullName: form.fullName,
        email: form.email,
        password: form.password
      });
      alert(response.data.message);
    } catch (err) {
      alert(err.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div className="signup-container d-flex align-items-center justify-content-center vh-100">
      <style>{`
        .signup-container {
          background: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw1.webp') no-repeat center center;
          background-size: cover;
          position: relative;
        }

        .signup-form {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          padding: 40px;
          border-radius: 15px;
          width: 100%;
          max-width: 500px;
          animation: fadeIn 1s ease-in-out;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }

        .form-control {
          background-color: rgba(255, 255, 255, 0.5) !important;
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #000;
        }

        .form-label {
          font-weight: bold;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <form onSubmit={handleSubmit} className="signup-form">
        <h3 className="text-center mb-4">Create your account</h3>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Full Name</label>
          <input type="text" id="fullName" className="form-control" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" id="email" className="form-control" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" id="password" className="form-control" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input type="password" id="confirmPassword" className="form-control" onChange={handleChange} />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary btn-lg px-5">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;



import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5001/login', { email, password });
      if (res.data.success) {
        setMsg(res.data.message || 'Login successful!');
        setSuccess(true);
        setTimeout(() => navigate('/dashboard'), 1000);
      } else {
        setMsg(res.data.message || 'Login failed');
        setSuccess(false);
      }
    } catch (err) {
      setMsg(err.response?.data?.error || 'Login failed');
      setSuccess(false);
    }
  };

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '850px',
    margin: 'auto',
    marginTop: '5%',
    boxShadow: '0 0 25px rgba(0, 0, 0, 0.2)',
    borderRadius: '20px',
    overflow: 'hidden',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(12px)',
    animation: 'slideFade 0.7s ease',
  };

  const formStyle = {
    flex: 1,
    padding: '40px',
    color: '#fff',
    background: 'rgba(0, 0, 0, 0.5)',
  };

  const imageStyle = {
    flex: 1,
  };

  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    marginBottom: '15px',
    border: 'none',
    borderRadius: '10px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#0d6efd',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    transition: 'background-color 0.3s ease',
  };

  return (
    <>
      {/* Bootstrap CDN */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      />
      {/* Animation keyframes */}
      <style>{`
        @keyframes slideFade {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        body {
          background-color: #f0f2f5;
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
      `}</style>

      <div style={containerStyle}>
        <div style={imageStyle}>
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt="Login"
            style={imgStyle}
          />
        </div>

        <div style={formStyle}>
          <h3 className="mb-4">Login</h3>
          <form onSubmit={handleLogin}>
            <label>Email address</label>
            <input
              type="email"
              placeholder="Enter email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
            />

            <button type="submit" style={buttonStyle}>Login</button>
          </form>

          {msg && (
            <p style={{ color: success ? 'lightgreen' : 'salmon', marginTop: '10px' }}>{msg}</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Login;



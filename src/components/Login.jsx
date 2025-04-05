import React from 'react';
import '../App.css'; // Make sure you create this CSS file

function Login() {
  return (
    <div className="login-container">
      <div className="login-image">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Login"
        />
      </div>

      <div className="login-form">
        <div className="social-login">
          <p className="login-title">Sign in with</p>
          <div className="social-icons">
            <button className="social-btn">📘</button>
            <button className="social-btn">🐦</button>
            <button className="social-btn">💼</button>
          </div>
        </div>

        <div className="divider">
          <span>Or</span>
        </div>

        <form>
          <label>Email address</label>
          <input type="email" placeholder="Enter email" required />

          <label>Password</label>
          <input type="password" placeholder="Enter password" required />

          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="/forgot-password">Forgot password?</a>

          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;

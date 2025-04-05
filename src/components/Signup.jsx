import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Signup() {
  return (
    <div className="container-fluid p-3 my-5 h-custom">
      <div className="row">
        {/* Left Image */}
        <div className="col-md-6 mb-4">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw1.webp"
            className="img-fluid"
            alt="Signup Illustration"
          />
        </div>

        {/* Signup Form */}
        <div className="col-md-6">
          <h3 className="mb-4">Create your account</h3>

          <form>
            {/* Full Name */}
            <div className="mb-4">
              <label htmlFor="fullName" className="form-label">Full Name</label>
              <input type="text" className="form-control form-control-lg" id="fullName" />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control form-control-lg" id="email" />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control form-control-lg" id="password" />
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input type="password" className="form-control form-control-lg" id="confirmPassword" />
            </div>

            {/* Submit Button */}
            <div className="text-center text-md-start mt-4 pt-2">
              <button type="submit" className="btn btn-primary btn-lg px-5">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;

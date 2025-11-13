import React from "react";


const Login = () => {
  return (
    <div className="login-wrapper d-flex align-items-center justify-content-center vh-100">
      <div className="login-card p-5 text-center">
        <h2 className="fw-bold mb-4 neon-text">Welcome Back</h2>
        <p className="text-light mb-4">Sign in to continue your journey</p>

        <form>
          <div className="form-group mb-4 text-start">
            <label className="text-light mb-2">Email address</label>
            <input
              type="email"
              className="form-control form-control-lg neon-input"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group mb-4 text-start">
            <label className="text-light mb-2">Password</label>
            <input
              type="password"
              className="form-control form-control-lg neon-input"
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="btn btn-neon w-100 py-2 mb-3">
            Login
          </button>

          <p className="text-light mt-3 mb-0">
            Don’t have an account?{" "}
            <a href="#" className="neon-link">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

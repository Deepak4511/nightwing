import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";

const API = "http://localhost:5000/api/auth";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`${API}/login`, formData);

      if (res.data.success) {
        toast.success("Login Successful!");

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("isLoggedIn", "true");

        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }

    setLoading(false);
  };

  return (
    <div className="login-page d-flex justify-content-center align-items-center my-5">
      <div className="login-card p-4 p-md-5">

        <div className="text-center mb-4">
          <div className="login-icon mb-3">
            <i className="bi bi-shield-lock"></i>
          </div>
          <h2 className="title">Welcome Back</h2>
          <p className="subtitle">Log in to access your dashboard and explore more features.</p>
        </div>

        <form onSubmit={handleSubmit}>
          
          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <div className="input-wrapper">
              <i className="bi bi-envelope input-icon"></i>
              <input
                type="email"
                name="email"
                className="form-control neon-input"
                placeholder="Enter your email"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <div className="input-wrapper">
              <i className="bi bi-lock input-icon"></i>
              <input
                type="password"
                name="password"
                className="form-control neon-input"
                placeholder="Enter password"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="text-end mb-4">
            <a href="#" className="forgot-link">Forgot Password?</a>
          </div>

          <button type="submit" className="btn neon-btn w-100" disabled={loading}>
            {loading ? "Please wait..." : "Login →"}
          </button>

          <p className="text-center mt-4 register-text">
            Don't have an account? <Link href="/auth/register">Register</Link>
          </p>

        </form>

      </div>
    </div>
  );
};

export default Login;

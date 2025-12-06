import React, { useState } from "react";
import axios from "axios";

const API = "http://localhost:5000/api/auth";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    userName: "",
    email: "",
    phone: "",
    birthDate: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${API}/register`, formData);
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="register-page d-flex justify-content-center align-items-center">
      <div className="register-card p-4 p-md-5">
        <div className="text-center mb-4">
          <div className="icon-circle mb-2">
            <i className="bi bi-stars"></i>
          </div>
          <h2 className="title">Create an Account</h2>
          <p className="subtitle">
            Join the community of extraordinary creators today.
          </p>
        </div>

        {message && (
          <div className="alert alert-info text-center">{message}</div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Row 1 */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="name"
                className="form-control neon-input"
                placeholder="e.g. John Doe"
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                name="userName"
                className="form-control neon-input"
                placeholder="e.g. nightwing_fan"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              name="email"
              className="form-control neon-input"
              placeholder="john@example.com"
              onChange={handleChange}
              required
            />
          </div>

          {/* Row 2 */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="text"
                name="phone"
                className="form-control neon-input"
                placeholder="+1 (555) 000-0000"
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Date of Birth</label>
              <input
                type="date"
                name="birthDate"
                className="form-control neon-input"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control neon-input"
              placeholder="••••••••"
              onChange={handleChange}
              required
            />
          </div>

          {/* Terms */}
          <div className="form-check mb-4">
            <input className="form-check-input" type="checkbox" required />
            <label className="form-check-label">
              I agree to the <a href="#">Terms of Service</a> and{" "}
              <a href="#">Privacy Policy</a>
            </label>
          </div>

          {/* Submit */}
          <button className="btn neon-btn w-100">Register →</button>

          <p className="text-center mt-3 login-link">
            Already have an account? <a href="#">Sign in</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

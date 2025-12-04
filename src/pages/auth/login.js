import React, { useState } from "react";
import { loginUser } from "../../services/auth";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await loginUser({ email, password });

      if (!res.success) {
        setError(res.message);
        setLoading(false);
        return;
      }

      // Redirect after login
      router.push("/admin");
    } catch (err) {
      setError("Something went wrong.");
      console.log(err);
    }

    setLoading(false);
  };

  return (
    <div className="login-wrapper d-flex align-items-center justify-content-center vh-100">
      <div className="login-card p-5 text-center">
        <h2 className="fw-bold mb-4 neon-text">Welcome Back</h2>
        <p className="text-light mb-4">Sign in to continue your journey</p>

        <form onSubmit={handleLogin}>
          <div className="form-group mb-4 text-start">
            <label className="text-light mb-2">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control form-control-lg neon-input"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group mb-4 text-start">
            <label className="text-light mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control form-control-lg neon-input"
              placeholder="Enter your password"
              required
            />
          </div>

          {error && (
            <p className="text-danger fw-bold mb-3 text-start">{error}</p>
          )}

          <button
            type="submit"
            className="btn btn-neon w-100 py-2 mb-3"
            disabled={loading}
          >
            {loading ? "Please wait..." : "Login"}
          </button>

          <p className="text-light mt-3 mb-0">
            Don’t have an account?{" "}
            <a href="/register" className="neon-link">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

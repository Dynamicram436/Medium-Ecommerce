import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Helmet } from "react-helmet-async";
const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedData = JSON.parse(localStorage.getItem("userData")) || {};
    if (
      savedData.email === formData.email &&
      savedData.password === formData.password
    ) {
      alert("Login Successful");
      navigate("/products");
    } else {
      alert("Invalid Credentials email and password ");
    }
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Login in  account to get started" />
        <meta name="keywords" content="login, signin, get in to account" />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-600">
        <form
          onSubmit={handleSubmit}
          className="container mx-auto p-4 max-w-md rounded-md border bg-white border-gray-300 shadow-lg"
        >
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <div className="relative">
            <TextField
              label="Password"
              name="password"
              variant="outlined"
              fullWidth
              margin="normal"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span
              className="absolute right-0 top-5 m-3 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </span>
          </div>
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
          <span>
            Don't have an account?{" "}
            <a href="/" className="text-blue-500 hover:underline">
              Register here
            </a>
          </span>
        </form>
      </div>
    </>
  );
};

export default Login;

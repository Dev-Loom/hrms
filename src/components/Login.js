import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { messages } from "../utils/messages";
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const loginEndpoint = "https://manpower-management-backend.onrender.com/v1/admin/login";
    try {
      const response = await fetch(loginEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: username, password: password }),
      });
      const data = await response.json();
      if (response.ok) {
        onLogin(data); // Pass data to parent component
        navigate("/home");
      } else {
        // Handle failed login
        toast.error(messages.INVALID_CREDENTIALS_MESSAGE);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <input className="mr-2 leading-tight" id="rememberMe" type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
            <label className="text-sm" htmlFor="rememberMe">
              Remember Me
            </label>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleLogin}>
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login";
import Home from "./components/Home";

export default function App() {
  const handleLogin = (data) => {
    console.log("User logged in with data:", data);
  };

  return (
    <Router>
      <div className="App">
        <ToastContainer />
        <Routes>
          {" "}
          <Route path="/" element={<Login onLogin={handleLogin} />} /> {/* Use 'element' prop to render component */}
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

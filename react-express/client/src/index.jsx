import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Sub from "./components/Sub";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { AuthProvider } from "./providers/AuthProvider";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sub" element={<Sub />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<App />} />
          <Route path="*" element={<h1>Not Found Page</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

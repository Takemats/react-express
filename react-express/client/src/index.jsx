import React from "react";
import ReactDOM from "react-dom/client";
import Game from "./components/Game";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { AuthProvider } from "./providers/AuthProvider";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Game />} />
          <Route path="*" element={<h1>Not Found Page</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
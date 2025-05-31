import React from "react";
import ReactDOM from "react-dom/client";
import Top from "./components/Top";
import Game from "./components/Games/Game";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { AuthProvider } from "./providers/AuthProvider";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/game" element={<Game />} />
          <Route path="*" element={<h1>Not Found Page</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
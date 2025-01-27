import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import AdminPanel from "./pages/admin";
import Client from "./pages/client";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/client" element={<Client />} />
    </Routes>
  );
}
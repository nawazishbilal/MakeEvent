import { Routes, Route } from "react-router-dom";

import Home from "@/pages/public/Home";

import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";

import AuthLayout from "@/layouts/AuthLayout";

export default function AppRouter() {
  return (
    <Routes>

      {/* Public */}

      <Route path="/" element={<Home />} />

      {/* Authentication */}

      <Route element={<AuthLayout />}>

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

      </Route>

    </Routes>
  );
}
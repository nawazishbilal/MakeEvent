import { Routes, Route } from "react-router-dom";

import Home from "../pages/public/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Explore from "../pages/public/Explore";
import EventDetails from "../pages/public/EventDetails";

export default function AppRoutes() {
    return (
        <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />

            <Route path="/events" element={<Explore />} />

            <Route path="/events/:id" element={<EventDetails />} />

        </Routes>
    );
}
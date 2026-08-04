import { Routes, Route } from "react-router-dom";
import Home from "@/pages/public/Home";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import AuthLayout from "@/layouts/AuthLayout";
import Dashboard from "@/pages/dashboard/Dashboard";
import DashboardLayout from "@/layouts/DashboardLayout";
import ProtectedRoute from "@/routes/ProtectedRoute";
import CreateEvent from "@/pages/dashboard/CreateEvent";
import MyEvents from "@/pages/dashboard/MyEvents";
import EventDetails from "@/pages/public/EventDetails";
import ExploreEvents from "@/pages/public/ExploreEvents";

export default function AppRouter() {
    return (
        <Routes>

            {/* Public */}

            <Route path="/" element={<Home />} />

            <Route path="/events" element={<ExploreEvents />} />

            <Route
                path="/events/:id"
                element={<EventDetails />}
            />

            <Route element={<ProtectedRoute />}>

                <Route element={<DashboardLayout />}>

                    <Route
                        path="/dashboard"
                        element={<Dashboard />}
                    />

                    <Route
                        path="/dashboard/create-event"
                        element={<CreateEvent />}
                    />

                    <Route
                        path="/dashboard/my-events"
                        element={<MyEvents />}
                    />

                </Route>

            </Route>

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
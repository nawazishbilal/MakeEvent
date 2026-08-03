import { createContext, useContext, useEffect, useState } from "react";

import {
    loginUser,
    logoutUser,
    registerUser,
    getCurrentUser,
} from "@/services/auth.service";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    // --------------------------
    // Fetch current logged in user
    // --------------------------

    async function fetchCurrentUser() {
        try {
            const response = await getCurrentUser();

            setUser(response.data.data.user);
        } catch {
            setUser(null);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchCurrentUser();
    }, []);

    // --------------------------
    // Register
    // --------------------------

    async function register(data) {
        const response = await registerUser(data);

        setUser(response.data.data.user);

        return response;
    }

    // --------------------------
    // Login
    // --------------------------

    async function login(data) {
        const response = await loginUser(data);

        setUser(response.data.data.user);

        return response;
    }

    // --------------------------
    // Logout
    // --------------------------

    async function logout() {
        await logoutUser();

        setUser(null);
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,

                login,
                logout,
                register,

                fetchCurrentUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}

export default AuthContext;
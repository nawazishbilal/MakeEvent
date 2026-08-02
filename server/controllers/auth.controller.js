import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";
import { createUser, loginUser } from "../services/auth.service.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

export const register = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const user = await createUser({
        name,
        email,
        password,
    });

    const token = generateToken(user._id);

    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(201).json(
        new ApiResponse(201, "Registration successful", {
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        })
    );
});

export const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await loginUser({
        email,
        password,
    });

    const token = generateToken(user._id);

    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json(
        new ApiResponse(200, "Login successful", {
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        })
    );
});
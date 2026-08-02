import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

export const register = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
  
    const existingUser = await User.findOne({ email });
  
    if (existingUser) {
      throw new ApiError(409, "User already exists");
    }
  
    const user = await User.create({
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
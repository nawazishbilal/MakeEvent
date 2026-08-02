import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import errorHandler from "./middleware/error.middleware.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use(
    cors({
        origin: process.env.CLIENT_URL,
        credentials: true,
    })
);

app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use(errorHandler);

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Welcome to MakeEvent API 🚀",
    });
});

export default app;
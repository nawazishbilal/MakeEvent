import express from "express";
import { register } from "../controllers/auth.controller.js";
import validate from "../middleware/validate.middleware.js";
import { registerValidator } from "../validators/auth.validator.js";
import { login } from "../controllers/auth.controller.js";
import { loginValidator } from "../validators/auth.validator.js";
import authMiddleware from "../middleware/auth.middleware.js";
import { getCurrentUser } from "../controllers/auth.controller.js";
import { logout } from "../controllers/auth.controller.js";

const router = express.Router();

router.post(
    "/register",
    registerValidator,
    validate,
    register
);

router.post(
    "/login",
    loginValidator,
    validate,
    login
);

router.get(
    "/me",
    authMiddleware,
    getCurrentUser
);

router.post(
    "/logout",
    authMiddleware,
    logout
);

export default router;
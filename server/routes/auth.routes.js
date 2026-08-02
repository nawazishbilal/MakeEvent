import express from "express";
import { register } from "../controllers/auth.controller.js";
import validate from "../middleware/validate.middleware.js";
import { registerValidator } from "../validators/auth.validator.js";
import { login } from "../controllers/auth.controller.js";
import { loginValidator } from "../validators/auth.validator.js";

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

export default router;
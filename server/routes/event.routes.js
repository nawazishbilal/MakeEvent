import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import authorize from "../middleware/role.middleware.js";
import validate from "../middleware/validate.middleware.js";
import { USER_ROLES } from "../constants/roles.js";
import { create } from "../controllers/event.controller.js";
import { createEventValidator } from "../validators/event.validator.js";

const router = express.Router();

router.post(

    "/",

    authMiddleware,

    authorize(

        USER_ROLES.ORGANIZER,

        USER_ROLES.ADMIN

    ),

    createEventValidator,

    validate,

    create

);

export default router;
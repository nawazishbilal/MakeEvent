import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import authorize from "../middleware/role.middleware.js";
import validate from "../middleware/validate.middleware.js";
import { USER_ROLES } from "../constants/roles.js";
import { create, getMine, getOne, update, remove, getAll, register } from "../controllers/event.controller.js";
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

router.get(
    "/my",
    authMiddleware,
    authorize(
        USER_ROLES.ORGANIZER,
        USER_ROLES.ADMIN
    ),
    getMine
);

router.get("/", getAll);

router.post(
    "/:id/register",
    authMiddleware,
    register
);

router.post(
    "/:id/register",
    authMiddleware,
    register
);

router.get(
    "/:id",
    authMiddleware,
    getOne
);

router.put(
    "/:id",
    authMiddleware,
    authorize(
        USER_ROLES.ORGANIZER,
        USER_ROLES.ADMIN
    ),
    update
);

router.delete(
    "/:id",
    authMiddleware,
    authorize(
        USER_ROLES.ORGANIZER,
        USER_ROLES.ADMIN
    ),
    remove
);

export default router;
import { body } from "express-validator";

export const createEventValidator = [

    body("title")
        .trim()
        .notEmpty()
        .withMessage("Title is required")
        .isLength({ max: 100 }),

    body("description")
        .trim()
        .notEmpty()
        .withMessage("Description is required"),

    body("category")
        .trim()
        .notEmpty()
        .withMessage("Category is required"),

    body("venue")
        .trim()
        .notEmpty()
        .withMessage("Venue is required"),

    body("startDate")
        .isISO8601()
        .withMessage("Invalid start date"),

    body("endDate")
        .isISO8601()
        .withMessage("Invalid end date"),

    body("registrationDeadline")
        .isISO8601()
        .withMessage("Invalid registration deadline"),

    body("maxParticipants")
        .isInt({ min: 1 })
        .withMessage("Invalid participant count"),
];
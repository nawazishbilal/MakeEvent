import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

import { createEvent } from "../services/event.service.js";

export const create = asyncHandler(async (req, res) => {

    const event = await createEvent({

        ...req.body,

        organizer: req.user._id

    });

    return res.status(201).json(

        new ApiResponse(

            201,

            "Event created successfully",

            event

        )

    );

});
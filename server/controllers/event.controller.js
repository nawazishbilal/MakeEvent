import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

import { createEvent, getMyEvents, getEventById, updateEvent, deleteEvent, getAllEvents, registerForEvent } from "../services/event.service.js";

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

export const getMine = asyncHandler(async (req, res) => {
    const events = await getMyEvents(req.user._id);

    return res.status(200).json(
        new ApiResponse(
            200,
            "Events fetched successfully",
            { events }
        )
    );
});

export const getOne = asyncHandler(async (req, res) => {
    const event = await getEventById(req.params.id);

    return res.status(200).json(
        new ApiResponse(
            200,
            "Event fetched successfully",
            { event }
        )
    );
});

export const update = asyncHandler(async (req, res) => {
    const event = await updateEvent(
        req.params.id,
        req.user._id,
        req.body
    );

    return res.status(200).json(
        new ApiResponse(
            200,
            "Event updated successfully",
            { event }
        )
    );
});

export const remove = asyncHandler(async (req, res) => {
    await deleteEvent(
        req.params.id,
        req.user._id
    );

    return res.status(200).json(
        new ApiResponse(
            200,
            "Event deleted successfully"
        )
    );
});

export const getAll = asyncHandler(async (req, res) => {
    const events = await getAllEvents();

    return res.status(200).json(
        new ApiResponse(
            200,
            "Events fetched successfully",
            { events }
        )
    );
});

export const register = asyncHandler(async (req, res) => {

    const event = await registerForEvent(req.params.id);

    return res.status(200).json(
        new ApiResponse(
            200,
            "Registration successful",
            { event }
        )
    );

});
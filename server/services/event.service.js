import Event from "../models/Event.js";
import ApiError from "../utils/ApiError.js";
import Registration from "../models/Registration.js";

export const createEvent = async (eventData) => {
    return await Event.create(eventData);
};

export const getMyEvents = async (organizerId) => {
    return await Event.find({ organizer: organizerId })
        .sort({ createdAt: -1 });
};

export const getEventById = async (eventId) => {
    const event = await Event.findById(eventId);

    if (!event) {
        throw new ApiError(404, "Event not found");
    }

    return event;
};

export const updateEvent = async (eventId, organizerId, updateData) => {
    const event = await Event.findOneAndUpdate(
        {
            _id: eventId,
            organizer: organizerId,
        },
        updateData,
        {
            new: true,
            runValidators: true,
        }
    );

    if (!event) {
        throw new ApiError(404, "Event not found");
    }

    return event;
};

export const deleteEvent = async (eventId, organizerId) => {
    const event = await Event.findOneAndDelete({
        _id: eventId,
        organizer: organizerId,
    });

    if (!event) {
        throw new ApiError(404, "Event not found");
    }

    return event;
};

export const getAllEvents = async () => {
    return await Event.find({
        status: { $ne: "cancelled" },
    })
        .populate("organizer", "name")
        .sort({ startDate: 1 });
};

export const registerForEvent = async (eventId, participantId) => {
    const event = await Event.findById(eventId);

    if (!event) {
        throw new ApiError(404, "Event not found");
    }

    if (event.registrationCount >= event.maxParticipants) {
        throw new ApiError(400, "Event is full");
    }

    const existingRegistration = await Registration.findOne({
        event: eventId,
        participant: participantId,
    });

    if (existingRegistration) {
        throw new ApiError(400, "You are already registered for this event");
    }

    await Registration.create({
        event: eventId,
        participant: participantId,
    });

    event.registrationCount += 1;

    await event.save();

    return event;
};
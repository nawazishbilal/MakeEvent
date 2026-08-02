import Event from "../models/Event.js";
import ApiError from "../utils/ApiError.js";

export const createEvent = async (eventData) => {

    return await Event.create(eventData);

};
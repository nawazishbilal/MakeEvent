import api from "./api";

export const createEvent = (data) => api.post("/events", data);

export const getMyEvents = () => api.get("/events/my");

export const getEventById = (id) => api.get(`/events/${id}`);

export const updateEvent = (id, data) =>
  api.put(`/events/${id}`, data);

export const deleteEvent = (id) =>
  api.delete(`/events/${id}`);

// export const getAllEvents = async () => {
//     return await Event.find({
//         status: { $ne: "cancelled" },
//     })
//         .populate("organizer", "name")
//         .sort({ startDate: 1 });
// };

export const getAllEvents = () =>
    api.get("/events");

export const registerForEvent = (id) =>
    api.post(`/events/${id}/register`);
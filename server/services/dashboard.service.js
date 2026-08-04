import Event from "../models/event.model.js";

export async function getDashboardStats(userId) {
  const totalEvents = await Event.countDocuments({
    organizer: userId,
  });

  const activeEvents = await Event.countDocuments({
    organizer: userId,
    status: "published",
  });

  const upcomingEvents = await Event.countDocuments({
    organizer: userId,
    eventDate: {
      $gte: new Date(),
    },
  });

  return {
    totalEvents,
    activeEvents,
    upcomingEvents,
  };
}

export async function getRecentEvents(userId) {
  return Event.find({
    organizer: userId,
  })
    .sort({
      createdAt: -1,
    })
    .limit(5)
    .select("title venue eventDate status createdAt");
}
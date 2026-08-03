import { useQuery } from "@tanstack/react-query";
import { getAllEvents } from "@/services/event.service";

export default function useExploreEvents() {
  return useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const res = await getAllEvents();
      return res.data.data.events;
    },
  });
}
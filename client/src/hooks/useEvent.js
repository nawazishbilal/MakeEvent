import { useQuery } from "@tanstack/react-query";
import { getMyEvents } from "@/services/event.service";
import { getEventById } from "@/services/event.service";

export function useMyEvents() {
  return useQuery({
    queryKey: ["my-events"],
    queryFn: async () => {
      const res = await getMyEvents();
      return res.data.data.events;
    },
  });
}

export default function useEvent(id) {
    return useQuery({
      queryKey: ["event", id],
      queryFn: async () => {
        const res = await getEventById(id);
        return res.data.data.event;
      },
      enabled: !!id,
    });
  }
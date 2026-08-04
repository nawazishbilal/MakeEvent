import { useQuery } from "@tanstack/react-query";
import { getMyEvents } from "@/services/event.service";

export default function useMyEvents() {
  return useQuery({
    queryKey: ["my-events"],
    queryFn: async () => {
      const res = await getMyEvents();
      return res.data.data.events;
    },
  });
}
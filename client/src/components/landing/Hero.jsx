import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

      <div className="mb-4 rounded-full border px-4 py-2 text-sm">
        🚀 Event Management Made Simple
      </div>

      <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight md:text-7xl">
        Organize College Events
        <span className="text-primary">
          {" "}Effortlessly
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-muted-foreground text-lg">
        Create, manage, register and track events with built-in analytics,
        waitlists, smart search and QR attendance.
      </p>

      <div className="mt-10 flex gap-4">
        <Button size="lg">
          Explore Events
        </Button>

        <Button variant="outline" size="lg">
          <CalendarDays className="mr-2 h-5 w-5" />
          Create Event
        </Button>
      </div>

    </section>
  );
}
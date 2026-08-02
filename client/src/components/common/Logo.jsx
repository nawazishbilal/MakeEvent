import { CalendarDays } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md">
        <CalendarDays className="h-5 w-5" />
      </div>

      <div>
        <h2 className="text-lg font-bold leading-none">
          MakeEvent
        </h2>

        <p className="text-xs text-muted-foreground">
          Event Management Platform
        </p>
      </div>
    </div>
  );
}
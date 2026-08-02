import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, MapPin } from "lucide-react";

export default function EventCard({
  title,
  date,
  venue,
  category,
}) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-xl">

      <div className="h-44 bg-gradient-to-r from-indigo-500 to-violet-600" />

      <CardContent className="space-y-4 p-6">

        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
          {category}
        </span>

        <h3 className="text-xl font-semibold">
          {title}
        </h3>

        <div className="flex items-center gap-2 text-muted-foreground">
          <CalendarDays size={16} />
          {date}
        </div>

        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin size={16} />
          {venue}
        </div>

      </CardContent>

    </Card>
  );
}
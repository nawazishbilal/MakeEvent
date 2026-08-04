import { Link } from "react-router-dom";
import { CalendarDays, ClipboardList, Clock3, CheckCircle2 } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import useMyEvents from "@/hooks/useMyEvents";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const { user } = useAuth();
  const { data: events = [], isLoading } = useMyEvents();

  if (isLoading) {
    return (
      <div className="text-center py-10">
        Loading dashboard...
      </div>
    );
  }

  const totalEvents = events.length;

  const draftEvents = events.filter(
    (event) => event.status === "draft"
  ).length;

  const upcomingEvents = events.filter(
    (event) => event.status === "upcoming"
  ).length;

  const completedEvents = events.filter(
    (event) => event.status === "completed"
  ).length;

  return (
    <div className="space-y-8">

      <div className="flex flex-col justify-between gap-6 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 p-8 text-white lg:flex-row lg:items-center">

        <div>

          <h1 className="text-4xl font-bold">
            Welcome back, {user?.name}! 👋
          </h1>

          <p className="mt-2 text-violet-100">
            Manage your events, registrations and participants.
          </p>

        </div>

        <Link to="/dashboard/create-event">
          <Button variant="secondary">
            Create Event
          </Button>
        </Link>

      </div>

      {/* Statistics */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Total Events"
          value={totalEvents}
          icon={<ClipboardList size={22} />}
        />

        <StatCard
          title="Draft"
          value={draftEvents}
          icon={<Clock3 size={22} />}
        />

        <StatCard
          title="Upcoming"
          value={upcomingEvents}
          icon={<CalendarDays size={22} />}
        />

        <StatCard
          title="Completed"
          value={completedEvents}
          icon={<CheckCircle2 size={22} />}
        />

      </div>

      <div className="grid gap-6 lg:grid-cols-3">

        {/* Recent Events */}

        <Card className="lg:col-span-2">

          <CardHeader>
            <CardTitle>Recent Events</CardTitle>
          </CardHeader>

          <CardContent>

            {events.length === 0 ? (

              <div className="space-y-4">

                <p className="text-muted-foreground">
                  You haven't created any events yet.
                </p>

                <Link to="/dashboard/create-event">
                  <Button>Create your first event</Button>
                </Link>

              </div>

            ) : (

              <div className="space-y-4">

                {events.slice(0, 5).map((event) => (

                  <div
                    key={event._id}
                    className="flex items-center justify-between rounded-xl border p-4"
                  >

                    <div>

                      <h3 className="font-semibold">
                        {event.title}
                      </h3>

                      <p className="text-sm text-muted-foreground">
                        {event.category} • {event.venue}
                      </p>

                    </div>

                    <div className="text-right">

                      <StatusBadge status={event.status} />

                      <p className="mt-2 text-sm text-muted-foreground">
                        {new Date(event.startDate).toLocaleDateString()}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            )}

          </CardContent>

        </Card>

        {/* Trending */}

        <Card>

          <CardHeader>
            <CardTitle>🔥 Trending</CardTitle>
          </CardHeader>

          <CardContent>

            {[...events]
              .sort(
                (a, b) =>
                  b.registrationCount -
                  a.registrationCount
              )
              .slice(0, 5)
              .map((event, index) => (

                <div
                  key={event._id}
                  className="mb-4 flex items-center justify-between last:mb-0"
                >

                  <div>

                    <p className="font-medium">

                      #{index + 1} {event.title}

                    </p>

                    <p className="text-xs text-muted-foreground">

                      {event.category}

                    </p>

                  </div>

                  <span className="font-bold">

                    {event.registrationCount}

                  </span>

                </div>

              ))}

          </CardContent>

        </Card>

      </div>

    </div>
  );
}

function StatCard({ title, value, icon }) {
  return (
    <Card>

      <CardContent className="flex items-center justify-between p-6">

        <div>

          <p className="text-sm text-muted-foreground">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {value}
          </h2>

        </div>

        <div className="rounded-full bg-muted p-3">
          {icon}
        </div>

      </CardContent>

    </Card>
  );
}

function StatusBadge({ status }) {

  const styles = {
    draft: "bg-yellow-100 text-yellow-700",
    upcoming: "bg-green-100 text-green-700",
    completed: "bg-blue-100 text-blue-700",
    cancelled: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium ${
        styles[status] || "bg-gray-100 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
}
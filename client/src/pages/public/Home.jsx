import { Link } from "react-router-dom";
import { CalendarDays, ArrowRight, Users, Trophy } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import useExploreEvents from "@/hooks/useExploreEvents";

export default function Home() {

  const { user } = useAuth();
  const { data: events = [] } = useExploreEvents();

  const featuredEvents = events.slice(0, 3);
  const totalEvents = events.length;

  const totalRegistrations = events.reduce(
    (sum, event) => sum + event.registrationCount,
    0
  );

  const upcomingEvents = events.filter(
    (event) => event.status === "upcoming"
  ).length;
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Navbar */}

      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <Link
            to="/"
            className="text-2xl font-bold text-violet-600"
          >
            MakeEvent
          </Link>

          <nav className="hidden items-center gap-8 md:flex">

            <Link
              to="/"
              className="text-sm font-medium hover:text-violet-600"
            >
              Home
            </Link>

            <Link
              to="/events"
              className="text-sm font-medium hover:text-violet-600"
            >
              Explore
            </Link>

            {user && (
              <Link
                to="/dashboard"
                className="text-sm font-medium hover:text-violet-600"
              >
                Dashboard
              </Link>
            )}

          </nav>

          <div className="flex gap-3">

            {user ? (

              <Link to="/dashboard">

                <Button>
                  Dashboard
                </Button>

              </Link>

            ) : (

              <>
                <Link to="/login">
                  <Button variant="outline">
                    Login
                  </Button>
                </Link>

                <Link to="/register">
                  <Button>
                    Sign Up
                  </Button>
                </Link>
              </>

            )}

          </div>

        </div>
      </header>

      {/* Hero */}

      <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">

        <div className="rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700">
          Event Management Platform
        </div>

        <h1 className="mt-8 max-w-4xl text-6xl font-extrabold leading-tight">

          Create,

          <span className="text-violet-600">
            {" "}Manage{" "}
          </span>

          & Discover Events

        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">

          A modern platform for organizing college events,
          managing registrations, and discovering exciting
          competitions across campus.

        </p>

        <div className="mt-10 flex gap-4">

          <Link to="/events">

            <Button size="lg">

              Explore Events

              <ArrowRight className="ml-2 h-4 w-4" />

            </Button>

          </Link>

          <Link to="/dashboard/create-event">

            <Button
              size="lg"
              variant="outline"
            >
              Create Event
            </Button>

          </Link>

        </div>

      </section>

      {/* Statistics */}

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-24 md:grid-cols-3">

        <StatCard
          icon={<CalendarDays size={26} />}
          value={totalEvents}
          label="Events Hosted"
        />

        <StatCard
          icon={<Users size={26} />}
          value={totalRegistrations}
          label="Participants"
        />

        <StatCard
          icon={<Trophy size={26} />}
          value={upcomingEvents}
          label="Organizers"
        />

      </section>

      {/* Featured Events */}

      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-center text-4xl font-bold">
            Featured Events
          </h2>

          <p className="mt-3 text-center text-gray-500">
            Discover the latest events happening around campus.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {featuredEvents.map((event) => (

              <Card
                key={event._id}
                className="transition hover:-translate-y-1 hover:shadow-xl"
              >

                <CardContent className="space-y-4 p-6">

                  <div className="flex items-center justify-between">

                    <span className="rounded-full bg-violet-100 px-3 py-1 text-sm text-violet-700">
                      {event.category}
                    </span>

                    <span className="capitalize text-sm text-gray-500">
                      {event.status}
                    </span>

                  </div>

                  <h3 className="text-2xl font-bold">
                    {event.title}
                  </h3>

                  <p className="line-clamp-3 text-gray-600">
                    {event.description}
                  </p>

                  <div className="space-y-1 text-sm text-gray-500">

                    <p>
                      📍 {event.venue}
                    </p>

                    <p>
                      📅 {new Date(event.startDate).toLocaleDateString()}
                    </p>

                  </div>

                  <Link to={`/events/${event._id}`}>

                    <Button className="mt-4 w-full">
                      View Details
                    </Button>

                  </Link>

                </CardContent>

              </Card>

            ))}

          </div>

        </div>

      </section>

      <section className="py-20">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="mb-12 text-center text-4xl font-bold">
            Why Choose MakeEvent?
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <FeatureCard
              title="Secure Authentication"
              text="JWT authentication with protected routes."
            />

            <FeatureCard
              title="Event Management"
              text="Create and manage events effortlessly."
            />

            <FeatureCard
              title="Real-Time Dashboard"
              text="Track your events from one place."
            />

            <FeatureCard
              title="Easy Discovery"
              text="Find exciting events with powerful search."
            />

          </div>

        </div>

      </section>

      <section className="bg-slate-50 py-20">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="mb-12 text-center text-4xl font-bold">
            Built With
          </h2>

          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">

            {[
              "React",
              "Express",
              "MongoDB",
              "Tailwind",
              "JWT",
              "React Query",
            ].map((tech) => (

              <Card key={tech}>

                <CardContent className="py-8 text-center">

                  <p className="font-semibold">
                    {tech}
                  </p>

                </CardContent>

              </Card>

            ))}

          </div>

        </div>

      </section>

      <footer className="border-t bg-white py-8">

        <div className="mx-auto max-w-7xl px-6 text-center text-gray-500">

          © 2026 MakeEvent • Built using React, Express & MongoDB

        </div>

      </footer>

    </div>
  );
}

function StatCard({ icon, value, label }) {
  return (
    <Card>

      <CardContent className="flex flex-col items-center gap-4 py-8">

        <div className="rounded-full bg-violet-100 p-4 text-violet-600">
          {icon}
        </div>

        <h2 className="text-4xl font-bold">
          {value}
        </h2>

        <p className="text-muted-foreground">
          {label}
        </p>

      </CardContent>

    </Card>
  );
}

function FeatureCard({ title, text }) {
  return (
    <Card>

      <CardContent className="space-y-3 p-6">

        <h3 className="text-xl font-semibold">
          {title}
        </h3>

        <p className="text-gray-600">
          {text}
        </p>

      </CardContent>

    </Card>
  );
}
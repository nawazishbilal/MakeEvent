import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useExploreEvents from "@/hooks/useExploreEvents";
import { useAuth } from "@/context/AuthContext";

export default function ExploreEvents() {
    const { user } = useAuth();
    const { data: events = [], isLoading } = useExploreEvents();

    const [search, setSearch] = useState("");

    const filteredEvents = useMemo(() => {
        const query = search.toLowerCase();

        return events.filter((event) =>
            event.title.toLowerCase().includes(query) ||
            event.category.toLowerCase().includes(query) ||
            event.venue.toLowerCase().includes(query)
        );
    }, [events, search]);

    if (isLoading) {
        return (
            <div className="flex min-h-[50vh] items-center justify-center">

                <p className="text-lg text-muted-foreground">
                    Loading events...
                </p>

            </div>
        );
    }

    return (
        <div>
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

            <div className="min-h-screen bg-slate-50 px-6 py-8 md:px-12 lg:px-24">
                <div className="bg-gradient-to-r from-violet-600 to-indigo-600 p-10 text-white">

                    <h1 className="text-5xl font-bold">
                        Explore Events
                    </h1>

                    <p className="mt-3 max-w-2xl text-violet-100 text-lg">
                        Discover competitions, workshops and exciting events happening around campus.
                    </p>

                </div>

                <div className="relative">

                    <Card className="mt-8">

                        <CardContent className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">

                            <div>

                                <h2 className="text-xl font-semibold">
                                    Find Your Next Event
                                </h2>

                                <p className="text-muted-foreground">
                                    Search by title, category or venue.
                                </p>

                            </div>

                            <Input
                                placeholder="Search events..."
                                value={search}
                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }
                                className="max-w-sm"
                            />

                        </CardContent>

                    </Card>

                </div>

                <div className="mt-8 flex items-center justify-between">

                    <h2 className="text-2xl font-bold">

                        {filteredEvents.length} Event
                        {filteredEvents.length !== 1 && "s"}

                    </h2>

                    <p className="text-muted-foreground">

                        Showing latest events

                    </p>

                </div>

                {filteredEvents.length === 0 ? (

                    <Card>

                        <CardContent className="py-16 text-center">

                            <h3 className="text-2xl font-semibold">
                                No Events Found
                            </h3>

                            <p className="mt-2 text-muted-foreground">
                                Try searching with a different keyword.
                            </p>

                        </CardContent>

                    </Card>

                ) : (
                    < div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                        {filteredEvents.map((event) => (
                            <Link
                                key={event._id}
                                to={`/events/${event._id}`}
                            >
                                <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                                    <CardHeader>

                                        <div className="flex items-center justify-between">

                                            <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">

                                                {event.category}

                                            </span>

                                            <StatusBadge
                                                status={event.status}
                                            />

                                        </div>

                                        <CardTitle className="pt-4">

                                            {event.title}

                                        </CardTitle>

                                    </CardHeader>

                                    <CardContent className="space-y-4">

                                        <p className="line-clamp-2 text-muted-foreground">

                                            {event.description}

                                        </p>

                                        <div className="space-y-2 text-sm">

                                            <p>
                                                📍 {event.venue}
                                            </p>

                                            <p>
                                                📅 {new Date(event.startDate).toLocaleDateString()}
                                            </p>

                                            <p>

                                                👥 {event.registrationCount} / {event.maxParticipants}

                                            </p>

                                        </div>

                                        <Button className="w-full">

                                            View Details

                                        </Button>

                                    </CardContent>

                                </Card>
                            </Link>
                        ))}

                    </div>



                )
                }

            </div >
        </div>
    );
}

function StatusBadge({ status }) {

    const colors = {

        draft:
            "bg-yellow-100 text-yellow-700",

        upcoming:
            "bg-green-100 text-green-700",

        completed:
            "bg-blue-100 text-blue-700",

        cancelled:
            "bg-red-100 text-red-700",

    };

    return (

        <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${colors[status]}`}
        >

            {status}

        </span>

    );

}
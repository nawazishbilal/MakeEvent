import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import useMyEvents from "@/hooks/useMyEvents";
import { deleteEvent } from "@/services/event.service";

export default function MyEvents() {
    const queryClient = useQueryClient();

    const { data: events = [], isLoading } = useMyEvents();

    const deleteMutation = useMutation({
        mutationFn: deleteEvent,

        onSuccess() {
            toast.success("Event deleted");

            queryClient.invalidateQueries({
                queryKey: ["my-events"],
            });
        },

        onError(error) {
            toast.error(
                error.response?.data?.message ||
                "Failed to delete"
            );
        },
    });

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="space-y-6">

            <h1 className="text-3xl font-bold">
                My Events
            </h1>

            {events.length === 0 ? (
                <Card>

                    <CardContent className="py-10 text-center">

                        No events created yet.

                    </CardContent>

                </Card>
            ) : (
                <div className="grid gap-5">

                    {events.map((event) => (
                        <Card key={event._id}>

                            <CardHeader className="flex flex-row items-center justify-between">

                                <div>

                                    <CardTitle>
                                        {event.title}
                                    </CardTitle>

                                    <p className="text-sm text-muted-foreground mt-1">
                                        {event.category}
                                    </p>

                                </div>

                                <Button
                                    variant="destructive"
                                    onClick={() =>
                                        deleteMutation.mutate(event._id)
                                    }
                                >
                                    Delete
                                </Button>

                            </CardHeader>

                            <CardContent>

                                <div className="space-y-2 text-sm">

                                    <p>

                                        <strong>Venue:</strong>{" "}
                                        {event.venue}

                                    </p>

                                    <p>

                                        <strong>Status:</strong>{" "}
                                        {event.status}

                                    </p>

                                    <p>

                                        <strong>Participants:</strong>{" "}
                                        {event.maxParticipants}

                                    </p>

                                    <p>

                                        <strong>Start:</strong>{" "}
                                        {new Date(
                                            event.startDate
                                        ).toLocaleDateString()}

                                    </p>

                                </div>

                            </CardContent>

                        </Card>
                    ))}

                </div>
            )}

        </div>
    );
}
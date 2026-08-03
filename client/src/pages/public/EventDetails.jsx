import { useParams } from "react-router-dom";
import { Calendar, MapPin, Users, Trophy, Tag } from "lucide-react";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registerForEvent } from "@/services/event.service";

import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import useEvent from "@/hooks/useEvent";

export default function EventDetails() {
    const { id } = useParams();

    const { data: event, isLoading } = useEvent(id);

    const queryClient = useQueryClient();

    const registerMutation = useMutation({

        mutationFn: () => registerForEvent(id),

        onSuccess: () => {

            toast.success("Registration successful");

            queryClient.invalidateQueries({
                queryKey: ["event", id],
            });

            queryClient.invalidateQueries({
                queryKey: ["events"],
            });

        },

        onError: (error) => {

            toast.error(
                error.response?.data?.message ||
                "Registration failed"
            );

        }

    });



    if (isLoading)
        return (
            <div className="text-center py-10">
                Loading...
            </div>
        );

    if (!event)
        return (
            <div className="text-center py-10">
                Event not found.
            </div>
        );

    return (
        <div className="max-w-5xl mx-auto space-y-8">

            {/* Banner */}

            <div className="h-64 rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 flex items-center justify-center">

                <h1 className="text-5xl font-bold text-white">
                    {event.title}
                </h1>

            </div>

            <Card>

                <CardHeader>

                    <CardTitle className="text-3xl">
                        {event.title}
                    </CardTitle>

                </CardHeader>

                <CardContent className="space-y-6">

                    <p className="text-muted-foreground leading-7">
                        {event.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">

                        <Info
                            icon={<Tag size={18} />}
                            label="Category"
                            value={event.category}
                        />

                        <Info
                            icon={<MapPin size={18} />}
                            label="Venue"
                            value={event.venue}
                        />

                        <Info
                            icon={<Calendar size={18} />}
                            label="Start Date"
                            value={new Date(
                                event.startDate
                            ).toLocaleString()}
                        />

                        <Info
                            icon={<Users size={18} />}
                            label="Participants"
                            value={`${event.registrationCount}/${event.maxParticipants}`}
                        />

                        <Info
                            icon={<Trophy size={18} />}
                            label="Prize Pool"
                            value={event.prizePool || "N/A"}
                        />

                        <Info
                            icon={<Calendar size={18} />}
                            label="Registration Deadline"
                            value={new Date(
                                event.registrationDeadline
                            ).toLocaleDateString()}
                        />

                    </div>

                    <Button
                        className="w-full"
                        onClick={() => registerMutation.mutate()}
                        disabled={registerMutation.isPending}
                    >
                        {registerMutation.isPending
                            ? "Registering..."
                            : "Register Now"}
                    </Button>

                </CardContent>

            </Card>

        </div>
    );


    function Info({ icon, label, value }) {
        return (
            <div className="flex items-start gap-3">

                <div className="mt-1">
                    {icon}
                </div>

                <div>

                    <p className="text-sm text-muted-foreground">
                        {label}
                    </p>

                    <p className="font-semibold">
                        {value}
                    </p>

                </div>

            </div>
        );
    }
};
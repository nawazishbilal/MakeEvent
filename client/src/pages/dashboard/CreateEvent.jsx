import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FormInput from "@/components/form/FormInput";
import { createEvent } from "@/services/event.service";

export default function CreateEvent() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  async function onSubmit(data) {
    try {
      await createEvent({
        ...data,
        maxParticipants: Number(data.maxParticipants),
        registrationFee: Number(data.registrationFee || 0),
        tags: data.tags
          ? data.tags.split(",").map((t) => t.trim())
          : [],
      });

      toast.success("Event created successfully");

      reset();

      navigate("/dashboard/my-events");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to create event"
      );
    }
  }

  return (
    <div className="max-w-5xl mx-auto">

      <Card>

        <CardHeader>

          <CardTitle className="text-3xl">
            Create Event
          </CardTitle>

        </CardHeader>

        <CardContent>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8"
          >

            <div className="grid md:grid-cols-2 gap-6">

              <FormInput
                label="Title"
                name="title"
                placeholder="Sports Mania 5.0"
                register={register}
                error={errors.title}
              />

              <div className="space-y-2">

                <label className="text-sm font-medium">
                  Category
                </label>

                <select
                  {...register("category")}
                  className="w-full rounded-md border p-2"
                >
                  <option value="">Select Category</option>
                  <option>Sports</option>
                  <option>Technical</option>
                  <option>Workshop</option>
                  <option>Hackathon</option>
                  <option>Gaming</option>
                  <option>Cultural</option>
                  <option>Other</option>
                </select>

              </div>

            </div>

            <FormInput
              label="Venue"
              name="venue"
              placeholder="LPU Indoor Stadium"
              register={register}
              error={errors.venue}
            />

            <div className="space-y-2">

              <label className="text-sm font-medium">
                Description
              </label>

              <textarea
                rows={5}
                {...register("description")}
                className="w-full rounded-md border p-3"
              />

            </div>

            <div className="grid md:grid-cols-3 gap-6">

              <FormInput
                label="Start Date"
                type="datetime-local"
                name="startDate"
                register={register}
                error={errors.startDate}
              />

              <FormInput
                label="End Date"
                type="datetime-local"
                name="endDate"
                register={register}
                error={errors.endDate}
              />

              <FormInput
                label="Registration Deadline"
                type="datetime-local"
                name="registrationDeadline"
                register={register}
                error={errors.registrationDeadline}
              />

            </div>

            <div className="grid md:grid-cols-3 gap-6">

              <FormInput
                label="Maximum Participants"
                type="number"
                name="maxParticipants"
                register={register}
                error={errors.maxParticipants}
              />

              <FormInput
                label="Registration Fee"
                type="number"
                name="registrationFee"
                register={register}
              />

              <FormInput
                label="Prize Pool"
                name="prizePool"
                register={register}
              />

            </div>

            <FormInput
              label="Tags (comma separated)"
              name="tags"
              placeholder="sports, football"
              register={register}
            />

            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Creating..."
                : "Create Event"}
            </Button>

          </form>

        </CardContent>

      </Card>

    </div>
  );
}
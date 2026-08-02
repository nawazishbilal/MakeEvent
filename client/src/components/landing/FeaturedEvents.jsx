import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import EventCard from "@/components/cards/EventCard";
import { featuredEvents } from "@/data/featuredEvents";

export default function FeaturedEvents() {
  return (
    <Section>

      <Container>

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold">
            Featured Events
          </h2>

          <p className="mt-4 text-muted-foreground">
            Discover some of the most exciting events on MakeEvent.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {featuredEvents.map((event) => (
            <EventCard
              key={event.id}
              {...event}
            />
          ))}

        </div>

      </Container>

    </Section>
  );
}
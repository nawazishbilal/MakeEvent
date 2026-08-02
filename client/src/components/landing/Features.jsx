import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

import FeatureCard from "@/components/cards/FeatureCard";

import { features } from "@/data/features";

export default function Features() {
  return (
    <Section id="features">

      <Container>

        <div className="mx-auto mb-16 max-w-2xl text-center">

          <h2 className="text-4xl font-bold">
            Everything you need
          </h2>

          <p className="mt-4 text-muted-foreground">
            Manage events from planning to participation.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}

        </div>

      </Container>

    </Section>
  );
}
import { Button } from "@/components/ui/button";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import Stats from "./Stats";
import { SITE } from "@/lib/site";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <Section>

      <Container>

        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full border px-4 py-2 text-sm">
            🚀 Built for Colleges & Communities
          </span>

          <h1 className="mt-8 text-6xl lg:text-7xl font-extrabold tracking-tight md:text-7xl">
            {SITE.tagline}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            {SITE.description}
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <Button size="lg">
              Explore Events
            </Button>

            <Button variant="outline" size="lg">
              Become an Organizer

              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

          </div>

          <Stats />

        </div>

      </Container>

    </Section>
  );
}
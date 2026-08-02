import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <Section className="bg-primary text-primary-foreground">

      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <h2 className="text-4xl font-bold">
            Ready to host your next event?
          </h2>

          <p className="mt-6 text-lg opacity-90">
            Whether you're organizing a sports tournament,
            hackathon, cultural fest or workshop,
            MakeEvent simplifies the entire process.
          </p>

          <Button
            size="lg"
            variant="secondary"
            className="mt-10"
            asChild
          >
            <Link to="/register">
              Get Started
            </Link>
          </Button>

        </div>

      </Container>

    </Section>
  );
}
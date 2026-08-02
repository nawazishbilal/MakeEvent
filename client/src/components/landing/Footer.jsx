import Container from "@/components/common/Container";
import Logo from "@/components/common/Logo";

export default function Footer() {
  return (
    <footer className="border-t">

      <Container>

        <div className="flex flex-col items-center justify-between gap-6 py-8 md:flex-row">

          <Logo />

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MakeEvent.
            All rights reserved.
          </p>

        </div>

      </Container>

    </footer>
  );
}
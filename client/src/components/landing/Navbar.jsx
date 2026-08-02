import { Button } from "@/components/ui/button";
import Logo from "../common/Logo";
import { Link } from "react-router-dom";

const navLinks = [
  {
    title: "Explore",
    path: "/events",
  },
  {
    title: "Features",
    path: "#features",
  },
];

{navLinks.map((link) => (
  <Link
    key={link.title}
    to={link.path}
    className="text-sm font-medium transition-colors hover:text-primary"
  >
    {link.title}
  </Link>
))}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo />

        <nav className="hidden gap-8 md:flex">
          <a href="#features" className="hover:text-primary">
            Features
          </a>

          <a href="#events" className="hover:text-primary">
            Events
          </a>

          <a href="#contact" className="hover:text-primary">
            Contact
          </a>
        </nav>

        <div className="flex gap-3">
          <Button variant="ghost">
            Login
          </Button>

          <Button>
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
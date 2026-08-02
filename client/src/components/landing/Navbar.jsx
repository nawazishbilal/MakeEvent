import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

import Logo from "@/components/common/Logo";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import Container from "@/components/common/Container";

import { navigation } from "@/lib/navigation";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">

        {/* Logo */}

        <Link to="/">
          <Logo />
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((link) => (
            <Link
              key={link.title}
              to={link.path}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" asChild>
            <Link to="/login">Login</Link>
          </Button>

          <Button asChild>
            <Link to="/register">
              Get Started
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right">

              <div className="mt-8 flex flex-col gap-6">

                {navigation.map((link) => (
                  <Link
                    key={link.title}
                    to={link.path}
                    className="text-lg font-medium"
                  >
                    {link.title}
                  </Link>
                ))}

                <div className="mt-6 flex flex-col gap-3">

                  <Button variant="outline" asChild>
                    <Link to="/login">
                      Login
                    </Link>
                  </Button>

                  <Button asChild>
                    <Link to="/register">
                      Get Started
                    </Link>
                  </Button>

                </div>

              </div>

            </SheetContent>
          </Sheet>
        </div>

      </Container>
    </header>
  );
}
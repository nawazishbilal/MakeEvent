import { Outlet } from "react-router-dom";
import Logo from "@/components/common/Logo";

export default function AuthLayout() {
  return (
    <main className="min-h-screen bg-muted/30">

      <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6">

        <div className="grid w-full overflow-hidden rounded-3xl border bg-background shadow-xl lg:grid-cols-2">

          {/* Left Side */}

          <div className="hidden bg-primary p-12 text-primary-foreground lg:flex lg:flex-col lg:justify-between">

            <div>

              <Logo />

              <h1 className="mt-20 text-5xl font-bold leading-tight">
                Organize.
                <br />
                Manage.
                <br />
                Grow.
              </h1>

              <p className="mt-8 text-lg opacity-90">
                Everything you need to manage registrations,
                participants and events from one dashboard.
              </p>

            </div>

            <p className="text-sm opacity-70">
              © 2026 MakeEvent
            </p>

          </div>

          {/* Right Side */}

          <div className="flex items-center justify-center p-8 lg:p-16">

            <Outlet />

          </div>

        </div>

      </div>

    </main>
  );
}
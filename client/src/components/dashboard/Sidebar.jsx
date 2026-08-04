import { CalendarDays } from "lucide-react";
import { NavLink } from "react-router-dom";

const links = [
  {
    name: "Create Event",
    path: "/dashboard/create-event",
    icon: CalendarDays,
  },
  {
    name: "My Events",
    path: "/dashboard/my-events",
    icon: CalendarDays,
  },
];

export default function Sidebar() {
  return (
    <aside className="hidden w-64 border-r bg-background lg:flex lg:flex-col">

      <div className="border-b p-6">

        <h2 className="text-2xl font-bold">
          MakeEvent
        </h2>

      </div>

      <nav className="flex-1 p-4 space-y-2">

        {links.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }`
              }
            >
              <Icon size={20} />

              {link.name}
            </NavLink>
          );
        })}

      </nav>

    </aside>
  );
}
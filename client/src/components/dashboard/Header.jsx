import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

export default function Header() {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();

      toast.success("Logged out successfully");

      navigate("/", { replace: true });
    } catch {
      toast.error("Logout failed");
    }
  };

  return (
    <header className="flex h-20 items-center justify-between border-b bg-background px-8">

      <div>

        <h1 className="text-2xl font-bold">
          Welcome Back!
        </h1>

        <p className="text-muted-foreground">
          Manage your events effortlessly.
        </p>

      </div>

      <div className="flex items-center gap-4">

        <div className="text-right">

          <p className="font-semibold">
            {user?.name}
          </p>

          <p className="text-sm capitalize text-muted-foreground">
            {user?.role}
          </p>

        </div>

        <Button
          variant="outline"
          onClick={handleLogout}
        >

          <LogOut className="mr-2 h-4 w-4" />

          Logout

        </Button>

      </div>

    </header>
  );
}
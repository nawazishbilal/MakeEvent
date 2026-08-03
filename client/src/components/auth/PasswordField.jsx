import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

import { Input } from "@/components/ui/input";

export default function PasswordField({
  register,
  error,
}) {
  const [show, setShow] = useState(false);

  return (
    <div className="space-y-2">

      <label className="text-sm font-medium">
        Password
      </label>

      <div className="relative">

        <Input
          type={show ? "text" : "password"}
          placeholder="Enter password"
          {...register("password")}
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-3"
        >
          {show ? (
            <EyeOff size={18} />
          ) : (
            <Eye size={18} />
          )}
        </button>

      </div>

      {error && (
        <p className="text-sm text-red-500">
          {error.message}
        </p>
      )}

    </div>
  );
}
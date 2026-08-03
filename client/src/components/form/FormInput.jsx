import { Input } from "@/components/ui/input";

export default function FormInput({
  label,
  placeholder,
  type = "text",
  register,
  name,
  error,
}) {
  return (
    <div className="space-y-2">

      <label className="text-sm font-medium">
        {label}
      </label>

      <Input
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />

      {error && (
        <p className="text-sm text-red-500">
          {error.message}
        </p>
      )}

    </div>
  );
}
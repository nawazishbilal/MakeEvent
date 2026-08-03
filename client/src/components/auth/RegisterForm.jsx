import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";

import FormInput from "@/components/form/FormInput";
import PasswordField from "./PasswordField";

import { registerSchema } from "@/lib/validators";
import { useAuth } from "@/context/AuthContext";

export default function RegisterForm() {
    const navigate = useNavigate();

    const { register: registerUser } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(registerSchema),
    });

    async function onSubmit(data) {
        try {
            await registerUser(data);

            toast.success("Account created successfully!");

            navigate("/dashboard");
        } catch (error) {
            toast.error(
                error.response?.data?.message ||
                "Registration failed"
            );
        }
    }

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
            >
                <FormInput
                    label="Name"
                    name="name"
                    placeholder="Enter your name"
                    register={register}
                    error={errors.name}
                />

                <FormInput
                    label="Email"
                    name="email"
                    placeholder="Enter your email"
                    register={register}
                    error={errors.email}
                />

                <PasswordField
                    register={register}
                    error={errors.password}
                />

                <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                >
                    {isSubmitting
                        ? "Creating Account..."
                        : "Create Account"}
                </Button>
            </form>

            <p className="mt-6 text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link
                    to="/login"
                    className="font-medium text-primary hover:underline"
                >
                    Login
                </Link>
            </p>
        </>
    );
}
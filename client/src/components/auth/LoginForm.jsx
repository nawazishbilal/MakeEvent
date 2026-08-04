import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import FormInput from "@/components/form/FormInput";
import PasswordField from "./PasswordField";
import { loginSchema } from "@/lib/validators";
import { useAuth } from "@/context/AuthContext";
import { Link } from "react-router-dom";

export default function LoginForm() {
    const navigate = useNavigate();

    const { login } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(loginSchema),
    });

    async function onSubmit(data) {
        console.log("Submitted!", data);

        try {
            await login(data);

            toast.success("Welcome back!");

            navigate("/dashboard");
        } catch (error) {
            console.error(error);

            toast.error(
                error.response?.data?.message || "Login failed"
            );
        }
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
        >

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

            <Button type="submit"
                className="w-full"
                disabled={isSubmitting}
            >
                {isSubmitting
                    ? "Logging in..."
                    : "Login"}
            </Button>

            <p className="text-center text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link
                    to="/register"
                    className="font-medium text-primary hover:underline"
                >
                    Register
                </Link>
            </p>

        </form>
    );
}
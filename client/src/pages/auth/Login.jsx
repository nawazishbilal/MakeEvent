import AuthCard from "@/components/auth/AuthCard";
import LoginForm from "@/components/auth/LoginForm";

export default function Login() {
    return (
        <AuthCard
            title="Welcome Back"
            subtitle="Login to continue managing your events."
        >

            <LoginForm />

        </AuthCard>
    );
}
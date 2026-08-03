import AuthCard from "@/components/auth/AuthCard";
import RegisterForm from "@/components/auth/RegisterForm";

export default function Register() {
  return (
    <AuthCard
      title="Create Account"
      subtitle="Start organizing amazing events today."
    >
      <RegisterForm />
    </AuthCard>
  );
}
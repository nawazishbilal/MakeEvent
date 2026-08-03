import { Card, CardContent } from "@/components/ui/card";

export default function AuthCard({
  title,
  subtitle,
  children,
}) {
  return (
    <Card className="w-full max-w-md border-0 shadow-none">

      <CardContent className="space-y-8">

        <div>

          <h2 className="text-3xl font-bold">
            {title}
          </h2>

          <p className="mt-2 text-muted-foreground">
            {subtitle}
          </p>

        </div>

        {children}

      </CardContent>

    </Card>
  );
}
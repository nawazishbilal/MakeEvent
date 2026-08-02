import { Card, CardContent } from "@/components/ui/card";

export default function FeatureCard({
  title,
  description,
  icon: Icon,
}) {
  return (
    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <CardContent className="space-y-5 p-8">

        <div className="w-fit rounded-xl bg-primary/10 p-3">
          <Icon className="h-6 w-6 text-primary" />
        </div>

        <h3 className="text-xl font-semibold">
          {title}
        </h3>

        <p className="text-muted-foreground">
          {description}
        </p>

      </CardContent>
    </Card>
  );
}
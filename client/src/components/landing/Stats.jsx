import { SITE } from "@/lib/site";

export default function Stats() {
  return (
    <div className="mt-16 grid grid-cols-3 gap-8 border-t pt-10">
      {SITE.stats.map((item) => (
        <div key={item.label} className="text-center">
          <h3 className="text-3xl font-bold text-primary">
            {item.value}
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
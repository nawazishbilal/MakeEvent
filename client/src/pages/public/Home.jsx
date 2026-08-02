import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
    </main>
  );
}

// export default function Home() {
//   return (
//     <div className="min-h-screen flex items-center justify-center text-4xl">
//       MakeEvent 🚀
//     </div>
//   );
// }
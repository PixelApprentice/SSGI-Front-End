import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-center px-6">
      <div className="max-w-md animate-fade-in">
        <h1 className="font-display text-9xl font-extrabold gold-text">404</h1>
        <h2 className="mt-4 font-display text-2xl font-bold text-foreground">Mission Control: Page Not Found</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          The coordinates you've entered seem to be incorrect. The page you are looking for might have moved or orbitally decayed.
        </p>
        <div className="mt-10">
          <Button asChild variant="gold" size="lg" className="h-12 px-8">
            <Link href="/">Return to Earth</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

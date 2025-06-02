import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center bg-cyan-700">
      <Button className="p-5" variant="destructive">
        Click Me
      </Button>
    </div>
  );
}

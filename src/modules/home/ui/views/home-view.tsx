"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";

export const HomeView = () => {
  const { data: session } = authClient.useSession();

  const router = useRouter();

  if (!session) return <p>Loading...</p>;

  return (
    <div>
      <p>Logged in as {session?.user.name}</p>
      <Button
        onClick={() =>
          authClient.signOut({
            fetchOptions: { onSuccess: () => router.push("/sign-in") },
          })
        }
      >
        Sign Out
      </Button>
    </div>
  );
};

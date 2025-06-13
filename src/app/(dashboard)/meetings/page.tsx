import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import type { SearchParams } from "nuqs/server";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { MeetingsListHeader } from "@/modules/meetings/ui/components/meetings-list-header";

import {
  MeetingsErrorState,
  MeetingsLoadingState,
  MeetingsView,
} from "@/modules/meetings/ui/views/meetings-view";
import { loadSearchParams } from "@/modules/meetings/params";

interface Props {
  searchParams: Promise<SearchParams>;
}

const page = async ({ searchParams }: Props) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) return redirect("/sign-in");

  const filters = await loadSearchParams(searchParams);

  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.meetings.getMany.queryOptions({ ...filters }),
  );

  return (
    <>
      <MeetingsListHeader />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<MeetingsLoadingState />}>
          <ErrorBoundary fallback={<MeetingsErrorState />}>
            <MeetingsView />
          </ErrorBoundary>
        </Suspense>
      </HydrationBoundary>
    </>
  );
};

export default page;

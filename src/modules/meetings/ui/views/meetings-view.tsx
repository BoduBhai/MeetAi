"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";

export const MeetingsView = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.meetings.getMany.queryOptions({}));

  return <div>{JSON.stringify(data)}</div>;
};

export const MeetingsLoadingState = () => {
  return (
    <LoadingState
      title="Loading Meetings"
      description="This may take a few seconds..."
    />
  );
};

export const MeetingsErrorState = () => {
  return (
    <ErrorState
      title="Failed loading Meetings"
      description="Please try again later"
    />
  );
};

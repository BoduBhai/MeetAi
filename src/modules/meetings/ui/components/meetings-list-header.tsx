"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { NewMeetingDialog } from "./new-meeting-dialog";

import { PlusIcon } from "lucide-react";

export const MeetingsListHeader = () => {
  const [isDialogOpen, setisDialogOpen] = useState(false);

  return (
    <>
      <NewMeetingDialog open={isDialogOpen} onOpenChange={setisDialogOpen} />
      <div className="flex flex-col gap-y-4 px-4 py-4 md:px-8">
        <div className="flex items-center justify-between">
          <h5 className="text-xl font-medium">My Meetings</h5>
          <Button onClick={() => setisDialogOpen(true)}>
            <PlusIcon />
            New Meeting
          </Button>
        </div>
        <div className="flex items-center gap-x-2 p-1">TODO: Filters</div>
      </div>
    </>
  );
};

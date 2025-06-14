import { ResponsiveDialog } from "@/components/responsive-dialog";
import { MeetingsForm } from "./meetings-form";
import { MeetingGetOne } from "../../types";

interface UpdateMeetingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialValues: MeetingGetOne;
}

export const UpdateMeetingDialog = ({
  open,
  onOpenChange,
  initialValues,
}: UpdateMeetingDialogProps) => {
  return (
    <ResponsiveDialog
      title="Edit Meeting"
      description="Edit the meeting details"
      open={open}
      onOpenChange={onOpenChange}
    >
      <MeetingsForm
        onSucess={() => onOpenChange(false)}
        onCancel={() => onOpenChange(false)}
        initialValues={initialValues}
      />
    </ResponsiveDialog>
  );
};

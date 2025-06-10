import { ResponsiveDialog } from "@/components/responsive-dialog";

import { AgentsForm } from "./agents-form";

import { AgentGetOne } from "../../types";

interface NewAgentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialValues: AgentGetOne;
}

export const UpdateAgentDialog = ({
  open,
  onOpenChange,
  initialValues,
}: NewAgentDialogProps) => {
  return (
    <ResponsiveDialog
      title="Edit Agent"
      description="Edit agent details"
      open={open}
      onOpenChange={onOpenChange}
    >
      <AgentsForm
        onSucess={() => onOpenChange(false)}
        onCancel={() => onOpenChange(false)}
        initialValues={initialValues}
      />
    </ResponsiveDialog>
  );
};

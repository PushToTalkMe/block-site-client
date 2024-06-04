import { SignUpForm } from "@/features/auth";
import { UIFormPageLayout } from "@/shared/ui/layout/ui-form-page-layout";
import { UIHeader } from "@/shared/ui/ui-header";

export function SignUpPage() {
  return (
    <UIFormPageLayout
      title="Sign Up"
      header={<UIHeader />}
      form={<SignUpForm />}
    />
  );
}

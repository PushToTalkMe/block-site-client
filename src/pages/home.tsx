import { UIHeader } from "@/shared/ui/ui-header";
import { useSessionQuery } from "@/entities/session";
import { ToggleBlockingButton } from "@/features/toggle-blocking/ui/toggle-blocking-button";
import { Profile } from "@/widgets/profile";
import { useBlockListQuery } from "@/entities/block-list/queries";
import { AddBlockItemForm, BlockList } from "@/features/block-list";

export default function HomePage() {
  const { data } = useBlockListQuery({});
  return (
    <div className={`min-h-screen flex flex-col`}>
      <UIHeader right={<Profile />} />
      <div className="grid grid-cols-[200px_1fr]">
        <aside className="px-5 pt-10">
          <ToggleBlockingButton />
        </aside>
        <main className="px-5 pt-10">
          <h1 className="text-2xl mb-8">Block List</h1>
          <AddBlockItemForm />
          <BlockList className="mt-3" />
        </main>
      </div>
    </div>
  );
}

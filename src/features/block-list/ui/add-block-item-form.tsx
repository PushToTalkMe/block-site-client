import { UISelectField } from "@/shared/ui/ui-select-field";
import { useAddBlockItemForm } from "../model/use-add-block-item-form";
import { UITextField } from "@/shared/ui/ui-text-field";
import { UIButton } from "@/shared/ui/ui-button";
import { AddBlockItemDtoType } from "@/shared/api/generated";

const typeOptions = [
  { label: "WebSite", value: AddBlockItemDtoType.Website },
  { label: "KeyWord", value: AddBlockItemDtoType.KeyWord },
];

export function AddBlockItemForm() {
  const { handleSubmit, isLoading, register, type } = useAddBlockItemForm();

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <UISelectField
        className="grow min-w-[200px]"
        selectProps={{ ...register("type") }}
        options={typeOptions}
      />
      <UITextField
        className="grow"
        inputProps={{
          placeholder:
            type === "KeyWord" ? "Enter Key Word..." : "Enter Website",
          ...register("data"),
        }}
      />
      <UIButton disabled={isLoading} variant="primary">
        Add Block Item
      </UIButton>
    </form>
  );
}

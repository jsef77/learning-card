import { Flex, Switch } from "@radix-ui/themes";
import { LineHeightIcon } from "@radix-ui/react-icons";

interface EditSwitchProps {
  editMode: boolean;
  setEditMode: (value: boolean) => void;
}

function EditSwitch({ setEditMode, editMode }: EditSwitchProps) {
  function onClickHandler() {
    setEditMode(!editMode);
    console.log("Edit mode toggled!");
  }

  return (
    <Flex align={"center"} gap={"2"}>
      <Switch defaultChecked onClick={onClickHandler} />{" "}
      <LineHeightIcon width="18" height="18" />
    </Flex>
  );
}

export default EditSwitch;

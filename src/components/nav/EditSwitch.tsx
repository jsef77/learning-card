import { Flex, Switch } from "@radix-ui/themes";
import { Pencil1Icon } from "@radix-ui/react-icons";

interface EditSwitchProps {
  editMode: boolean;
  setEditMode: (value: boolean) => void;
}

function EditSwitch({ setEditMode, editMode }: EditSwitchProps) {
  function onClickHandler() {
    setEditMode(!editMode);
  }

  return (
    <Flex align={"center"} gap={"2"}>
      <Switch defaultChecked checked={editMode} onClick={onClickHandler} />{" "}
      <Pencil1Icon width="18" height="18" />
    </Flex>
  );
}

export default EditSwitch;

import { Avatar, Flex } from "@radix-ui/themes";
import SettingsDropdown from "./SettingsDropdown";
import EditSwitch from "./EditSwitch";
import { Dispatch } from "react";
import { AccentColors } from "../../App";
import NightModeToggle from "./NightModeToggle";

interface Props {
  editMode: boolean;
  setEditMode: (value: boolean) => void;
  setAccentColor: Dispatch<React.SetStateAction<AccentColors>>;
}

function NavBar({ editMode, setEditMode, setAccentColor }: Props) {
  return (
    <Flex
      justify={"between"}
      align={"center"}
      style={{
        padding: "10px 80px",
      }}
    >
      <Flex justify={"start"} gap={"3"}>
        <Avatar size={"3"} radius={"full"} fallback={"J"} />
      </Flex>
      <Flex justify={"end"} align={"center"} gap={"4"}>
        <EditSwitch editMode={editMode} setEditMode={setEditMode} />
        <SettingsDropdown setAccentColor={setAccentColor} />
        <NightModeToggle />
      </Flex>
    </Flex>
  );
}

export default NavBar;

import { Avatar, Flex } from "@radix-ui/themes";
import SettingsDropdown from "./SettingsDropdown";
import EditSwitch from "./EditSwitch";
import { Dispatch } from "react";
import { AccentColors, ThemeAppearance } from "../../App";
import NightModeToggle from "./NightModeToggle";

interface Props {
  editMode: boolean;
  setEditMode: (value: boolean) => void;
  theme: string;
  setTheme: Dispatch<React.SetStateAction<ThemeAppearance>>;
  setAccentColor: Dispatch<React.SetStateAction<AccentColors>>;
}

function NavBar({
  editMode,
  setEditMode,
  theme,
  setTheme,
  setAccentColor,
}: Props) {
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
        <NightModeToggle theme={theme} setTheme={setTheme} />
      </Flex>
    </Flex>
  );
}

export default NavBar;

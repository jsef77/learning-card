import { Avatar, Flex, IconButton } from "@radix-ui/themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import SettingsDropdown from "./SettingsDropdown";
import EditSwitch from "./EditSwitch";
import { Dispatch } from "react";
import { AccentColors, ThemeAppearance } from "../../App";

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
  const handleThemeChange = () =>
    theme == "light" ? setTheme("dark") : setTheme("light");

  return (
    <Flex justify={"between"} align={"center"} style={{ padding: "10px 80px" }}>
      <Flex justify={"start"} gap={"3"}>
        <Avatar
          size={"3"}
          src="https://avatars.githubusercontent.com/u/26205643?v=4"
          radius={"full"}
          fallback={"J"}
        />
      </Flex>
      <Flex justify={"end"} align={"center"} gap={"4"}>
        <EditSwitch editMode={editMode} setEditMode={setEditMode} />
        <SettingsDropdown setAccentColor={setAccentColor} />
        <IconButton
          variant="ghost"
          onClick={handleThemeChange}
          style={{ cursor: "pointer" }}
        >
          {theme == "light" ? (
            <SunIcon width="18" height="18" />
          ) : (
            <MoonIcon width="18" height="18" />
          )}
        </IconButton>
      </Flex>
    </Flex>
  );
}

export default NavBar;

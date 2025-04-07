import { DropdownMenu, Button } from "@radix-ui/themes";
import { GearIcon } from "@radix-ui/react-icons";
import { AccentColors } from "../../App";
import { Dispatch } from "react";

interface Props {
  setAccentColor: Dispatch<React.SetStateAction<AccentColors>>;
}

function SettingsDropdown({ setAccentColor }: Props) {
  function handleColorThemeChange(color: AccentColors) {
    setAccentColor(color);
  }

  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger>
        <Button variant="soft">
          <GearIcon />
          <DropdownMenu.TriggerIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger>Theme</DropdownMenu.SubTrigger>
          <DropdownMenu.SubContent>
            <DropdownMenu.Item onClick={() => handleColorThemeChange("teal")}>
              Teal
            </DropdownMenu.Item>
            <DropdownMenu.Item onClick={() => handleColorThemeChange("ruby")}>
              Ruby
            </DropdownMenu.Item>
            <DropdownMenu.Item onClick={() => handleColorThemeChange("indigo")}>
              Indigo
            </DropdownMenu.Item>
          </DropdownMenu.SubContent>
        </DropdownMenu.Sub>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

export default SettingsDropdown;

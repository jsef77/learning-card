import {
  DropdownMenu,
  Dialog,
  Button,
  Flex,
  Text,
  TextField,
} from "@radix-ui/themes";
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

  function handleDelete() {
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>Edit profile</Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Edit profile</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Make changes to your profile.
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Name
            </Text>
            <TextField.Root
              defaultValue="Freja Johnsen"
              placeholder="Enter your full name"
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Email
            </Text>
            <TextField.Root
              defaultValue="freja@example.com"
              placeholder="Enter your email"
            />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button>Save</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>;
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
        {/* <DropdownMenu.Item shortcut="⌘ S">Save</DropdownMenu.Item>
        <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item> */}

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

        {/* <DropdownMenu.Separator /> */}
        {/* <DropdownMenu.Item>Share</DropdownMenu.Item>
        <DropdownMenu.Item>Add to favorites</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item shortcut="⌘ ⌫" color="red" onClick={handleDelete}>
          Delete
        </DropdownMenu.Item> */}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

export default SettingsDropdown;

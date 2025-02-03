import { Avatar, Flex, IconButton } from "@radix-ui/themes";
import { SunIcon } from "@radix-ui/react-icons";
import SettingsDropdown from "./SettingsDropdown";
import EditSwitch from "./EditSwitch";

interface Props {
  editMode: boolean;
  setEditMode: (value: boolean) => void;
}

function NavBar({ editMode, setEditMode }: Props) {
  return (
    <Flex
      justify={"between"}
      style={{
        backgroundColor: "var(--accent-1)",
        opacity: 0.9,
        padding: "10px 80px",
        position: "sticky",
        top: 0,
      }}
    >
      <Flex justify={"start"} gap={"3"}>
        <Avatar
          size={"3"}
          src="https://avatars.githubusercontent.com/u/26205643?v=4"
          radius={"full"}
          fallback={"J"}
        />
      </Flex>
      <Flex justify={"end"} gap={"3"}>
        <EditSwitch editMode={editMode} setEditMode={setEditMode} />
        <SettingsDropdown />
        <IconButton>
          <SunIcon width="18" height="18" />
        </IconButton>
      </Flex>
    </Flex>
  );
}

export default NavBar;

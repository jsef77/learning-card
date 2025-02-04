import { IconButton } from "@radix-ui/themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { ThemeAppearance } from "../../App";
import { Dispatch } from "react";

interface Props {
  theme: string;
  setTheme: Dispatch<React.SetStateAction<ThemeAppearance>>;
}

function NightModeToggle({ theme, setTheme }: Props) {
  const handleThemeChange = () =>
    theme == "light" ? setTheme("dark") : setTheme("light");

  return (
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
  );
}

export default NightModeToggle;

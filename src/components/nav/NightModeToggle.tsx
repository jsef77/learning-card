import { IconButton } from "@radix-ui/themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { dark, light } from "../../features/theme/themeSlice";

function NightModeToggle() {
  const dispatch = useAppDispatch();

  function handleThemeChange() {
    switch (theme) {
      case "dark":
        dispatch(light());
        break;

      case "light":
        dispatch(dark());
    }
  }

  const theme = useAppSelector((state) => state.theme.mode);

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

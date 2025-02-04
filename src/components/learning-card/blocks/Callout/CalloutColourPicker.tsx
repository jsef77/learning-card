import { Dispatch, useState } from "react";
import Circle from "@uiw/react-color-circle";

import { useAppSelector } from "../../../../app/hooks";

interface Props {
  setChosenColour: Dispatch<React.SetStateAction<string>>;
}

export default function CalloutColourPicker({ setChosenColour }: Props) {
  const [hex, setHex] = useState("");
  const theme = useAppSelector((state) => state.theme.mode);
  const colors =
    theme == "light"
      ? ["#FFDCE1", "#E1E9FF", "#CCF3EA", "#E6E9E8"] // light mode
      : ["#4E1325", "#1D2E62", "#013B37", "#222222"]; // dark mode
  return (
    <Circle
      colors={colors}
      color={hex}
      onChange={(color) => {
        setHex(color.hex);
        setChosenColour(color.hex);
      }}
    />
  );
}

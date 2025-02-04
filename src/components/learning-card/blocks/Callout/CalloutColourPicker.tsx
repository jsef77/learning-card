import { Dispatch, useState } from "react";
import Circle from "@uiw/react-color-circle";

interface Props {
  setChosenColour: Dispatch<React.SetStateAction<string>>;
}

export default function CalloutColourPicker({ setChosenColour }: Props) {
  const [hex, setHex] = useState("var(--ruby-4)");
  const colors = ["#4E1325", "#451D47", "#1D2E62", "#084843"];
  return (
    <>
      <Circle
        colors={colors}
        color={hex}
        onChange={(color) => {
          setHex(color.hex);
          setChosenColour(color.hex);
        }}
      />
    </>
  );
}

import LearningCard from "./components/learning-card/LearningCard";
import NavBar from "./components/nav/NavBar";
import { useState } from "react";
import { Flex, Theme, Card } from "@radix-ui/themes";

import { useAppSelector } from "./app/hooks";

export type AccentColors = "teal" | "indigo" | "ruby";

export default function MyApp() {
  const [editMode, setEditMode] = useState(true);
  const [accentColor, setAccentColor] = useState<AccentColors>("indigo");

  const theme = useAppSelector((state) => state.theme.mode);

  return (
    <Theme
      id="themeComponent"
      appearance={theme}
      accentColor={accentColor}
      panelBackground="translucent"
      style={{
        background: "linear-gradient(var(--gray-3), var(--accent-3))",
      }} // Could cause issues?
    >
      <Card // Navbar Card
        id="nav-bar-panel"
        className="nav-bar"
      >
        <NavBar
          editMode={editMode}
          setEditMode={setEditMode}
          setAccentColor={setAccentColor}
        />
      </Card>

      <Flex // Learning card container
        direction={"row"}
        justify={"center"}
        width={"100%"}
        minHeight={"110vh"}
      >
        <LearningCard editMode={editMode} />
      </Flex>
    </Theme>
  );
}

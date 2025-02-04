import LearningCard from "./components/learning-card/LearningCard";
import NavBar from "./components/nav/NavBar";
import { useState } from "react";
import { Flex, ContextMenu, Theme } from "@radix-ui/themes";

export type ThemeAppearance = "dark" | "light" | "inherit";
export type AccentColors = "teal" | "indigo" | "ruby";

export default function MyApp() {
  const [editMode, setEditMode] = useState(true);
  const [theme, setTheme] = useState<ThemeAppearance>("dark");
  const [accentColor, setAccentColor] = useState<AccentColors>("indigo");

  return (
    <Theme
      id="themeComponent"
      appearance={theme}
      accentColor={accentColor}
      panelBackground="translucent"
      style={{ background: "var(--gray-3)" }}
    >
      <div // Navbar div
        style={{
          backgroundColor: "var(--accent-1)",
          opacity: 0.9,
          position: "fixed",
          width: "100%",
          top: 0,
        }}
      >
        <NavBar
          editMode={editMode}
          setEditMode={setEditMode}
          theme={theme}
          setTheme={setTheme}
          setAccentColor={setAccentColor}
        />
      </div>
      <ContextMenu.Root modal={false}>
        <ContextMenu.Trigger>
          <Flex // Learning card container
            direction={"row"}
            justify={"center"}
            width={"100%"}
            minHeight={"110vh"}
          >
            <LearningCard editMode={editMode} />
          </Flex>
        </ContextMenu.Trigger>
        <ContextMenu.Content size="1">
          <ContextMenu.Item onClick={() => setEditMode(!editMode)}>
            Edit mode
          </ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu.Root>
    </Theme>
  );
}

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./main.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme
      appearance="dark"
      accentColor="jade"
      grayColor="sage"
      panelBackground="translucent"
    >
      <App />
    </Theme>
  </StrictMode>
);

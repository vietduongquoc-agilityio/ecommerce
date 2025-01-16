"use client";

import { useTheme } from "next-themes";
import { Button } from "../ui/button";

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <Button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        // className="p-2 bg-gray-200 rounded"
      >
        Toggle Theme (Current: {theme || "system"})
      </Button>
    </div>
  );
}

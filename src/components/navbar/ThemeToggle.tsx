import { IconButton } from "@mui/material";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure theme is mounted on the client to avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <IconButton
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="dark:text-white"
    >
      {theme === "light" ? <DarkModeIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  );
};

export default ThemeToggle;

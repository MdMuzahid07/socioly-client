import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <span
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex h-5 w-full cursor-pointer items-center gap-2 text-default-600 transition-colors hover:text-primary dark:text-default-300"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <SunIcon className="h-4 w-4" />
      ) : (
        <MoonIcon className="h-4 w-4" />
      )}

      <p>Appearance</p>
    </span>
  );
}

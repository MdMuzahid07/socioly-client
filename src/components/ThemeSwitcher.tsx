import { Button } from "@nextui-org/react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useState } from "react";

export default function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false);

  const handlePress = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="mt-4 flex flex-row items-center gap-2 pl-4">
      <Button
        onPress={handlePress}
        size="sm"
        isIconOnly
        className={`rounded-full ${isDark ? "bg-slate-800 text-white" : "bg-slate-200"} text-default-500`}
      >
        {!isDark ? <SunIcon className="h-5 w-4" /> : <MoonIcon className="h-4 w-4" />}
      </Button>
      <p className="select-none text-default-500">Theme: {isDark ? "Dark" : "Light"}</p>
    </div>
  );
}

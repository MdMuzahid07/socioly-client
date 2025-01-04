/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@nextui-org/react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useState } from "react";





export default function ThemeSwitcher() {
    const [isDark, setIsDark] = useState(false);

    const handlePress = () => {
        setIsDark(!isDark);
    }


    return (
        <div className="flex flex-row items-center pl-4 mt-4 gap-2">
            <Button onPress={handlePress} size="sm" isIconOnly className={` rounded-full ${isDark ? "bg-slate-800 text-white" : "bg-slate-200"} text-default-500`}>
                {!isDark ? <SunIcon className="w-4 h-5" /> : <MoonIcon className="w-4 h-4" />}
            </Button>
            <p className="text-default-500 select-none">Theme: {isDark ? "Dark" : "Light"}</p>
        </div>
    );
};

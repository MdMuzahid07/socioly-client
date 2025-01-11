/* eslint-disable @typescript-eslint/no-explicit-any */
import { AlignJustify, AlignLeft } from "lucide-react";

export default function SettingHeader({ isSidebarOpen, setIsSidebarOpen }: any) {


    return (
        <header className="w-full bg-white h-16 drop-shadow-sm bg-[slate-100] sticky top-0 left-0 text-blue-700 border-b px-7 flex justify-between items-center z-20">
            <div className="flex items-center gap-4">
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    {isSidebarOpen ? (
                        <p className="flex items-center gap-2">
                            <AlignLeft />
                        </p>
                    ) : (
                        <AlignJustify />
                    )}
                </button>
            </div>
            <div className="flex flex-row items-center gap-7">
                <h1>Hi</h1>
            </div>
        </header>
    )
};

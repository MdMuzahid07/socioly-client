/* eslint-disable @typescript-eslint/no-explicit-any */
import { AlignJustify, AlignLeft } from "lucide-react";

export default function SettingHeader({ isSidebarOpen, setIsSidebarOpen }: any) {
  return (
    <header className="sticky left-0 top-0 z-20 flex h-16 w-full items-center justify-between border-b bg-[slate-100] bg-white px-7 text-blue-700 drop-shadow-sm">
      <div className="flex items-center gap-4">
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
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
  );
}

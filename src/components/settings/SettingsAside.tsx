import { logo } from "@/constants/Images";
import { Lock, Trash, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SettingsAside({
  isSidebarOpen,
  setIsSidebarOpen,
}: any) {
  return (
    <aside
      className={`sticky top-0 z-50 col-span-12 h-screen min-h-screen w-full border-r border-default-200 bg-background shadow-sm lg:col-span-4 xl:col-span-2 ${
        isSidebarOpen ? "flex" : "hidden"
      }`}
    >
      <div className="relative w-full p-8">
        <Link href="/">
          <div className="rounded-lg bg-primary px-4">
            <Image
              src={logo}
              width={110}
              height={100}
              alt=""
              className="h-10 w-20 object-cover object-center sm:h-20 sm:w-44"
            />
          </div>
        </Link>

        <button
          onClick={() => setIsSidebarOpen(false)}
          className="fixed right-10 top-10 flex h-10 w-10 items-center justify-center rounded-full border bg-black text-white lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>

        <ul className="mt-6 space-y-2 text-default-700 sm:mt-14 md:mt-16">
          <li>
            <Link
              className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-medium font-medium transition-colors hover:bg-default-100`}
              href="/settings"
            >
              <User className="h-5 w-5" /> Account Preferences
            </Link>
          </li>
          <li>
            <Link
              className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-medium font-medium transition-colors hover:bg-default-100"
              href="/settings/privacy-security"
            >
              <Lock className="h-5 w-5" /> Privacy & Security
            </Link>
          </li>
          <li>
            <Link
              className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-medium font-medium text-danger transition-colors hover:bg-danger-50"
              href="/settings/close-account"
            >
              <Trash className="h-5 w-5" /> Close Account
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

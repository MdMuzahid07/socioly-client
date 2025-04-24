import { logo } from "@/constants/Images";
import { Lock, Trash, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SettingsAside({ isSidebarOpen, setIsSidebarOpen }: any) {
  return (
    <aside
      className={`sticky top-0 z-50 col-span-12 h-full min-h-screen w-full bg-white text-[18px] text-black shadow-lg sm:max-h-screen sm:text-[25px] lg:col-span-4 xl:col-span-2 ${
        isSidebarOpen ? "flex" : "hidden"
      }`}
    >
      <div className="relative w-full p-8">
        <Link href="/">
          <div className="rounded-lg bg-blue-700 px-4">
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>

        <ul className="mt-6 space-y-4 text-black sm:mt-14 md:mt-16">
          <li>
            <Link
              className={`flex w-full items-center gap-3 text-lg tracking-wide`}
              href="/settings/account-preferences"
            >
              <User className="h-5 w-5" /> Account Preferences
            </Link>
          </li>
          <li>
            <Link
              className="flex w-full items-center gap-3 text-lg tracking-wide"
              href="/settings/privacy-security"
            >
              <Lock className="mb-1 h-5 w-5" /> Privacy & Security
            </Link>
          </li>
          <li>
            <Link
              className="flex w-full items-center gap-3 text-lg tracking-wide"
              href="/settings/close-account"
            >
              <Trash className="mb-1 h-5 w-5" /> Close Account
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

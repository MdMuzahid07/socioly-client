import { logo } from "@/constants/Images";
import { Lock, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SettingsAside({ isSidebarOpen, setIsSidebarOpen }: any) {



    return (
        <aside
            className={
                `col-span-12 lg:col-span-4 xl:col-span-2 text-[18px] sm:text-[25px] bg-white shadow-lg text-black min-h-screen sm:max-h-screen h-full w-full sticky top-0 z-50 ${isSidebarOpen ? "flex" : "hidden"
                }`
            }
        >
            <div
                className="relative p-8 w-full"
            >
                <Link href="/">
                    <div className="bg-blue-700 px-4 rounded-lg">
                        <Image
                            src={logo}
                            width={110}
                            height={100}
                            alt=""
                            className="object-cover object-center w-20 h-10 sm:w-44 sm:h-20"
                        />
                    </div>
                </Link>

                <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="fixed right-10 top-10 border rounded-full w-10 h-10 flex justify-center items-center lg:hidden bg-black text-white"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                <ul className="mt-6 sm:mt-14 md:mt-16 text-black space-y-4">
                    <li>
                        <Link className={`w-full flex items-center gap-3 text-lg  tracking-wide `} href="/settings/account-preferences">
                            <User className="w-5 h-5" />  Account Preferences
                        </Link>
                    </li>
                    <li>
                        <Link className="w-full flex items-center gap-3 text-lg tracking-wide" href="/settings/privacy-security">
                            <Lock className="w-5 h-5 mb-1" />  Privacy & Security
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

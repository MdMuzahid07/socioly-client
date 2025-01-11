import {
    Avatar,
    Button,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

import { LifeBuoy, Settings } from "lucide-react";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { useState } from "react";
import { motion } from "framer-motion";



export default function UserDropdown() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const router = useRouter();

    const handleDrop = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };


    const handleLogout = () => {
        router.push("/login");
    }


    return (
        <div className="">
            <Avatar
                onClick={handleDrop}
                isBordered
                as="button"
                className="transition-transform w-6 h-6 sm:h-8 sm:w-8"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
            {
                isDropdownOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="flex items-center justify-between"
                    >

                        <div className="h-[300px] w-[220px] bg-white rounded-lg border drop-shadow-sm absolute top-[70px] right-0 overflow-hidden">
                            <div className="p-4">
                                <div className="flex items-center gap-3 mb-4">
                                    <Avatar
                                        as="button"
                                        className="transition-transform w-11 h-11"
                                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                    />
                                    <div>
                                        <h1 className="text-lg font-bold">John Doe</h1>
                                        <p className="text-xs">Web Developer</p>
                                    </div>
                                </div>
                                <Button size="sm" className="w-full rounded-full bg-blue-700 text-white text-md">
                                    View Profile
                                </Button>
                                <div className="mt-6">
                                    <div onClick={() => router.push("/settings")} className="flex items-center w-full h-5 cursor-pointer hover:text-blue-700">
                                        <Settings className="w-4 h-4 mr-2" /> <p>Setting & Privacy</p>
                                    </div>
                                    <div className="flex items-center mt-2 w-full h-5 cursor-pointer hover:text-blue-700">
                                        <LifeBuoy className="w-4 h-4 mr-2" /> <p>Support</p>
                                    </div>
                                </div>

                            </div>
                            <ThemeSwitcher />
                            <div className="absolute bottom-0 w-full">
                                <button onClick={handleLogout} className="rounded-none h-7 bg-slate-200 w-full text-md font-semibold hover:bg-red-500 hover:text-white border-none shadow-none">Logout</button>
                            </div>
                        </div>
                    </motion.div>
                )
            }
        </div >
    );
};





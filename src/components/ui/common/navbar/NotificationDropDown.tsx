import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { Bell } from "lucide-react";
import NotificationCard from "./NotificationCard";

export default function NotificationDropDown() {
    return (
        <Dropdown placement="bottom-end" className="w-[95vw] sm:w-80 rounded-lg mt-4">
            <DropdownTrigger>
                <button className="w-7 sm:w-9 h-7 sm:h-9 bg-slate-100 hover:bg-white flex items-center justify-center rounded-full">
                    <Bell className="w-4 sm:w-5 h-4 sm:h-5 text-black" />
                </button>
            </DropdownTrigger>
            <DropdownMenu className="max-h-[60vh] sm:max-h-[40vh] overflow-y-auto custom-scrollbar">
                {
                    [1, 2, 3, 4, 5, 6, 7]?.map((index) => (
                        <DropdownItem key={index} className="p-0"  >
                            <NotificationCard />
                        </DropdownItem>
                    ))
                }
            </DropdownMenu>
        </Dropdown>
    );
};

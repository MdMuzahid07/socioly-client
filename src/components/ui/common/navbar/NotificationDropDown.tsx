import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { Bell } from "lucide-react";

export default function NotificationDropDown() {
    return (
        <Dropdown placement="bottom-end" className="w-80 rounded-lg mt-4">
            <DropdownTrigger>
                <button className="w-7 sm:w-9 h-7 sm:h-9 bg-slate-100 hover:bg-white flex items-center justify-center rounded-full">
                    <Bell className="w-4 sm:w-5 h-4 sm:h-5 text-black" />
                </button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions" className="bg-white text-black">
                <DropdownItem key="new">New file</DropdownItem>
                <DropdownItem key="copy">Copy link</DropdownItem>
                <DropdownItem key="edit">Edit file</DropdownItem>
                <DropdownItem key="delete" className="text-danger" color="danger">
                    Delete file
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}

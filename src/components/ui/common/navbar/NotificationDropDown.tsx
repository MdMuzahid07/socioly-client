import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { Bell } from "lucide-react";
import NotificationCard from "./NotificationCard";

export default function NotificationDropDown() {
  return (
    <Dropdown placement="bottom-end" className="mt-4 w-[95vw] rounded-lg sm:w-80">
      <DropdownTrigger>
        <button className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 hover:bg-white sm:h-9 sm:w-9">
          <Bell className="h-4 w-4 text-black sm:h-5 sm:w-5" />
        </button>
      </DropdownTrigger>
      <DropdownMenu className="custom-scrollbar max-h-[60vh] overflow-y-auto sm:max-h-[40vh]">
        {[1, 2, 3, 4, 5, 6, 7]?.map((index) => (
          <DropdownItem key={index} className="p-0">
            <NotificationCard />
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}

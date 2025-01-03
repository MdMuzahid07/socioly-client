import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Avatar,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";


export default function UserDropdown() {
    const router = useRouter();


    return (
        <div className="flex items-center gap-4">
            <Dropdown placement="bottom-end" className="rounded-lg w-60 mt-4 bg-white">
                <DropdownTrigger className="hidden sm:flex">
                    <Avatar
                        isBordered
                        as="button"
                        className="transition-transform w-6 h-6 sm:h-8 sm:w-8"
                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    />
                </DropdownTrigger>
                <DropdownMenu className="py-4 text-black" aria-label="Profile Actions" variant="flat">
                    <DropdownItem key="profile" className="h-14 gap-2 bg-white" variant="light">
                        <div className="flex items-center gap-2">
                            <Avatar
                                isBordered={false}
                                as="button"
                                className="transition-transform h-8 w-8"
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                            />
                            <div>
                                <p className="font-semibold text-sm">Signed in as</p>
                                <p className="text-xs">zoey@example.com</p>
                            </div>
                        </div>
                    </DropdownItem>
                    <DropdownItem onPress={() => router.push("/settings-privacy")} key="new"> Settings & Privacy</DropdownItem>
                    <DropdownItem key="copy">Support</DropdownItem>
                    <DropdownItem key="edit">Edit file</DropdownItem>
                    <DropdownItem key="delete" >
                        Delete file
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};





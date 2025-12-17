import ThemeSwitcher from "@/components/ThemeSwitcher";
import { navLinks } from "@/constants/NavItems";
import { MOCK_USERS } from "@/lib/data/mockData";
import {
  Avatar,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  useDisclosure,
} from "@nextui-org/react";
import { LifeBuoy, LogOut, Settings } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function UnifiedMobileSidebar() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();
  const user = MOCK_USERS.current;

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <div className="block sm:hidden">
      <Avatar
        onClick={onOpen}
        isBordered
        as="button"
        className="h-8 w-8 transition-transform"
        src={user.avatar}
      />
      <Drawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="right"
        className="rounded-l-xl"
        size="xs"
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1 border-b border-divider p-4">
                <div className="flex items-center gap-3">
                  <Avatar src={user.avatar} className="h-12 w-12" />
                  <div className="flex flex-col">
                    <span className="text-large font-bold">{user.name}</span>
                    <span className="text-small text-default-500">
                      {user.handle}
                    </span>
                  </div>
                </div>
                <Button
                  className="mt-3 w-full font-medium"
                  color="primary"
                  variant="flat"
                  radius="full"
                  size="sm"
                  onPress={() => {
                    router.push(`/profile/${user.id}`);
                    onClose();
                  }}
                >
                  View Profile
                </Button>
              </DrawerHeader>
              <DrawerBody className="p-4">
                <div className="flex flex-col gap-1">
                  {/* Navigation Links */}
                  <div className="mb-2 px-2 text-xs font-semibold uppercase text-default-500">
                    Menu
                  </div>
                  {navLinks.map((nav) => (
                    <Link
                      key={nav.title}
                      href={nav.path}
                      className="flex items-center gap-4 rounded-lg px-2 py-3 transition-colors hover:bg-default-100 active:bg-default-200"
                      onClick={() => onClose()}
                    >
                      <nav.icon className="h-5 w-5 text-default-600" />
                      <span className="text-medium font-medium">
                        {nav.title}
                      </span>
                    </Link>
                  ))}

                  <Divider className="my-4" />

                  {/* Account Settings */}
                  <div className="mb-2 px-2 text-xs font-semibold uppercase text-default-500">
                    Settings & Support
                  </div>

                  <button
                    onClick={() => {
                      router.push("/settings");
                      onClose();
                    }}
                    className="flex w-full items-center gap-4 rounded-lg px-2 py-3 text-left transition-colors hover:bg-default-100 active:bg-default-200"
                  >
                    <Settings className="h-5 w-5 text-default-600" />
                    <span className="text-medium font-medium">
                      Settings & Privacy
                    </span>
                  </button>

                  <button className="flex w-full items-center gap-4 rounded-lg px-2 py-3 text-left transition-colors hover:bg-default-100 active:bg-default-200">
                    <LifeBuoy className="h-5 w-5 text-default-600" />
                    <span className="text-medium font-medium">Support</span>
                  </button>

                  <div className="flex items-center justify-between px-2 py-3">
                    <span className="font-medium">Theme</span>
                    <ThemeSwitcher />
                  </div>
                </div>
              </DrawerBody>
              <DrawerFooter className="border-t border-divider p-4">
                <Button
                  color="danger"
                  variant="light"
                  className="w-full justify-start gap-4 px-2 font-medium"
                  onPress={handleLogout}
                >
                  <LogOut className="h-5 w-5" />
                  Logout
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  );
}

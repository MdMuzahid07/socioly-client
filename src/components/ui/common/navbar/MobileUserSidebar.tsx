import { navLinks } from "@/constants/NavItems";
import {
  Avatar,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  useDisclosure,
} from "@nextui-org/react";
import Link from "next/link";

export default function MobileUserSidebar() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex sm:hidden">
      <Avatar
        onClick={onOpen}
        isBordered
        as="button"
        className="h-6 w-6 transition-transform sm:h-8 sm:w-8"
        src="https://img.freepik.com/free-vector/cute-astronaut-floating-with-satellite-rocket-space-cartoon-vector-icon-illustration-science_138676-8894.jpg?t=st=1735653575~exp=1735657175~hmac=692eb217b46f3a8d64c255c1106bc86e5ee72755f115570662280c586f35a0a5&w=826"
      />
      <Drawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="rounded-none bg-slate-100 text-foreground"
      >
        <DrawerContent>
          {() => (
            <>
              <DrawerHeader className="flex flex-col gap-1">Menu</DrawerHeader>
              <DrawerBody>
                <div className="flex flex-col gap-4">
                  {navLinks.map((nav) => (
                    <Link
                      key={nav.title}
                      href={nav.path}
                      className="flex items-center gap-3 rounded-lg p-2 hover:bg-slate-200"
                      onClick={() => onOpenChange()}
                    >
                      <nav.icon className="h-6 w-6" />
                      <span className="text-lg font-medium">{nav.title}</span>
                    </Link>
                  ))}
                </div>
              </DrawerBody>
              <DrawerFooter className="flex flex-col gap-2">
                {/* Footer content if needed */}
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  );
}

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  Avatar,
} from "@nextui-org/react";

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
        className="rounded-none bg-slate-100 text-black"
      >
        <DrawerContent>
          {() => (
            <>
              <DrawerHeader className="flex flex-col gap-1">Drawer Title</DrawerHeader>
              <DrawerBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                  risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                  quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                  risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                  quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
                  adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
                  officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                  deserunt nostrud ad veniam.
                </p>
              </DrawerBody>
              <DrawerFooter>
                {/* <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button> */}
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  );
}

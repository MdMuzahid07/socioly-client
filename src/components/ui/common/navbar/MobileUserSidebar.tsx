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
            <button onClick={onOpen}>
                <Avatar

                    isBordered
                    as="button"
                    className="transition-transform w-6 h-6 sm:h-8 sm:w-8"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
            </button>
            <Drawer isOpen={isOpen} onOpenChange={onOpenChange} className="bg-slate-100 text-black rounded-none">
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

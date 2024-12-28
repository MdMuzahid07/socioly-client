import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    useDisclosure,
    Input,
} from "@nextui-org/react";
import { Search } from "lucide-react";


export const animals = [
    { key: "cat", label: "Cat" },
    { key: "dog", label: "Dog" },
    { key: "elephant", label: "Elephant" },
    { key: "lion", label: "Lion" },
    { key: "tiger", label: "Tiger" },
    { key: "giraffe", label: "Giraffe" },
    { key: "dolphin", label: "Dolphin" },
    { key: "penguin", label: "Penguin" },
    { key: "zebra", label: "Zebra" },
    { key: "shark", label: "Shark" },
    { key: "whale", label: "Whale" },
    { key: "otter", label: "Otter" },
    { key: "crocodile", label: "Crocodile" },
];



export default function SearchBar() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <button onClick={onOpen} className="w-7 sm:w-9 h-7 sm:h-9 bg-slate-100 hover:bg-white flex items-center justify-center rounded-full">
                <Search className="w-4 sm:w-5 h-4 sm:h-5 text-black" />
            </button>
            <Modal
                isDismissable={false}
                isKeyboardDismissDisabled={true}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className="rounded-lg text-black bg-slate-100 h-[70vh] sm:h-[60vh]"
                size="2xl"
            >
                <ModalContent>
                    {() => (
                        <>
                            <ModalHeader className="flex flex-row gap-1 bg-blue-700">
                                <Input size="md" radius="full" placeholder="Type here, result will appear automatically" className="w-[95%]" />
                            </ModalHeader>
                            <ModalBody className="max-h-[70vh] sm:max-h-[60vh] overflow-y-auto">
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
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                                    risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                                    quam.
                                </p> <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                                    risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                                    quam.
                                </p> <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                                    risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                                    quam.
                                </p> <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                                    risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                                    quam.
                                </p> <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                                    risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                                    quam.
                                </p> <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                                    risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                                    quam.
                                </p> <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                                    risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                                    quam.
                                </p> <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                                    risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                                    quam.
                                </p> <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                                    risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                                    quam.
                                </p> <p>
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
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

import {
    Modal,
    ModalContent,
    ModalBody,
    useDisclosure,
    Input,
} from "@nextui-org/react";
import EmojiPickerDropDown from "@/components/EmojiPickerDropDown";
import { Card, CardBody, Avatar, Button } from "@nextui-org/react";
import { ImageIcon, Video, Calendar, Send } from "lucide-react";
import SYTextArea from "@/components/form/SYTextArea";

export default function PostModal({ styles }: { styles?: string }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <span className="cursor-pointer w-full" onClick={onOpen}>
                <Input variant="underlined" placeholder="What's happening?" className="flex-1 w-full" />
            </span>
            <Modal backdrop="blur" isOpen={isOpen} className="max-h-[700px] h-72 rounded-lg" size="xl" onOpenChange={onOpenChange}>
                <ModalContent>
                    <>
                        <ModalBody className="p-0">
                            <Card className={`${styles} p-0 h-full rounded-lg relative`}>
                                <CardBody>
                                    <section className="flex gap-3">
                                        <Avatar className="w-9 h-9" src="https://img.freepik.com/free-photo/rocket-flying-through-space_23-2150378594.jpg?uid=R74546932&ga=GA1.1.1246546318.1733558748&semt=ais_hybrid" size="md" />
                                        <textarea placeholder="What's happening?" className="flex-1 w-full focus:outline-none p-2 text-black focus:border-b h-48 resize-none" />
                                        <Button isIconOnly title="Click to post" className="rounded-full text-blue-700 hover:bg-blue-700 hover:text-white border drop-shadow-sm bg-slate-100 absolute right-3 top-3">
                                            <Send className="w-4 h-4" />
                                        </Button>
                                    </section>
                                    <section className="absolute bottom-2 w-full right-0 left-0">
                                        <section className="flex justify-between mt-4">
                                            <Button className="rounded-full" variant="light" startContent={<ImageIcon className="w-4 h-4" />}>
                                                Photo
                                            </Button>
                                            <Button className="rounded-full" variant="light" startContent={<Video className="w-4 h-4" />}>
                                                Video
                                            </Button>
                                            <Button className="rounded-full" variant="light" startContent={<Calendar className="w-4 h-4" />}>
                                                Schedule
                                            </Button>
                                            <EmojiPickerDropDown />
                                        </section>
                                    </section>
                                </CardBody>
                            </Card>
                        </ModalBody>
                    </>
                </ModalContent>
            </Modal>
        </>
    );
};

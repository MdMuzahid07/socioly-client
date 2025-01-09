import PhotosCard from "@/components/ui/cards/profile/PhotosCard";
import {
    Modal,
    ModalContent,
    ModalBody,
    useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";

export default function ProfileImageView() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <span className="cursor-pointer" onClick={onOpen}>
                <PhotosCard />
            </span>
            <Modal backdrop="blur" isOpen={isOpen} className="max-h-[75vh] h-full rounded-lg" size="4xl" onOpenChange={onOpenChange}>
                <ModalContent>
                    <>
                        <ModalBody className="p-0">
                            <Image
                                src="https://img.freepik.com/free-photo/rocket-flying-through-space_23-2150378594.jpg?uid=R74546932&ga=GA1.1.1246546318.1733558748&semt=ais_hybrid"
                                alt={`Photo `}
                                className="object-cover aspect-square rounded-lg"
                                layout="responsive"
                                width={500}
                                height={400}
                            />
                        </ModalBody>
                    </>
                </ModalContent>
            </Modal>
        </>
    );
};

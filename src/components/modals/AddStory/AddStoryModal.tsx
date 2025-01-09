import AddStoryInput from "@/components/feed/feed/AddStoryInput";
import {
    Modal,
    ModalContent,
    ModalBody,
    useDisclosure,
} from "@nextui-org/react";
import DeleteAlertModal from "../DeleteAlertModal";
import { useState } from "react";

export default function AddStoryModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isConfirm, setIsConfirm] = useState(false);

    return (
        <>
            <span className="cursor-pointer" onClick={onOpen}>
                <AddStoryInput />
            </span>
            <Modal backdrop="blur" isOpen={isOpen} className="max-h-[75vh] h-full rounded-lg" size="4xl" onOpenChange={onOpenChange}>
                <ModalContent>
                    <>
                        <ModalBody className="p-0">
                            <DeleteAlertModal setIsConfirm={setIsConfirm} subText="Are you really want to delete this?" />
                        </ModalBody>
                    </>
                </ModalContent>
            </Modal>
        </>
    );
};

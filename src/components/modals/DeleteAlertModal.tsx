/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Modal,
    ModalContent,
    useDisclosure,
    Button,
} from "@nextui-org/react";
import { Trash2 } from "lucide-react";

export default function DeleteAlertModal({
    setIsConfirm,
    subText,
}: {
    setIsConfirm: (value: boolean) => void;
    subText: string;
}) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const handlePress = (arg: boolean) => {
        setIsConfirm(arg);
        onOpenChange();
    };

    return (
        <>
            <span className="cursor-pointer text-red-500" onClick={onOpen}>
                Delete
            </span>
            <Modal
                backdrop="blur"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className="h-auto rounded-lg"
                size="xs"
            >
                <ModalContent>
                    <div className="flex flex-col items-center justify-center py-4">
                        <div className="bg-red-100 p-4 rounded-full">
                            <Trash2 className="text-red-500" size={28} />
                        </div>
                        <h2 className="text-lg font-semibold text-black mt-4">
                            Confirm Delete
                        </h2>
                        <p className="text-sm text-gray-600 text-center">
                            {subText}
                        </p>
                        <div className="flex justify-between space-x-4 mt-4">
                            <Button
                                onPress={() => handlePress(false)}
                                className="px-6 rounded-full"
                                variant="faded"
                                size="sm"
                            >
                                Cancel
                            </Button>
                            <Button
                                onPress={() => handlePress(true)}
                                className="px-6 rounded-full bg-red-500 text-white hover:bg-red-600"
                                variant="flat"
                                size="sm"
                            >
                                Delete
                            </Button>
                        </div>
                    </div>
                </ModalContent>
            </Modal>
        </>
    );
}

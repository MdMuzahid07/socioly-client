import { Button, Modal, ModalContent, useDisclosure } from "@nextui-org/react";
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
            <div className="rounded-full bg-red-100 p-4">
              <Trash2 className="text-red-500" size={28} />
            </div>
            <h2 className="mt-4 text-lg font-semibold text-foreground">
              Confirm Delete
            </h2>
            <p className="text-center text-sm text-gray-600">{subText}</p>
            <div className="mt-4 flex justify-between space-x-4">
              <Button
                onPress={() => handlePress(false)}
                className="rounded-full px-6"
                variant="faded"
                size="sm"
              >
                Cancel
              </Button>
              <Button
                onPress={() => handlePress(true)}
                className="rounded-full bg-red-500 px-6 text-white hover:bg-red-600"
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

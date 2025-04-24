import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { Search } from "lucide-react";
import SearchResultCard from "./SearchResultCard";

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
      <button
        onClick={onOpen}
        className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 hover:bg-white sm:h-9 sm:w-9"
      >
        <Search className="h-4 w-4 text-black sm:h-5 sm:w-5" />
      </button>
      <Modal
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="h-[70vh] rounded-lg bg-slate-100 text-black sm:h-[60vh]"
        size="2xl"
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-row gap-1 bg-blue-700">
                <Input
                  size="md"
                  radius="full"
                  placeholder="Type here, result will appear automatically"
                  className="w-[95%]"
                />
              </ModalHeader>
              <ModalBody className="custom-scrollbar max-h-[70vh] overflow-y-auto pt-4 sm:max-h-[60vh]">
                <SearchResultCard />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

import VideosCard from "@/components/ui/cards/profile/VideosCard";
import { Modal, ModalContent, ModalBody, useDisclosure } from "@nextui-org/react";

export default function VideoFullView() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <span className="cursor-pointer" onClick={onOpen}>
        <VideosCard />
      </span>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        className="h-auto rounded-lg"
        size="4xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          <>
            <ModalBody className="p-0">
              <video
                src="/videos/my-video.mp4"
                controls
                autoPlay
                loop
                style={{ width: "100%", height: "auto" }}
              />
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}

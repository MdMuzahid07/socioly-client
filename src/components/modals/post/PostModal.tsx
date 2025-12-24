import {
  Avatar,
  Button,
  Card,
  CardBody,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import { Calendar, ImageIcon, Send, Video } from "lucide-react";

export default function PostModal({ styles }: { styles?: string }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <span className="w-full cursor-pointer" onClick={onOpen}>
        <Input
          variant="underlined"
          placeholder="What's happening?"
          className="w-full flex-1"
        />
      </span>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        className="h-72 max-h-[700px] rounded-lg"
        size="xl"
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>
          <>
            <ModalBody className="p-0">
              <Card className={`${styles} relative h-full rounded-lg p-0`}>
                <CardBody>
                  <section className="flex gap-3">
                    <Avatar
                      className="h-9 w-9"
                      src="https://img.freepik.com/free-photo/rocket-flying-through-space_23-2150378594.jpg?uid=R74546932&ga=GA1.1.1246546318.1733558748&semt=ais_hybrid"
                      size="md"
                    />
                    <textarea
                      placeholder="What's happening?"
                      className="h-48 w-full flex-1 resize-none p-2 text-foreground focus:border-b focus:outline-none"
                    />
                    <Button
                      onPress={() => onOpenChange()}
                      isIconOnly
                      title="Click to post"
                      className="absolute right-3 top-3 rounded-full border bg-slate-100 text-blue-700 drop-shadow-sm hover:bg-blue-700 hover:text-white"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </section>
                  <section className="absolute bottom-2 left-0 right-0 w-full">
                    <section className="mt-4 flex justify-between">
                      <Button
                        className="rounded-full"
                        variant="light"
                        startContent={<ImageIcon className="h-4 w-4" />}
                      >
                        Photo
                      </Button>
                      <Button
                        className="rounded-full"
                        variant="light"
                        startContent={<Video className="h-4 w-4" />}
                      >
                        Video
                      </Button>
                      <Button
                        className="rounded-full"
                        variant="light"
                        startContent={<Calendar className="h-4 w-4" />}
                      >
                        Schedule
                      </Button>
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
}

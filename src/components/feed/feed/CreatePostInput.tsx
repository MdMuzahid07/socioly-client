import PostModal from "@/components/modals/post/PostModal";
import { Card, CardBody, Avatar, Button } from "@nextui-org/react";
import { ImageIcon, Video, Calendar, Send } from "lucide-react";

export default function CreatePostInput({ styles }: { styles: string }) {
  return (
    <Card className={`${styles} p-0`}>
      <CardBody>
        <section className="relative flex gap-3">
          <Avatar
            className="h-8 w-8"
            src="https://img.freepik.com/free-photo/rocket-flying-through-space_23-2150378594.jpg?uid=R74546932&ga=GA1.1.1246546318.1733558748&semt=ais_hybrid"
            size="md"
          />
          <PostModal />
          <button className="absolute bottom-3 right-0 rounded-full">
            <Send className="h-4 w-4" />
          </button>
        </section>
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
      </CardBody>
    </Card>
  );
}

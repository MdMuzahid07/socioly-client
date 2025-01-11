import EmojiPickerDropDown from "@/components/EmojiPickerDropDown";
import PostModal from "@/components/modals/post/PostModal";
import { Card, CardBody, Avatar, Button } from "@nextui-org/react";
import { ImageIcon, Video, Calendar, Send } from "lucide-react";


export default function CreatePostInput({ styles }: { styles: string }) {
    return (
        <Card className={`${styles} p-0`}>
            <CardBody>
                <section className="flex gap-3 relative">
                    <Avatar className="w-8 h-8" src="https://img.freepik.com/free-photo/rocket-flying-through-space_23-2150378594.jpg?uid=R74546932&ga=GA1.1.1246546318.1733558748&semt=ais_hybrid" size="md" />
                    <PostModal />
                    <button className="rounded-full absolute right-0 bottom-3">
                        <Send className="w-4 h-4" />
                    </button>
                </section>
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
            </CardBody>
        </Card>
    )
};

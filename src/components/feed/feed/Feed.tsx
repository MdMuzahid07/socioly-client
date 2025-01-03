import PostCard from "@/components/ui/cards/profile/PostCard";
import AddStory from "./AddStory";
import CreatePostInput from "./CreatePostInput";

export default function Feed() {
    return (
        <div className="md:col-span-6 min-h-screen  w-full text-black">
            <AddStory />
            <CreatePostInput styles="mb-10 rounded-lg shadow-none drop-shadow-sm border" />
            {
                [1, 2, 3, 4, 5]?.map((item, index) => (<PostCard styles="border drop-shadow-sm shadow-none rounded-lg" key={index} />))
            }
        </div>
    )
};

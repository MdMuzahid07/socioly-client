import PostCard from "@/components/ui/cards/profile/PostCard";

export default function Feed() {
    return (
        <div className="md:col-span-6 min-h-screen  w-full text-black">
            {
                [1, 2, 3, 4, 5, 6, 7, 8, 9]?.map((item, index) => (<PostCard key={index} />))
            }
        </div>
    )
}

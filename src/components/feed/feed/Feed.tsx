"use client";
import LoadingSpinner from "@/components/LoadingSpinner";
import PostCard from "@/components/ui/cards/profile/PostCard";
import { useGetFeedQuery } from "@/lib/store/features/api/apiSlice";
import CreatePostInput from "./CreatePostInput";
import Stories from "./Stories";

export default function Feed() {
  const { data: posts, isLoading } = useGetFeedQuery();

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="space-y-6 pb-6">
      <Stories />

      <CreatePostInput />

      <div className="space-y-4">
        {posts?.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

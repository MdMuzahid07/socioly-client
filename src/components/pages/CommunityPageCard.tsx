import { Avatar, Card } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Heart, Users } from "lucide-react";
import Link from "next/link";

export default function CommunityPageCard({ page, index }: any) {
  return (
    <motion.div
      key={page.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.05 }}
    >
      <Link href={`/pages/${page.id}`}>
        <Card className="group overflow-hidden border-small border-divider bg-content1 transition-all hover:border-primary hover:shadow-lg">
          {/* Cover Image */}
          <div className="relative h-32 w-full overflow-hidden sm:h-40">
            <img
              src={page.coverImage}
              alt={page.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="p-4">
            {/* Profile Image */}
            <div className="-mt-12 mb-3">
              <Avatar
                src={page.profileImage}
                className="h-16 w-16 sm:h-20 sm:w-20"
                isBordered
              />
            </div>

            {/* Page Info */}
            <h3 className="mb-1 text-lg font-bold text-foreground group-hover:text-primary">
              {page.name}
            </h3>
            <p className="mb-2 text-xs text-default-500 sm:text-sm">
              {page.category}
            </p>
            <p className="mb-4 line-clamp-2 text-sm text-default-600">
              {page.description}
            </p>

            {/* Stats */}
            <div className="flex items-center gap-4 text-xs text-default-500 sm:text-sm">
              <div className="flex items-center gap-1">
                <Heart
                  size={16}
                  className={page.isLiked ? "fill-danger text-danger" : ""}
                />
                <span>{(page.likes / 1000).toFixed(1)}K</span>
              </div>
              <div className="flex items-center gap-1">
                <Users size={16} />
                <span>{(page.followers / 1000).toFixed(1)}K</span>
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}

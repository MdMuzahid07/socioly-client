"use client";

import { Avatar, Card, CardBody, CardHeader } from "@nextui-org/react";
import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  username: string;
  image: string;
  rating: number;
  review: string;
  date: string;
}

export default function ReviewCard({
  name,
  username,
  image,
  rating,
  review,
  date,
}: ReviewCardProps) {
  return (
    <Card className="border-small border-divider bg-content1/50 backdrop-blur-sm">
      <CardHeader className="flex justify-between gap-3 p-4 pb-0">
        <div className="flex gap-3">
          <Avatar isBordered radius="full" size="md" src={image} />
          <div className="flex flex-col items-start justify-center gap-1">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {name}
            </h4>
            <h5 className="text-small tracking-tight text-default-500">
              {username}
            </h5>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-warning text-warning" />
          <span className="text-small font-semibold text-default-600">
            {rating.toFixed(1)}
          </span>
        </div>
      </CardHeader>
      <CardBody className="px-4 py-3 text-small text-default-500">
        <p className="mb-2 leading-relaxed">{review}</p>
        <span className="text-xs text-default-400">{date}</span>
      </CardBody>
    </Card>
  );
}

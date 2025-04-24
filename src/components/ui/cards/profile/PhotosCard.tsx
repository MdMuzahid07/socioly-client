"use client";

import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

export default function PhotosCard() {
  const photos = Array.from({ length: 18 }, (_, i) => ({
    id: i + 1,
    src: `https://img.freepik.com/free-photo/rocket-flying-through-space_23-2150378594.jpg?uid=R74546932&ga=GA1.1.1246546318.1733558748&semt=ais_hybrid`,
  }));
  return (
    <Card className="mt-4 rounded-none border-none text-black shadow-none">
      <CardBody>
        <h3 className="mb-4 text-xl font-semibold">Photos</h3>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {photos?.map((photo) => (
            <Image
              key={photo.id}
              src={photo.src}
              alt={`Photo ${photo.id}`}
              className="aspect-square rounded-lg object-cover"
              layout="responsive"
              width={500}
              height={400}
            />
          ))}
        </div>
      </CardBody>
    </Card>
  );
}

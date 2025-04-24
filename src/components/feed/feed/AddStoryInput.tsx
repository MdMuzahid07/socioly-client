import React from "react";
import { Card, Avatar } from "@nextui-org/react";

export default function AddStoryInput() {
  return (
    <div>
      <Card
        className="relative h-40 w-24 cursor-pointer overflow-hidden rounded-lg bg-white"
        style={{
          backgroundImage: `url(${"https://img.freepik.com/free-vector/gradient-galaxy-background_52683-140963.jpg?t=st=1735897331~exp=1735900931~hmac=c60d4e5d12be4ef4021cd2a082f5bbfaf5970445eff1a4b30260b37b280fdb60&w=1380"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="">
          <h1 className="mt-16">Add Story</h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-10 w-24 rounded-b-lg bg-blue-700">
          <div className="-mt-5 flex justify-center">
            <Avatar
              src={
                "https://img.freepik.com/free-vector/gradient-galaxy-background_52683-140963.jpg?t=st=1735897331~exp=1735900931~hmac=c60d4e5d12be4ef4021cd2a082f5bbfaf5970445eff1a4b30260b37b280fdb60&w=1380"
              }
              size="lg"
              color="primary"
              className="h-10 w-10 border-2 border-white"
            />
          </div>
        </div>
      </Card>
    </div>
  );
}

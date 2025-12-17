import Image from "next/image";

export default function page() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-content2 px-6">
      <Image
        src="https://res.cloudinary.com/dlxfcyc7x/image/upload/v1735959790/chat-robot_ggsw95.jpg"
        alt=""
        width={250}
        height={250}
        className="rounded-full object-cover"
      />
    </div>
  );
}

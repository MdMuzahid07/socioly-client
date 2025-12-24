// import AddStoryInput from "@/components/feed/feed/AddStoryInput";
// import {
//     Modal,
//     ModalContent,
//     ModalBody,
//     useDisclosure,
//     Input,
// } from "@nextui-org/react";
// import { Images } from "lucide-react";

// export default function AddStoryModal() {
//     const { isOpen, onOpen, onOpenChange } = useDisclosure();

//     return (
//         <>
//             <span className="cursor-pointer" onClick={onOpen}>
//                 <AddStoryInput />
//             </span>
//             <Modal backdrop="blur" isOpen={isOpen} className="max-h-[60vh] h-full rounded-lg" size="md" onOpenChange={onOpenChange}>
//                 <ModalContent>
//                     <>
//                         <ModalBody className="p-0 text-foreground flex flex-col justify-center items-center">
//                             <button className=" flex flex-col justify-center items-center">
//                                 <Images />
//                                 <label htmlFor="selectAddStoryImage">
//                                     <h1 className="text-center mt-4">Select Image</h1>
//                                 </label>
//                             </button>
//                             <Input className="hidden" type="file" id="selectAddStoryImage" />
//                         </ModalBody>
//                     </>
//                 </ModalContent>
//             </Modal>
//         </>
//     );
// };

import AddStoryInput from "@/components/feed/feed/AddStoryInput";
import {
  Input,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import { Images } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function AddStoryModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Generate a temporary URL for the image
      setSelectedImage(imageUrl);
    }
  };

  return (
    <>
      <span className="cursor-pointer" onClick={onOpen}>
        <AddStoryInput />
      </span>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        className="h-full max-h-[60vh] rounded-lg"
        size="md"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          <>
            <ModalBody className="flex flex-col items-center justify-center p-0 text-foreground">
              {!selectedImage ? (
                // Show the image upload UI if no image is selected
                <label
                  htmlFor="selectAddStoryImage"
                  className="flex cursor-pointer flex-col items-center justify-center"
                >
                  <Images />
                  <h1 className="mt-4 text-center">Select Image</h1>
                </label>
              ) : (
                // Display the selected image
                <div className="h-full w-full">
                  <Image
                    src={selectedImage}
                    alt="Selected Story"
                    className="h-full w-full object-cover"
                    width={100}
                    height={100}
                    layout="responsive"
                  />
                </div>
              )}
              <Input
                className="hidden"
                type="file"
                id="selectAddStoryImage"
                accept="image/*"
                onChange={handleImageChange}
              />
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}

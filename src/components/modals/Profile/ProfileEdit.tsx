/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Avatar,
  Button,
  Card,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  Textarea,
  Tooltip,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import { Camera, X } from "lucide-react";
import React, { useRef, useState } from "react";

export default function ProfileEdit({
  onOpen,
  onOpenChange,
  isOpen,
}: {
  onOpen: any;
  onOpenChange: any;
  isOpen: any;
}) {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setProfileImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <>
      <Button
        onPress={onOpen}
        className="rounded-full"
        size="sm"
        color="primary"
        variant="faded"
      >
        Edit profile
      </Button>
      <Modal
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        className="rounded-lg text-foreground"
        size="4xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <Card className="w-full border-none py-6 shadow-none">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4 sm:space-y-8"
                  >
                    <section className="flex flex-col items-center justify-between gap-4 sm:gap-6 md:flex-row">
                      <h2 className="text-2xl font-bold text-foreground">
                        Edit Profile
                      </h2>
                      <div className="relative">
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                          ref={fileInputRef}
                        />
                        <Tooltip content="Upload profile picture">
                          <Avatar
                            src={
                              profileImage ||
                              "/placeholder.svg?height=128&width=128"
                            }
                            className="h-32 w-32 cursor-pointer text-large transition-transform hover:scale-105"
                            onClick={() => fileInputRef.current?.click()}
                          />
                        </Tooltip>
                        {profileImage && (
                          <motion.button
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            className="absolute -right-2 -top-2 rounded-full bg-danger p-1 text-white"
                            onClick={removeImage}
                          >
                            <X size={16} />
                          </motion.button>
                        )}
                        <motion.div
                          className="absolute bottom-0 right-0 cursor-pointer rounded-full bg-primary p-2 text-white"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => fileInputRef.current?.click()}
                        >
                          <Camera size={20} />
                        </motion.div>
                      </div>
                    </section>

                    <div className="grid grid-cols-2 gap-4 sm:gap-6">
                      <Input label="First Name" type="text" radius="full" />
                      <Input label="Last Name" type="text" radius="full" />
                    </div>

                    <Input
                      label="Headline"
                      placeholder="Enter your professional headline"
                      variant="bordered"
                    />

                    <Input
                      label="Location"
                      placeholder="Enter your location"
                      variant="bordered"
                    />

                    <Textarea
                      label="About"
                      placeholder="Tell us about yourself"
                      variant="bordered"
                      minRows={3}
                    />

                    <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
                      <Input
                        label="Website Link"
                        placeholder="Enter your website URL"
                        variant="bordered"
                      />
                      <Input
                        label="Website Link Text"
                        placeholder="Enter display text for your link"
                        variant="bordered"
                      />
                    </div>

                    <div className="flex justify-end">
                      <Button
                        color="primary"
                        size="sm"
                        className="rounded-full px-8"
                        onPress={onClose}
                      >
                        Save Profile
                      </Button>
                    </div>
                  </motion.div>
                </Card>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

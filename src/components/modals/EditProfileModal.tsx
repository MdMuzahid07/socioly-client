"use client";

import { MOCK_USERS } from "@/lib/data/mockData";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
} from "@nextui-org/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const profileSchema = z.object({
  name: z.string().min(1, "Name is required"),
  bio: z.string().max(160, "Bio must be less than 160 characters"),
  location: z.string().optional(),
  website: z.string().url("Invalid URL").optional().or(z.literal("")),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

interface EditProfileModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

export default function EditProfileModal({
  isOpen,
  onOpenChange,
}: EditProfileModalProps) {
  const user = MOCK_USERS.current; // simulate fetching current user

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user.name,
      bio: user.bio,
      location: user.location,
      website: "https://socioly.com", // Mock website
    },
  });

  useEffect(() => {
    if (isOpen) {
      reset({
        name: user.name,
        bio: user.bio,
        location: user.location,
        website: "https://socioly.com",
      });
    }
  }, [isOpen, reset, user]);

  const onSubmit = async (data: ProfileFormValues) => {
    console.log("Submitting profile update:", data);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    onOpenChange(); // Close modal
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="center"
      backdrop="blur"
      classNames={{
        base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
        header: "border-b-[1px] border-[#292f46]",
        footer: "border-t-[1px] border-[#292f46]",
        closeButton: "hover:bg-white/5 active:bg-white/10",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader className="flex flex-col gap-1 text-white">
              Edit Profile
            </ModalHeader>
            <ModalBody className="py-6">
              <div className="flex flex-col gap-4">
                <Input
                  {...register("name")}
                  label="Name"
                  placeholder="Enter your name"
                  variant="bordered"
                  isInvalid={!!errors.name}
                  errorMessage={errors.name?.message}
                  classNames={{
                    inputWrapper:
                      "border-white/20 hover:border-white/40 group-data-[focus=true]:border-blue-500",
                    input: "text-white",
                    label: "text-white/60",
                  }}
                />
                <Textarea
                  {...register("bio")}
                  label="Bio"
                  placeholder="Tell us about yourself"
                  variant="bordered"
                  isInvalid={!!errors.bio}
                  errorMessage={errors.bio?.message}
                  classNames={{
                    inputWrapper:
                      "border-white/20 hover:border-white/40 group-data-[focus=true]:border-blue-500",
                    input: "text-white",
                    label: "text-white/60",
                  }}
                />
                <Input
                  {...register("location")}
                  label="Location"
                  placeholder="Where are you based?"
                  variant="bordered"
                  isInvalid={!!errors.location}
                  errorMessage={errors.location?.message}
                  classNames={{
                    inputWrapper:
                      "border-white/20 hover:border-white/40 group-data-[focus=true]:border-blue-500",
                    input: "text-white",
                    label: "text-white/60",
                  }}
                />
                <Input
                  {...register("website")}
                  label="Website"
                  placeholder="https://yourwebsite.com"
                  variant="bordered"
                  isInvalid={!!errors.website}
                  errorMessage={errors.website?.message}
                  classNames={{
                    inputWrapper:
                      "border-white/20 hover:border-white/40 group-data-[focus=true]:border-blue-500",
                    input: "text-white",
                    label: "text-white/60",
                  }}
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Cancel
              </Button>
              <Button color="primary" type="submit" isLoading={isSubmitting}>
                Save Changes
              </Button>
            </ModalFooter>
          </form>
        )}
      </ModalContent>
    </Modal>
  );
}

"use client";

import CreatePageModal from "@/components/modals/CreatePageModal";
import { useDisclosure } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CommunityCreatePageView() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    onOpen();
  }, [onOpen]);

  const handleClose = () => {
    router.push("/pages");
  };

  return (
    <CreatePageModal
      isOpen={isOpen}
      onOpenChange={() => {
        onOpenChange();
        handleClose();
      }}
    />
  );
}

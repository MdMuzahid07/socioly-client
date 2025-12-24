"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
} from "@nextui-org/react";
import { Star } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface WriteReviewModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
  pageName: string;
}

export default function WriteReviewModal({
  isOpen,
  onOpenChange,
  pageName,
}: WriteReviewModalProps) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [review, setReview] = useState("");

  const handleSubmit = (onClose: () => void) => {
    if (rating === 0) {
      toast.error("Please select a rating");
      return;
    }
    if (!review.trim()) {
      toast.error("Please write a review");
      return;
    }

    // Mock submission
    toast.success("Review submitted successfully!");
    setRating(0);
    setReview("");
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="center"
      backdrop="blur"
      classNames={{
        base: "bg-content1 border border-divider",
        header: "border-b border-divider",
        footer: "border-t border-divider",
        closeButton: "hover:bg-default-100 active:bg-default-200",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Write a Review
              <span className="text-small font-normal text-default-500">
                Share your experience with {pageName}
              </span>
            </ModalHeader>
            <ModalBody className="py-6">
              <div className="flex flex-col gap-6">
                {/* Rating Input */}
                <div className="flex flex-col items-center gap-2">
                  <span className="text-sm font-medium text-default-600">
                    How would you rate this page?
                  </span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className="transition-transform hover:scale-110 focus:outline-none"
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        onClick={() => setRating(star)}
                      >
                        <Star
                          size={32}
                          className={`transition-colors ${
                            star <= (hoverRating || rating)
                              ? "fill-warning text-warning"
                              : "fill-transparent text-default-300"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Review Textarea */}
                <Textarea
                  label="Your Review"
                  placeholder="Tell us what you think..."
                  minRows={4}
                  value={review}
                  onValueChange={setReview}
                  variant="bordered"
                  classNames={{
                    inputWrapper: "bg-default-100 dark:bg-default-50/50",
                  }}
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                className="rounded-full"
                color="danger"
                variant="light"
                onPress={onClose}
              >
                Cancel
              </Button>
              <Button
                className="rounded-full"
                color="primary"
                onPress={() => handleSubmit(onClose)}
              >
                Submit Review
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

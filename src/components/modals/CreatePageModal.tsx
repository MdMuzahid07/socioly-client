"use client";

import { PAGE_CATEGORIES } from "@/lib/data/mockData";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Globe,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface CreatePageModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

export default function CreatePageModal({
  isOpen,
  onOpenChange,
}: CreatePageModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Basic Info
    name: "",
    username: "",
    category: "",
    description: "",

    // Step 2: Contact
    email: "",
    phone: "",
    website: "",

    // Step 3: Location & About
    city: "",
    country: "",
    about: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleNext = () => {
    if (step === 1) {
      if (!formData.name || !formData.category || !formData.description) {
        toast.error("Please fill in all required fields");
        return;
      }
    }
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);

    toast.success("Page created successfully!");
    setFormData({
      name: "",
      username: "",
      category: "",
      description: "",
      email: "",
      phone: "",
      website: "",
      city: "",
      country: "",
      about: "",
    });
    setStep(1);
    onOpenChange();
  };

  const steps = [
    { number: 1, title: "Basic Info", icon: Building2 },
    { number: 2, title: "Contact", icon: Mail },
    { number: 3, title: "Details", icon: Sparkles },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="3xl"
      classNames={{
        base: "bg-content1",
        header: "border-b border-divider",
        footer: "border-t border-divider",
      }}
      isDismissable={!isLoading}
      hideCloseButton={isLoading}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-3 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Create New Page</h2>
                  <p className="text-sm font-normal text-default-500">
                    Share your passion with the community
                  </p>
                </div>
              </div>

              {/* Progress Steps */}
              <div className="flex items-center justify-between">
                {steps.map((s, index) => {
                  const Icon = s.icon;
                  const isActive = step === s.number;
                  const isCompleted = step > s.number;

                  return (
                    <div key={s.number} className="flex flex-1 items-center">
                      <div className="flex flex-col items-center gap-2">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all ${
                            isActive
                              ? "border-primary bg-primary text-white"
                              : isCompleted
                                ? "border-success bg-success text-white"
                                : "border-default-200 bg-default-100 text-default-400"
                          }`}
                        >
                          <Icon size={18} />
                        </div>
                        <span
                          className={`text-xs font-medium ${
                            isActive
                              ? "text-primary"
                              : isCompleted
                                ? "text-success"
                                : "text-default-400"
                          }`}
                        >
                          {s.title}
                        </span>
                      </div>
                      {index < steps.length - 1 && (
                        <div
                          className={`mx-2 h-0.5 flex-1 ${
                            isCompleted ? "bg-success" : "bg-default-200"
                          }`}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </ModalHeader>

            <ModalBody className="gap-5 py-6">
              {/* Step 1: Basic Info */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <Input
                    label="Page Name"
                    placeholder="Enter your page name"
                    value={formData.name}
                    onValueChange={(value) =>
                      setFormData({ ...formData, name: value })
                    }
                    variant="bordered"
                    classNames={{
                      inputWrapper: "border-divider",
                    }}
                    isRequired
                    startContent={
                      <Building2 className="text-default-400" size={18} />
                    }
                  />

                  <Input
                    label="Username (Optional)"
                    placeholder="@yourpagename"
                    value={formData.username}
                    onValueChange={(value) =>
                      setFormData({ ...formData, username: value })
                    }
                    variant="bordered"
                    classNames={{
                      inputWrapper: "border-divider",
                    }}
                    description="This will be your page's unique identifier"
                  />

                  <Select
                    label="Category"
                    placeholder="Select a category"
                    selectedKeys={formData.category ? [formData.category] : []}
                    onSelectionChange={(keys) => {
                      const selected = Array.from(keys)[0] as string;
                      setFormData({ ...formData, category: selected });
                    }}
                    variant="bordered"
                    classNames={{
                      trigger: "border-divider",
                    }}
                    isRequired
                  >
                    {PAGE_CATEGORIES.map((category) => (
                      <SelectItem
                        key={category.name}
                        value={category.name}
                        startContent={
                          <span className="text-lg">{category.icon}</span>
                        }
                      >
                        {category.name}
                      </SelectItem>
                    ))}
                  </Select>

                  <Textarea
                    label="Description"
                    placeholder="Tell people what your page is about"
                    value={formData.description}
                    onValueChange={(value) =>
                      setFormData({ ...formData, description: value })
                    }
                    variant="bordered"
                    minRows={4}
                    classNames={{
                      inputWrapper: "border-divider",
                    }}
                    isRequired
                    description="Write a brief description (max 500 characters)"
                  />
                </motion.div>
              )}

              {/* Step 2: Contact Info */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <p className="text-sm text-default-500">
                    Add contact information so people can reach you (all
                    optional)
                  </p>

                  <Input
                    label="Email"
                    type="email"
                    placeholder="contact@yourpage.com"
                    value={formData.email}
                    onValueChange={(value) =>
                      setFormData({ ...formData, email: value })
                    }
                    variant="bordered"
                    classNames={{
                      inputWrapper: "border-divider",
                    }}
                    startContent={
                      <Mail className="text-default-400" size={18} />
                    }
                  />

                  <Input
                    label="Phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onValueChange={(value) =>
                      setFormData({ ...formData, phone: value })
                    }
                    variant="bordered"
                    classNames={{
                      inputWrapper: "border-divider",
                    }}
                    startContent={
                      <Phone className="text-default-400" size={18} />
                    }
                  />

                  <Input
                    label="Website"
                    type="url"
                    placeholder="https://yourwebsite.com"
                    value={formData.website}
                    onValueChange={(value) =>
                      setFormData({ ...formData, website: value })
                    }
                    variant="bordered"
                    classNames={{
                      inputWrapper: "border-divider",
                    }}
                    startContent={
                      <Globe className="text-default-400" size={18} />
                    }
                  />
                </motion.div>
              )}

              {/* Step 3: Location & About */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <p className="text-sm text-default-500">
                    Add location and additional details (all optional)
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input
                      label="City"
                      placeholder="New York"
                      value={formData.city}
                      onValueChange={(value) =>
                        setFormData({ ...formData, city: value })
                      }
                      variant="bordered"
                      classNames={{
                        inputWrapper: "border-divider",
                      }}
                      startContent={
                        <MapPin className="text-default-400" size={18} />
                      }
                    />

                    <Input
                      label="Country"
                      placeholder="United States"
                      value={formData.country}
                      onValueChange={(value) =>
                        setFormData({ ...formData, country: value })
                      }
                      variant="bordered"
                      classNames={{
                        inputWrapper: "border-divider",
                      }}
                      startContent={
                        <Globe className="text-default-400" size={18} />
                      }
                    />
                  </div>

                  <Textarea
                    label="About Your Page"
                    placeholder="Share more details about your page, mission, or goals..."
                    value={formData.about}
                    onValueChange={(value) =>
                      setFormData({ ...formData, about: value })
                    }
                    variant="bordered"
                    minRows={5}
                    classNames={{
                      inputWrapper: "border-divider",
                    }}
                    description="Tell your story and what makes your page unique"
                  />
                </motion.div>
              )}
            </ModalBody>

            <ModalFooter className="gap-2">
              {step > 1 && (
                <Button
                  variant="flat"
                  onPress={handleBack}
                  startContent={<ArrowLeft size={18} />}
                  isDisabled={isLoading}
                >
                  Back
                </Button>
              )}
              <Button
                className="rounded-full"
                variant="flat"
                onPress={onClose}
                isDisabled={isLoading}
              >
                Cancel
              </Button>
              {step < 3 ? (
                <Button
                  className="rounded-full"
                  color="primary"
                  onPress={handleNext}
                  endContent={<ArrowRight size={18} />}
                >
                  Next
                </Button>
              ) : (
                <Button
                  color="primary"
                  onPress={handleSubmit}
                  isLoading={isLoading}
                  endContent={<Sparkles size={18} />}
                >
                  Create Page
                </Button>
              )}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

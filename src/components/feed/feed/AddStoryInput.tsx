import {
  Button,
  Card,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";
import { ImagePlus, Plus, Upload, X } from "lucide-react";
import { useRef, useState } from "react";

export default function AddStoryInput() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const openAddModal = () => setIsAddModalOpen(true);

  const closeAddModal = () => {
    setIsAddModalOpen(false);
    setSelectedFile(null);
    setPreviewUrl(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
    if (file) setPreviewUrl(URL.createObjectURL(file));
  };

  const handleUpload = () => {
    // eslint-disable-next-line no-console
    console.log("Uploading:", selectedFile);
    closeAddModal();
  };

  return (
    <>
      <Card
        isPressable
        onPress={openAddModal}
        className="xs:h-[150px] xs:w-[95px] relative h-[140px] w-[90px] overflow-hidden rounded-xl bg-gradient-to-b from-primary/30 to-black text-white sm:h-[160px] sm:w-[100px] md:h-[170px] md:w-[110px] lg:h-[180px] lg:w-[120px]"
      >
        <div className="flex h-full flex-col items-center justify-center gap-1.5 sm:gap-2">
          <div className="rounded-full bg-primary p-1.5 shadow-lg sm:p-2">
            <Plus className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={3} />
          </div>
          <p className="text-[10px] font-semibold sm:text-sm">Add Story</p>
        </div>
      </Card>

      <Modal
        isOpen={isAddModalOpen}
        onClose={closeAddModal}
        size="sm"
        backdrop="blur"
        hideCloseButton
        classNames={{
          base: "mx-4",
        }}
      >
        <ModalContent>
          <ModalHeader className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
            <h3 className="text-base font-semibold sm:text-lg">Add Story</h3>
            <Button
              isIconOnly
              variant="light"
              size="sm"
              onPress={closeAddModal}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </ModalHeader>

          <ModalBody className="gap-3 px-4 pb-4 sm:gap-4 sm:px-6">
            <div
              onClick={() => fileInputRef.current?.click()}
              className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-default-300 p-4 text-center transition hover:border-primary hover:bg-primary/5 sm:p-6"
            >
              <ImagePlus className="h-7 w-7 text-default-500 sm:h-8 sm:w-8" />
              <p className="text-xs font-medium sm:text-sm">
                Click to upload an image
              </p>
              <p className="text-[10px] text-default-400 sm:text-xs">
                JPG, PNG • Max 5MB
              </p>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>

            {previewUrl && (
              <div className="relative overflow-hidden rounded-lg border shadow-sm">
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="h-32 w-full object-cover sm:h-40"
                />
                <Button
                  isIconOnly
                  size="sm"
                  variant="flat"
                  color="danger"
                  className="absolute right-2 top-2"
                  onPress={() => {
                    setSelectedFile(null);
                    setPreviewUrl(null);
                  }}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            )}

            <div className="flex justify-end gap-2">
              <Button
                variant="ghost"
                onPress={closeAddModal}
                size="sm"
                className="sm:size-md"
              >
                Cancel
              </Button>
              <Button
                color="primary"
                startContent={<Upload className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}
                onPress={handleUpload}
                isDisabled={!selectedFile}
                size="sm"
                className="sm:size-md"
              >
                Upload
              </Button>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

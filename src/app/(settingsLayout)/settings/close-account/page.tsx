"use client";
import { Button, Card, CardBody, Checkbox, Spacer } from "@nextui-org/react";
import { AlertCircle, Ban, Trash2 } from "lucide-react";
import { useState } from "react";

export default function CloseOrDeactivateAccount() {
  const [selectedOption, setSelectedOption] = useState<
    "delete" | "deactivate" | null
  >(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleOptionChange = (option: "delete" | "deactivate") => {
    setSelectedOption(option);
    setIsConfirmed(false); // Reset confirmation checkbox
  };

  const handleProceed = () => {
    if (selectedOption === "delete") {
      alert("Your account has been permanently deleted.");
    } else if (selectedOption === "deactivate") {
      alert("Your account has been deactivated.");
    }
  };

  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <Card className="w-full max-w-2xl bg-content1 shadow-md">
        <CardBody className="p-8">
          {/* Header */}
          <h2 className="mb-2 text-2xl font-bold text-foreground">
            Manage Your Account
          </h2>
          <p className="mb-6 text-default-500">
            Please choose one of the options below to manage your account:
          </p>

          {/* Options */}
          <div className="space-y-4">
            {/* Delete Account Option */}
            <div
              onClick={() => handleOptionChange("delete")}
              className={`cursor-pointer rounded-lg border-2 p-4 transition-colors ${
                selectedOption === "delete"
                  ? "border-danger bg-danger-50 dark:bg-danger/10"
                  : "border-default-200 hover:border-danger hover:bg-danger-50 dark:hover:bg-danger/10"
              }`}
            >
              <div className="mb-1 flex items-center gap-3">
                <Trash2 className="text-danger" size={20} />
                <h3 className="text-lg font-semibold text-foreground">
                  Delete Account
                </h3>
              </div>
              <p className="text-sm text-default-500">
                Permanently delete your account and all associated data. This
                action cannot be undone.
              </p>
            </div>

            {/* Deactivate Account Option */}
            <div
              onClick={() => handleOptionChange("deactivate")}
              className={`cursor-pointer rounded-lg border-2 p-4 transition-colors ${
                selectedOption === "deactivate"
                  ? "border-warning bg-warning-50 dark:bg-warning/10"
                  : "border-default-200 hover:border-warning hover:bg-warning-50 dark:hover:bg-warning/10"
              }`}
            >
              <div className="mb-1 flex items-center gap-3">
                <Ban className="text-warning" size={20} />
                <h3 className="text-lg font-semibold text-foreground">
                  Deactivate Account
                </h3>
              </div>
              <p className="text-sm text-default-500">
                Temporarily deactivate your account. You can reactivate it
                anytime by logging back in.
              </p>
            </div>
          </div>

          {/* Confirmation Section */}
          {selectedOption && (
            <div className="animate-in fade-in slide-in-from-top-2 mt-8 duration-300">
              <div className="mb-2 flex items-center gap-2 font-semibold text-foreground">
                <AlertCircle
                  size={18}
                  className={
                    selectedOption === "delete" ? "text-danger" : "text-warning"
                  }
                />
                <h4>
                  {selectedOption === "delete"
                    ? "Before you delete..."
                    : "Before you deactivate..."}
                </h4>
              </div>

              <ul className="mb-4 list-disc space-y-1 pl-6 text-default-500">
                {selectedOption === "delete" ? (
                  <>
                    <li>Take a backup of your data if needed.</li>
                    <li>
                      Your account and all data will be permanently deleted.
                    </li>
                  </>
                ) : (
                  <>
                    <li>Your account will be hidden from others.</li>
                    <li>
                      You can reactivate your account anytime by logging in.
                    </li>
                  </>
                )}
              </ul>

              {/* Checkbox Confirmation */}
              <Checkbox
                isSelected={isConfirmed}
                onValueChange={setIsConfirmed}
                color={selectedOption === "delete" ? "danger" : "warning"}
                classNames={{
                  label: "text-foreground",
                }}
              >
                Yes, I understand and want to proceed
              </Checkbox>
            </div>
          )}

          <Spacer y={8} />

          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            <Button
              variant="bordered"
              radius="full"
              onPress={() => setSelectedOption(null)}
            >
              Cancel
            </Button>
            <Button
              onPress={handleProceed}
              isDisabled={!isConfirmed || !selectedOption}
              color={selectedOption === "delete" ? "danger" : "warning"}
              variant={!isConfirmed ? "flat" : "solid"}
              radius="full"
              className="font-medium"
            >
              {selectedOption === "delete"
                ? "Delete Account"
                : "Deactivate Account"}
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

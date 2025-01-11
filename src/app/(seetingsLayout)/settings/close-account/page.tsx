"use client";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";

export default function CloseOrDeactivateAccount() {
    const [selectedOption, setSelectedOption] = useState<"delete" | "deactivate" | null>(null);
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleOptionChange = (option: "delete" | "deactivate") => {
        setSelectedOption(option);
        setIsConfirmed(false); // Reset confirmation checkbox
    };

    const handleConfirmationChange = () => {
        setIsConfirmed(!isConfirmed);
    };

    const handleProceed = () => {
        if (selectedOption === "delete") {
            alert("Your account has been permanently deleted.");
        } else if (selectedOption === "deactivate") {
            alert("Your account has been deactivated.");
        }
    };

    return (
        <section className="md:flex md:justify-center md:items-center h-screen">
            <section className="w-full p-8 border rounded-lg drop-shadow-md hover:drop-shadow-xl bg-white">
                {/* Header */}
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Manage Your Account</h2>

                {/* Instructions */}
                <p className="text-gray-700 mb-4">
                    Please choose one of the options below to manage your account:
                </p>

                {/* Options */}
                <section className="space-y-4">
                    {/* Delete Account Option */}
                    <div
                        onClick={() => handleOptionChange("delete")}
                        className={`p-4 border rounded-lg cursor-pointer ${selectedOption === "delete"
                            ? "border-red-500 bg-red-50"
                            : "border-gray-300 hover:border-red-400"
                            }`}
                    >
                        <h3 className="text-lg font-semibold text-gray-900">Delete Account</h3>
                        <p className="text-gray-600">
                            Permanently delete your account and all associated data. This action cannot be undone.
                        </p>
                    </div>

                    {/* Deactivate Account Option */}
                    <div
                        onClick={() => handleOptionChange("deactivate")}
                        className={`p-4 border rounded-lg cursor-pointer ${selectedOption === "deactivate"
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-300 hover:border-blue-400"
                            }`}
                    >
                        <h3 className="text-lg font-semibold text-gray-900">Deactivate Account</h3>
                        <p className="text-gray-600">
                            Temporarily deactivate your account. You can reactivate it anytime by logging back in.
                        </p>
                    </div>
                </section>

                {/* Confirmation Section */}
                {selectedOption && (
                    <div className="mt-6">
                        <h4 className="text-lg font-semibold text-gray-900">
                            {selectedOption === "delete" ? "Before you delete..." : "Before you deactivate..."}
                        </h4>
                        <ul className="list-disc list-inside text-gray-600 mt-2">
                            {selectedOption === "delete" ? (
                                <>
                                    <li>Take a backup of your data if needed.</li>
                                    <li>Your account and all data will be permanently deleted.</li>
                                </>
                            ) : (
                                <>
                                    <li>Your account will be hidden from others.</li>
                                    <li>You can reactivate your account anytime by logging in.</li>
                                </>
                            )}
                        </ul>

                        {/* Checkbox Confirmation */}
                        <div className="mt-4">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={isConfirmed}
                                    onChange={handleConfirmationChange}
                                    className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-200"
                                />
                                <span className="text-gray-700">
                                    Yes, I understand and want to proceed
                                </span>
                            </label>
                        </div>
                    </div>
                )}

                {/* Action Buttons */}
                <div className="flex justify-between items-center mt-8">
                    <Button
                        className="px-4 py-2 rounded-full border border-gray-400 text-gray-600 hover:bg-gray-50"
                        onPress={() => setSelectedOption(null)}
                    >
                        Cancel
                    </Button>
                    <Button
                        onPress={handleProceed}
                        disabled={!isConfirmed || !selectedOption}
                        className={`px-4 py-2 rounded-full font-semibold text-white ${isConfirmed && selectedOption
                            ? selectedOption === "delete"
                                ? "bg-red-600 hover:bg-red-700"
                                : "bg-blue-600 hover:bg-blue-700"
                            : "bg-gray-400 cursor-not-allowed"
                            }`}
                    >
                        {selectedOption === "delete" ? "Delete Account" : "Deactivate Account"}
                    </Button>
                </div>
            </section>
        </section>
    );
};


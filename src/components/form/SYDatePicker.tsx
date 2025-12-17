"use client";
import { DatePicker } from "@nextui-org/react";
import { Controller, useFormContext } from "react-hook-form";

interface SYDatePickerProps {
  label: string;
  name: string;
  variant?: "flat" | "bordered" | "underlined" | "faded";
  size?: "sm" | "md" | "lg";
  required?: boolean;
  radius?: "none" | "sm" | "md" | "lg" | "full";
}

export default function SYDatePicker({
  label,
  name,
  variant = "bordered",
  size = "lg",
  required = false,
  radius = "lg",
}: SYDatePickerProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: required ? `${label} is required` : false }}
      render={({ field }) => (
        <DatePicker
          label={label}
          variant={variant}
          size={size}
          radius={radius}
          isInvalid={!!errors[name]}
          errorMessage={errors[name]?.message as string}
          value={field.value} // Expecting DateValue from @internationalized/date or null
          onChange={field.onChange}
        />
      )}
    />
  );
}

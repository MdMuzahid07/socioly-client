"use client";
import { Select, SelectItem } from "@nextui-org/react";
import { Controller, useFormContext } from "react-hook-form";

interface SYSelectProps {
  label: string;
  name: string;
  options: { key: string; label: string }[];
  variant?: "flat" | "bordered" | "underlined" | "faded";
  size?: "sm" | "md" | "lg";
  required?: boolean;
  radius?: "none" | "sm" | "md" | "lg" | "full";
  disabled?: boolean;
}

export default function SYSelect({
  label,
  name,
  options,
  variant = "bordered",
  size = "lg",
  required = false,
  radius = "lg",
  disabled = false,
}: SYSelectProps) {
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
        <Select
          {...field}
          label={label}
          variant={variant}
          size={size}
          radius={radius}
          isDisabled={disabled}
          isInvalid={!!errors[name]}
          errorMessage={errors[name]?.message as string}
          // Adapt NextUI Selection to string
          selectedKeys={field.value ? [field.value] : []}
          onChange={(e) => field.onChange(e.target.value)}
        >
          {options.map((option) => (
            <SelectItem key={option.key} value={option.key}>
              {option.label}
            </SelectItem>
          ))}
        </Select>
      )}
    />
  );
}

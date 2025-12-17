"use client";
import { Avatar, Select, SelectItem } from "@nextui-org/react";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

export interface IconSelectOption {
  key: string;
  label: string;
  icon?: React.ReactNode;
  avatar?: string;
}

interface SYIconSelectProps {
  label: string;
  name: string;
  options: IconSelectOption[];
  variant?: "flat" | "bordered" | "underlined" | "faded";
  size?: "sm" | "md" | "lg";
  required?: boolean;
  radius?: "none" | "sm" | "md" | "lg" | "full";
  disabled?: boolean;
}

export default function SYIconSelect({
  label,
  name,
  options,
  variant = "bordered",
  size = "lg",
  required = false,
  radius = "lg",
  disabled = false,
}: SYIconSelectProps) {
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
          selectedKeys={field.value ? [field.value] : []}
          onChange={(e) => field.onChange(e.target.value)}
          items={options}
          renderValue={(items) => {
            return items.map((item) => (
              <div key={item.key} className="flex items-center gap-2">
                {item.data?.avatar && (
                  <Avatar
                    alt={item.data.label}
                    className="h-6 w-6"
                    src={item.data.avatar}
                  />
                )}
                {item.data?.icon && (
                  <span className="text-default-500">{item.data.icon}</span>
                )}
                <span className="text-small">{item.data?.label}</span>
              </div>
            ));
          }}
        >
          {(option) => (
            <SelectItem key={option.key} textValue={option.label}>
              <div className="flex items-center gap-2">
                {option.avatar && (
                  <Avatar
                    alt={option.label}
                    className="h-6 w-6"
                    src={option.avatar}
                  />
                )}
                {option.icon && (
                  <span className="text-default-500">{option.icon}</span>
                )}
                <span className="text-small">{option.label}</span>
              </div>
            </SelectItem>
          )}
        </Select>
      )}
    />
  );
}

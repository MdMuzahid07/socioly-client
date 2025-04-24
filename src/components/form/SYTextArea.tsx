"use client";
import { Textarea } from "@nextui-org/react";
import { useFormContext } from "react-hook-form";

interface SYInputProps {
  variant?: "flat" | "bordered" | "underlined" | "faded";
  size?: "sm" | "md" | "lg";
  required?: boolean;
  type?: "text" | "email" | "password";
  label: string;
  name: string;
  radius?: "none" | "sm" | "md" | "lg" | "full";
}

export default function SYTextArea({
  variant = "bordered",
  size = "lg",
  required = false,
  type = "text",
  label,
  name,
  radius = "lg",
  ...rest
}: SYInputProps) {
  // when we handle error using resolver, we found the error message in the formState
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Textarea
      {...register(name, { required })}
      errorMessage={errors[name]?.message as string}
      isInvalid={!!errors[name]}
      variant={variant}
      size={size}
      type={type}
      required={required}
      label={label}
      name={name}
      radius={radius}
      {...rest}
    />
  );
}

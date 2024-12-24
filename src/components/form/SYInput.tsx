"use client";
import { Input } from '@nextui-org/react'
import React from 'react'
import { useFormContext } from 'react-hook-form';



interface SYInputProps {
    variant?: "flat" | "bordered" | "underlined" | "faded";
    size?: "sm" | "md" | "lg";
    required?: boolean;
    type?: "text" | "email" | "password";
    label: string;
    name: string;
};


export default function SYInput({
    variant = "bordered",
    size = "md",
    required = false,
    type = "text",
    label,
    name
}: SYInputProps) {

    // when we handle error using resolver, we found the error message in the formState
    const { register, formState: { errors }
    } = useFormContext();

    return (
        <Input
            {...register(name, { required })}
            errorMessage={errors[name]?.message as string}
            isInvalid={!!errors[name]}
            variant={variant}
            size={size}
            type={type}
            required={required}
            label={label}
            name={name}
        />
    )
};

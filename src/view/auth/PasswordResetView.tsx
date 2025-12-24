/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import SYForm from "@/components/form/SYForm";
import SYInput from "@/components/form/SYInput";
import loginValidationSchema from "@/schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/react";

export default function PasswordResetView() {
  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <section className="flex min-h-screen flex-col md:flex-row">
      <div
        className="flex w-full items-center justify-center bg-blue-700 p-4 text-white md:order-2 md:w-1/2 md:p-8"
        style={{ flex: "0 0 50%" }}
      >
        <h1 className="text-4xl font-bold md:text-6xl">Socioly</h1>
      </div>
      <div
        className="flex w-full items-center justify-center bg-white text-black md:order-1 md:w-1/2"
        style={{ flex: "1 0 50%" }}
      >
        <div className="w-full max-w-lg rounded-2xl p-4 py-10 md:p-8 md:py-16">
          <h1 className="mb-8 text-4xl font-bold text-blue-700">
            Reset Password
          </h1>

          <SYForm
            onSubmit={onSubmit}
            resolver={zodResolver(loginValidationSchema)}
          >
            <div className="space-y-6">
              <SYInput
                label="Enter you email address"
                type="email"
                name="email"
                radius="full"
              />
              <Button
                type="submit"
                className="w-full rounded-full bg-blue-700 py-7 text-xl text-white"
              >
                Get an magic link
              </Button>
            </div>
          </SYForm>
        </div>
      </div>
    </section>
  );
}

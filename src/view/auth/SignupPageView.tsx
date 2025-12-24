/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import SYForm from "@/components/form/SYForm";
import SYInput from "@/components/form/SYInput";
import { logo } from "@/constants/Images";
import loginValidationSchema from "@/schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

import { useAuth } from "@/context/AuthContext";

export default function SignupPageView() {
  const { signup, isLoading } = useAuth();

  const onSubmit = async (data: any) => {
    try {
      await signup(data["full-name"], data.email, data.password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex min-h-screen flex-col md:flex-row">
      <div
        className="flex w-full items-center justify-center bg-primary p-4 text-white md:w-1/2 md:p-8"
        style={{ flex: "0 0 50%" }}
      >
        <Image
          src={logo}
          width={110}
          height={100}
          alt=""
          className="h-10 w-20 object-cover object-center sm:h-20 sm:w-44"
        />
      </div>
      <div
        className="flex w-full items-center justify-center bg-background text-foreground md:order-1 md:w-1/2"
        style={{ flex: "1 0 50%" }}
      >
        <div className="w-full max-w-lg rounded-2xl p-4 py-10 md:p-8 md:py-16">
          <h1 className="mb-8 text-4xl font-bold text-foreground">
            Create Account
          </h1>
          <SYForm
            onSubmit={onSubmit}
            resolver={zodResolver(loginValidationSchema)}
          >
            <div className="space-y-6">
              <SYInput
                label="Full Name"
                type="text"
                name="full-name"
                radius="full"
              />
              <SYInput
                label="Email Address"
                type="email"
                name="email"
                radius="full"
              />
              <SYInput
                label="Password"
                type="password"
                name="password"
                radius="full"
              />
              <div className="flex items-center justify-between text-sm font-bold text-primary">
                <p>
                  <span className="text-foreground">
                    Already have an account?{" "}
                  </span>
                  <Link href="/login">Login</Link>
                </p>
              </div>
              <Button
                type="submit"
                isLoading={isLoading}
                className="w-full rounded-full bg-primary py-7 text-xl text-white"
              >
                SignUp
              </Button>
            </div>
          </SYForm>
        </div>
      </div>
    </section>
  );
}

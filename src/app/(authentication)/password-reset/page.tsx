/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import SYForm from "@/components/form/SYForm";
import SYInput from "@/components/form/SYInput";
import loginValidationSchema from "@/schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/react";


export default function PasswordReset() {

    const onSubmit = async (data: any) => {
        console.log(data);
    }


    return (
        <section className="min-h-screen flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 flex justify-center items-center bg-blue-700 text-white p-4 md:p-8 md:order-2" style={{ flex: '0 0 50%' }}>
                <h1 className="text-4xl md:text-6xl font-bold">Socioly</h1>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center bg-white md:order-1 text-black" style={{ flex: '1 0 50%' }}>
                <div className="w-full max-w-lg p-4 py-10 md:p-8 md:py-16 rounded-2xl">
                    <h1 className="text-4xl font-bold mb-8 text-blue-700">Reset Password</h1>

                    <SYForm onSubmit={onSubmit} resolver={zodResolver(loginValidationSchema)}>
                        <div className="space-y-6">
                            <SYInput
                                label="Enter you email address"
                                type="email"
                                name="email"
                                radius="full"
                            />
                            <Button
                                type="submit"
                                className="w-full rounded-full bg-blue-700 text-white text-xl py-7"
                            >
                                Get an magic link
                            </Button>
                        </div>
                    </SYForm>
                </div>
            </div>
        </section>
    )
}












/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';



interface formConfig {
    defaultValues?: Record<string, any>;
    resolver?: any;
}

interface SYFormProps extends formConfig {
    children: React.ReactNode;
    onSubmit: SubmitHandler<any>;
};



export default function SYForm(
    {
        children,
        onSubmit,
        defaultValues,
        resolver
    }: SYFormProps
) {

    const formConfig: formConfig = {};

    if (!!defaultValues) {
        // using [] making and formConfig  property and setting it to defaultValues
        formConfig["defaultValues"] = defaultValues;
    }

    if (!!resolver) {
        formConfig["resolver"] = resolver;
    }






    const methods = useForm();
    const submitHandler = methods.handleSubmit;

    return (
        <FormProvider {...methods}>
            <form onSubmit={submitHandler(onSubmit)}>
                {children}
            </form>
        </FormProvider>
    )
};

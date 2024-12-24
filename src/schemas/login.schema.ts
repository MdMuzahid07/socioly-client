import { z } from "zod";

export const loginValidationSchema = z.object({
    email: z.string().trim().email("Invalid email"),
    password: z.string().min(6, "At least 6 characters"),
});
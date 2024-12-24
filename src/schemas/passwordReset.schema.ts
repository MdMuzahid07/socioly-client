import { z } from "zod";

const passwordResetValidationSchema = z.object({
    email: z.string().trim().email("Invalid email"),
});

export default passwordResetValidationSchema;
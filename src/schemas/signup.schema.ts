import { z } from "zod";

const signUPValidationSchema = z.object({
  name: z.string().min(3, "At least 3 characters"),
  email: z.string().trim().email("Invalid email"),
  bio: z.string().min(7, "At least 7 characters"),
  password: z.string().min(6, "At least 6 characters"),
  profileImg: z.custom((val) => val instanceof File, { message: "Invalid file type" }),
});

export default signUPValidationSchema;

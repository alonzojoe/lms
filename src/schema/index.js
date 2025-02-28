import { z } from "zod";

export const authSchema = z.object({
  email: z
    .string()
    .trim()
    .nonempty({ message: "Password is required" })
    .email({ message: "Please enter a valid email" }),
  password: z
    .string()
    .trim()
    .nonempty({ message: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters long" }),
});

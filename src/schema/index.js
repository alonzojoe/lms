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

export const registrySchema = z.object({
  name: z
    .string()
    .trim()
    .nonempty({ message: "Name is required" })
    .min(3, { message: `Name must be at least 3 characters long` }),
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
  confirmPasword: z
    .string()
    .trim()
    .nonempty({ message: "Confirm Password is required" })
    .min(6, { message: "Confirm Password must be at least 6 characters long" })
    .refine((val, ctx) => {
      if (val !== ctx.parent.password) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Password does not match",
        });
        return false;
      }
      return true;
    }),
});

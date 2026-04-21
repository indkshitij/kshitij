import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters"),

  email: z
    .string()
    .email("Enter a valid email address"),

  phone: z
    .string()
    .optional()
    .refine(
      (val) =>
        !val || /^\+?[1-9]\d{7,14}$/.test(val.replace(/\s/g, "")),
      "Enter a valid phone number"
    ),

  subject: z
    .string()
    .max(120, "Subject is too long")
    .optional(),

  message: z
    .string()
    .min(10, "Message should be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
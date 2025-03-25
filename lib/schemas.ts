import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const ProjectSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: "Name is required",
    })
    .max(255, {
      message: "Name must be less than 255 characters",
    }),
  description: z.string().max(255, {
    message: "Description must be less than 255 characters",
  }),
  ownerId: z.string(),
});
import { z } from "zod";

const gigSchema = z.object({
  services: z.array(z.string().min(1)).optional(),
  jobTitle: z.string().min(1, "Job title is required"),
  jobDescription: z.string().min(1, "Job description is required"),
  startDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid start date",
  }),
  endDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid end date",
  }),
  payment: z.object({
    token: z.string().min(1, "Token is required"),
    amount: z.number().positive("Amount must be a positive number"),
  }),
  milestones: z.array(z.string().min(1)).optional(),
});

export default gigSchema;

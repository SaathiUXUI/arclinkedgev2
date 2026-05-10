import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(1, "Company name is required"),
  budget: z.string().min(1, "Please select a budget range"),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const budgetOptions = [
  { value: "under-5k", label: "Under $5,000" },
  { value: "5k-15k", label: "$5,000 – $15,000" },
  { value: "15k-50k", label: "$15,000 – $50,000" },
  { value: "50k-plus", label: "$50,000+" },
];

export const projectTypeOptions = [
  { value: "web-development", label: "Web Development" },
  { value: "mobile-app", label: "Mobile App Development" },
  { value: "ui-ux-design", label: "UI/UX Design" },
  { value: "saas", label: "SaaS Development" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "cloud-devops", label: "Cloud & DevOps" },
  { value: "other", label: "Other" },
];

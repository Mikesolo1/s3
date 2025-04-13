
import { z } from "zod";

export const createContactFormSchema = (t: (key: string) => string, includeMessage: boolean) => {
  return z.object({
    name: z.string().min(2, { message: t("form.errors.name") }),
    phone: z.string().min(5, { message: t("form.errors.phone") }),
    email: z.string().email({ message: t("form.errors.email") }),
    message: includeMessage ? z.string().optional() : z.string().optional(),
    service: z.string().optional(),
    company: z.string().optional(),
  });
};

export type ContactFormValues = z.infer<ReturnType<typeof createContactFormSchema>>;

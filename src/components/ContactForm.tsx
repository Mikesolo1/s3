
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { sendToTelegram } from "@/lib/telegramApi";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { Loader2 } from "lucide-react";

interface ContactFormProps {
  onSuccess?: () => void;
  includeMessage?: boolean;
  includeService?: boolean;
  service?: string;
  buttonText?: string;
}

const ContactForm = ({ 
  onSuccess, 
  includeMessage = false, 
  includeService = false, 
  service = "", 
  buttonText 
}: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();
  
  // Define form schema with required fields
  const formSchema = z.object({
    name: z.string().min(2, { message: t("form.errors.name") }),
    phone: z.string().min(5, { message: t("form.errors.phone") }),
    email: z.string().email({ message: t("form.errors.email") }),
    message: includeMessage ? z.string().optional() : z.string().optional(),
    service: z.string().optional(),
    company: z.string().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
      service: service || "",
      company: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      console.log('Form values:', values);
      
      // Send data to Telegram
      const success = await sendToTelegram({
        name: values.name,
        phone: values.phone,
        email: values.email,
        message: values.message,
        service: values.service || service,
        company: values.company,
      });
      
      if (success) {
        toast({
          title: t("form.success.title"),
          description: t("form.success.description"),
        });
        
        form.reset();
        
        if (onSuccess) {
          onSuccess();
        }
      } else {
        toast({
          title: t("form.error.title"),
          description: t("form.error.description"),
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: t("form.error.title"),
        description: t("form.error.description"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("form.name")}</FormLabel>
              <FormControl>
                <Input placeholder={t("form.namePlaceholder")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("form.phone")}</FormLabel>
              <FormControl>
                <Input placeholder={t("form.phonePlaceholder")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("form.email")}</FormLabel>
              <FormControl>
                <Input placeholder={t("form.emailPlaceholder")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("form.company")}</FormLabel>
              <FormControl>
                <Input placeholder={t("form.companyPlaceholder")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {includeService && (
          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("form.service")}</FormLabel>
                <FormControl>
                  <Input 
                    placeholder={t("form.servicePlaceholder")} 
                    {...field} 
                    value={field.value || service}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        
        {includeMessage && (
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("form.message")}</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder={t("form.messagePlaceholder")} 
                    className="min-h-[100px]" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        
        <div className="pt-2">
          <p className="text-xs text-gray-500 mb-4">{t("form.privacy")}</p>
          <Button 
            type="submit" 
            className="w-full bg-whatsapp hover:bg-whatsapp-dark" 
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t("form.sending")}
              </span>
            ) : (
              buttonText || t("form.submit")
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;

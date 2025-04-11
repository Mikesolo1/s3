import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { 
  Loader2,
  CreditCard,
  Check
} from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';
import { sendTelegramMessage, formatFormDataForTelegram } from '@/utils/telegramApi';

export type TariffPlan = "basic" | "premium" | "business" | "";

interface TariffFormProps {
  initialPlan?: TariffPlan;
}

const TariffForm: React.FC<TariffFormProps> = ({ initialPlan = "" }) => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    message: '',
    plan: initialPlan
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Format the message for Telegram
      const formattedMessage = formatFormDataForTelegram(formData, "Запрос тарифа");
      
      // Send message to Telegram
      const response = await sendTelegramMessage(formattedMessage);
      
      if (response.ok) {
        toast({
          title: t("tariffs.form.success") || "Success!",
          description: t("tariffs.form.success.desc") || "Your request has been submitted successfully.",
        });
        
        // Reset form but keep selected plan
        const selectedPlan = formData.plan;
        setFormData({
          name: '',
          phone: '',
          email: '',
          company: '',
          message: '',
          plan: selectedPlan
        });
      } else {
        throw new Error('Failed to send message to Telegram');
      }
    } catch (error) {
      console.error("Error sending tariff form data to Telegram:", error);
      toast({
        title: t("tariffs.form.error") || "Error",
        description: t("tariffs.form.error.desc") || "There was a problem sending your request. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getPlanName = (plan: string): string => {
    switch(plan) {
      case "basic":
        return t("pricing.basic.title") || "Basic";
      case "premium":
        return t("pricing.premium.title") || "Premium";
      case "business":
        return t("pricing.business.title") || "Business";
      default:
        return "";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-3xl mx-auto">
      <div className="bg-whatsapp p-6 text-center">
        <h2 className="text-white text-2xl font-bold">
          {formData.plan 
            ? `${t("tariffs.form.title.selected") || "Request"} ${getPlanName(formData.plan)} ${t("tariffs.form.title.plan") || "plan"}`
            : t("tariffs.form.title") || "Request Pricing Information"
          }
        </h2>
        <p className="text-white/80 mt-2">{t("tariffs.form.subtitle") || "Fill out the form and we'll get back to you shortly"}</p>
      </div>
      
      <div className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                {t("tariffs.form.name") || "Full Name"}
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("tariffs.form.name.placeholder") || "Your name"}
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                {t("tariffs.form.phone") || "Phone Number"}
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+7 (999) 999-99-99"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                {t("tariffs.form.email") || "Email Address"}
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@company.com"
                required
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                {t("tariffs.form.company") || "Company Name"}
              </label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder={t("tariffs.form.company.placeholder") || "Your company"}
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="plan" className="block text-sm font-medium text-gray-700 mb-1">
              {t("tariffs.form.plan") || "Select Plan"}
            </label>
            <select
              id="plan"
              name="plan"
              value={formData.plan}
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="">{t("tariffs.form.plan.placeholder") || "Select a plan"}</option>
              <option value="basic">{t("pricing.basic.title") || "Basic"}</option>
              <option value="premium">{t("pricing.premium.title") || "Premium"}</option>
              <option value="business">{t("pricing.business.title") || "Business"}</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              {t("tariffs.form.message") || "Additional Information (Optional)"}
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t("tariffs.form.message.placeholder") || "Tell us about your requirements..."}
              rows={4}
            />
          </div>
          
          <div className="pt-4">
            <Button 
              type="submit" 
              className="bg-whatsapp hover:bg-whatsapp-dark text-white w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t("tariffs.form.sending") || "Sending..."}
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <CreditCard className="mr-2 h-4 w-4" />
                  {t("tariffs.form.submit") || "Request Information"}
                </span>
              )}
            </Button>
            <p className="text-sm text-gray-500 text-center mt-4">
              {t("tariffs.form.privacy") || "By submitting this form, you agree to our privacy policy."}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TariffForm;


import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { HandshakeIcon, Loader2 } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';
import { sendTelegramMessage, formatFormDataForTelegram } from '@/utils/telegramApi';

const PartnerForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Format the message for Telegram
      const formattedMessage = formatFormDataForTelegram(formData, "Партнерская программа");
      
      // Send message to Telegram
      const response = await sendTelegramMessage(formattedMessage);
      
      if (response.ok) {
        toast({
          title: t("partner.form.success") || "Success!",
          description: t("partner.form.success.desc") || "Your application has been submitted successfully.",
        });
        
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          company: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message to Telegram');
      }
    } catch (error) {
      console.error("Error sending partner form data to Telegram:", error);
      toast({
        title: t("partner.form.error") || "Error",
        description: t("partner.form.error.desc") || "There was a problem sending your application. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-3xl mx-auto">
      <div className="bg-whatsapp p-6 text-center">
        <h2 className="text-white text-2xl font-bold">{t("partner.form.title") || "Become Our Partner"}</h2>
        <p className="text-white/80 mt-2">{t("partner.form.subtitle") || "Fill out the form to join our partner program"}</p>
      </div>
      
      <div className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                {t("partner.form.name") || "Full Name"}
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("partner.form.name.placeholder") || "Your name"}
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                {t("partner.form.phone") || "Phone Number"}
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
                {t("partner.form.email") || "Email Address"}
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
                {t("partner.form.company") || "Company Name"}
              </label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder={t("partner.form.company.placeholder") || "Your company"}
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              {t("partner.form.message") || "Message (Optional)"}
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t("partner.form.message.placeholder") || "Tell us about yourself and your business..."}
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
                  {t("partner.form.sending") || "Sending..."}
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <HandshakeIcon className="mr-2 h-4 w-4" />
                  {t("partner.form.submit") || "Submit Application"}
                </span>
              )}
            </Button>
            <p className="text-sm text-gray-500 text-center mt-4">
              {t("partner.form.privacy") || "By submitting this form, you agree to our privacy policy."}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PartnerForm;

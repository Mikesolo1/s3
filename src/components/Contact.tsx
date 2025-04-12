
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { MessageSquare, Loader2 } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';
import { sendToTelegram } from '@/lib/telegramApi';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Validate form
      if (!formData.name || !formData.phone || !formData.email) {
        toast({
          title: t("form.error.title"),
          description: "Пожалуйста, заполните все обязательные поля",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      const success = await sendToTelegram({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.company ? `Компания: ${formData.company}` : ''
      });

      if (success) {
        toast({
          title: t("form.success.title"),
          description: t("form.success.description"),
        });
        
        setFormData({
          name: '',
          phone: '',
          email: '',
          company: ''
        });
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
    <section className="py-16 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="bg-whatsapp p-6 text-center">
              <h2 className="text-white text-2xl font-bold">{t("contact.title")}</h2>
              <p className="text-white/80 mt-2">{t("contact.subtitle")}</p>
            </div>
            
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      {t("form.name")}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t("form.namePlaceholder")}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      {t("form.phone")}
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t("form.phonePlaceholder")}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {t("form.email")}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t("form.emailPlaceholder")}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      {t("form.company")}
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={t("form.companyPlaceholder")}
                    />
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-4">
                  <p className="text-xs text-gray-500 text-center sm:text-left order-2 sm:order-1">
                    {t("form.privacy")}
                  </p>
                  <Button 
                    type="submit" 
                    className="bg-whatsapp hover:bg-whatsapp-dark text-white w-full sm:w-auto order-1 sm:order-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {t("form.sending")}
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        {t("form.submit")}
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

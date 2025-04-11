
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, MessageSquare } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';
import { sendTelegramMessage, formatFormDataForTelegram } from '@/utils/telegramApi';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  formType?: string;
}

const ContactDialog: React.FC<ContactDialogProps> = ({ open, onOpenChange, formType = "Всплывающая форма" }) => {
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
      const formattedMessage = formatFormDataForTelegram(formData, formType);
      
      // Send message to Telegram
      const response = await sendTelegramMessage(formattedMessage);
      
      if (response.ok) {
        toast({
          title: t("contact.success") || "Успешно!",
          description: t("contact.success.desc") || "Ваше сообщение отправлено.",
        });
        
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          company: '',
          message: ''
        });
        
        // Close dialog
        onOpenChange(false);
      } else {
        throw new Error('Failed to send message to Telegram');
      }
    } catch (error) {
      console.error("Error sending form data to Telegram:", error);
      toast({
        title: t("contact.error") || "Ошибка",
        description: t("contact.error.desc") || "Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте позже.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center">
            {t("contact.dialog.title") || "Связаться с нами"}
          </DialogTitle>
          <DialogDescription className="text-center">
            {t("contact.dialog.subtitle") || "Заполните форму, и мы свяжемся с вами в ближайшее время"}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="popup-name" className="block text-sm font-medium text-gray-700 mb-1">
                {t("contact.name") || "Имя"}
              </label>
              <Input
                id="popup-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("contact.name") || "Ваше имя"}
                required
              />
            </div>
            <div>
              <label htmlFor="popup-phone" className="block text-sm font-medium text-gray-700 mb-1">
                {t("contact.phone") || "Телефон"}
              </label>
              <Input
                id="popup-phone"
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
              <label htmlFor="popup-email" className="block text-sm font-medium text-gray-700 mb-1">
                {t("contact.email") || "Email"}
              </label>
              <Input
                id="popup-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@company.com"
                required
              />
            </div>
            <div>
              <label htmlFor="popup-company" className="block text-sm font-medium text-gray-700 mb-1">
                {t("contact.company") || "Компания"}
              </label>
              <Input
                id="popup-company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder={t("contact.company") || "Ваша компания"}
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="popup-message" className="block text-sm font-medium text-gray-700 mb-1">
              {t("contact.message") || "Сообщение"}
            </label>
            <Textarea
              id="popup-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t("contact.message.placeholder") || "Ваше сообщение..."}
              rows={3}
            />
          </div>
          
          <DialogFooter className="mt-6">
            <Button 
              type="submit" 
              className="bg-whatsapp hover:bg-whatsapp-dark text-white w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t("contact.sending") || "Отправка..."}
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  {t("contact.submit") || "Отправить"}
                </span>
              )}
            </Button>
          </DialogFooter>
          
          <p className="text-xs text-gray-500 text-center pt-2">
            {t("contact.privacy") || "Нажимая кнопку, вы соглашаетесь с нашей политикой конфиденциальности."}
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;

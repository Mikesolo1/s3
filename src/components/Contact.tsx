
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactForm from './ContactForm';

const Contact = () => {
  const { t } = useLanguage();

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
              <ContactForm buttonText={t("contact.submit")} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

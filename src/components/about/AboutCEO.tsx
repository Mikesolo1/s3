
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactDialog from '../ContactDialog';

const AboutCEO = () => {
  const { t } = useLanguage();

  return (
    <div className="p-6">
      <div className="flex items-center">
        <div className="h-16 w-16 rounded-full bg-gray-200 mr-4"></div>
        <div>
          <h3 className="font-bold text-lg">{t("about.ceo.name")}</h3>
          <p className="text-gray-600">{t("about.ceo.position")}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-600">
          {t("about.ceo.quote")}
        </p>
      </div>
      <ContactDialog
        title={t("partner.formTitle")}
        description={t("partner.formDescription")}
        includeMessage={true}
        buttonText={t("about.contact.button")}
        className="mt-4 w-full bg-whatsapp hover:bg-whatsapp-dark text-white"
      >
        {t("about.contact.button")}
      </ContactDialog>
    </div>
  );
};

export default AboutCEO;

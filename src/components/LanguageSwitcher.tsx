
import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="relative inline-block">
      <div className="flex items-center bg-gray-100 rounded-full p-1 border border-gray-200 shadow-sm">
        <button
          onClick={() => setLanguage('ru')}
          className={`px-2 py-1 text-sm font-medium rounded-full transition-colors ${
            language === 'ru' ? 'bg-white text-whatsapp shadow-sm' : 'text-gray-600 hover:text-whatsapp'
          }`}
          aria-label="Русский язык"
        >
          {t("lang.ru")}
        </button>
        <button
          onClick={() => setLanguage('kz')}
          className={`px-2 py-1 text-sm font-medium rounded-full transition-colors ${
            language === 'kz' ? 'bg-white text-whatsapp shadow-sm' : 'text-gray-600 hover:text-whatsapp'
          }`}
          aria-label="Казахский язык"
        >
          {t("lang.kz")}
        </button>
        <div className="hidden sm:flex items-center justify-center w-6 h-6 ml-1">
          <Globe className="h-4 w-4 text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;


import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ButtonWithDialog from './ButtonWithDialog';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-whatsapp py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-600/90 to-whatsapp z-10"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 z-0">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-white"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonWithDialog 
              className="bg-white text-whatsapp hover:bg-gray-100 font-medium text-lg px-8 py-3 rounded-lg"
              formType="Кнопка «Начать»"
            >
              {t('hero.button.start')}
            </ButtonWithDialog>
            <ButtonWithDialog 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium text-lg px-8 py-3 rounded-lg"
              formType="Кнопка «Узнать больше»"
            >
              {t('hero.button.learn')}
            </ButtonWithDialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import VideoSection from './about/VideoSection';
import AboutCEO from './about/AboutCEO';
import AboutInfo from './about/AboutInfo';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{t("about.title")}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("about.subtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <VideoSection />
            <AboutCEO />
          </div>
          
          <AboutInfo />
        </div>
      </div>
    </section>
  );
};

export default About;

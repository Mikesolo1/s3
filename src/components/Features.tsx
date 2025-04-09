
import React from 'react';
import { 
  Zap, 
  Shield, 
  Users, 
  MessageCircle, 
  ChevronRight, 
  UserCog, 
  Building, 
  MessagesSquare,
  Image,
  Clock,
  HeartHandshake
} from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
    <div className="h-12 w-12 bg-whatsapp/10 rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{t("features.title")}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("features.subtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Zap className="h-6 w-6 text-whatsapp" />}
            title={t("features.speed.title")}
            description={t("features.speed.desc")}
          />
          <FeatureCard
            icon={<UserCog className="h-6 w-6 text-whatsapp" />}
            title={t("features.personalization.title")}
            description={t("features.personalization.desc")}
          />
          <FeatureCard
            icon={<Shield className="h-6 w-6 text-whatsapp" />}
            title={t("features.noblocking.title")}
            description={t("features.noblocking.desc")}
          />
          <FeatureCard
            icon={<Building className="h-6 w-6 text-whatsapp" />}
            title={t("features.scale.title")}
            description={t("features.scale.desc")}
          />
          <FeatureCard
            icon={<HeartHandshake className="h-6 w-6 text-whatsapp" />}
            title={t("features.manager.title")}
            description={t("features.manager.desc")}
          />
          <FeatureCard
            icon={<Clock className="h-6 w-6 text-whatsapp" />}
            title={t("features.support.title")}
            description={t("features.support.desc")}
          />
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">{t("features.for.title")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-xl mb-3 text-whatsapp">{t("features.schools.title")}</h4>
              <p className="text-gray-600">
                {t("features.schools.desc")}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-xl mb-3 text-whatsapp">{t("features.services.title")}</h4>
              <p className="text-gray-600">
                {t("features.services.desc")}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-xl mb-3 text-whatsapp">{t("features.shops.title")}</h4>
              <p className="text-gray-600">
                {t("features.shops.desc")}
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">{t("features.crm.title")}</h3>
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h4 className="text-xl font-bold mb-3">{t("features.crm.subtitle")}</h4>
              <p className="text-gray-600 mb-4">
                {t("features.crm.desc")}
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="bg-gray-100 rounded-lg px-4 py-2 font-medium">AMOCRM</div>
                <div className="bg-gray-100 rounded-lg px-4 py-2 font-medium">BITRIX24</div>
                <div className="bg-gray-100 rounded-lg px-4 py-2 font-medium">API интеграция</div>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="h-24 w-24 bg-gray-200 rounded-full flex items-center justify-center">
                <MessagesSquare className="h-12 w-12 text-whatsapp" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;


import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Check, ChevronLeft, Ban } from "lucide-react";
import { Link } from 'react-router-dom';
import TariffDialog from '@/components/TariffDialog';
import ContactDialog from '@/components/ContactDialog';

const Tariffs = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero section */}
        <section className="py-12 bg-gradient-to-r from-green-50 to-emerald-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <Link to="/" className="inline-flex items-center text-gray-600 hover:text-whatsapp mb-4">
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  {t("tariffs.back")}
                </Link>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{t("tariffs.title")}</h1>
                <p className="text-lg text-gray-600 mb-6 max-w-2xl">{t("tariffs.subtitle")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tariff plans section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Basic Plan */}
              <div className="border rounded-xl shadow-sm overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{t("tariffs.basic.name")}</h3>
                  <p className="text-gray-600 mb-4">{t("tariffs.basic.desc")}</p>
                  <div className="text-3xl font-bold mb-2">15 000 ₽</div>
                  <p className="text-sm text-gray-500 mb-6">{t("tariffs.monthly")}</p>
                  
                  <TariffDialog 
                    tariffName={t("tariffs.basic.name")}
                    className="w-full mb-6 bg-whatsapp hover:bg-whatsapp-dark"
                  >
                    {t("tariffs.choose")}
                  </TariffDialog>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="text-whatsapp h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>5 000 {t("tariffs.messages")}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-whatsapp h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{t("tariffs.basic.feature1")}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-whatsapp h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{t("tariffs.basic.feature2")}</span>
                    </li>
                    <li className="flex items-start">
                      <Ban className="text-gray-400 h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-400">{t("tariffs.basic.missing1")}</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Standard Plan */}
              <div className="border rounded-xl shadow-sm overflow-hidden border-whatsapp bg-whatsapp/5">
                <div className="p-6">
                  <div className="bg-whatsapp text-white text-xs font-bold uppercase py-1 px-3 rounded-full inline-block mb-3">
                    {t("tariffs.popular")}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{t("tariffs.standard.name")}</h3>
                  <p className="text-gray-600 mb-4">{t("tariffs.standard.desc")}</p>
                  <div className="text-3xl font-bold mb-2">30 000 ₽</div>
                  <p className="text-sm text-gray-500 mb-6">{t("tariffs.monthly")}</p>
                  
                  <TariffDialog 
                    tariffName={t("tariffs.standard.name")}
                    className="w-full mb-6 bg-whatsapp hover:bg-whatsapp-dark"
                  >
                    {t("tariffs.choose")}
                  </TariffDialog>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="text-whatsapp h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>10 000 {t("tariffs.messages")}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-whatsapp h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{t("tariffs.standard.feature1")}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-whatsapp h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{t("tariffs.standard.feature2")}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-whatsapp h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{t("tariffs.standard.feature3")}</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Enterprise Plan */}
              <div className="border rounded-xl shadow-sm overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{t("tariffs.enterprise.name")}</h3>
                  <p className="text-gray-600 mb-4">{t("tariffs.enterprise.desc")}</p>
                  <div className="text-3xl font-bold mb-2">{t("tariffs.contact")}</div>
                  <p className="text-sm text-gray-500 mb-6">{t("tariffs.custom")}</p>
                  
                  <ContactDialog 
                    title={t("tariffs.enterprise.formTitle")}
                    description={t("tariffs.enterprise.formDescription")}
                    includeMessage={true}
                    includeService={true}
                    service={t("tariffs.enterprise.name")}
                    className="w-full mb-6 bg-whatsapp hover:bg-whatsapp-dark"
                  >
                    {t("tariffs.request")}
                  </ContactDialog>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="text-whatsapp h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{t("tariffs.enterprise.feature1")}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-whatsapp h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{t("tariffs.enterprise.feature2")}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-whatsapp h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{t("tariffs.enterprise.feature3")}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-whatsapp h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{t("tariffs.enterprise.feature4")}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">{t("tariffs.faq.title")}</h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">{t("tariffs.faq.q1")}</h3>
                <p className="text-gray-600">{t("tariffs.faq.a1")}</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">{t("tariffs.faq.q2")}</h3>
                <p className="text-gray-600">{t("tariffs.faq.a2")}</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">{t("tariffs.faq.q3")}</h3>
                <p className="text-gray-600">{t("tariffs.faq.a3")}</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">{t("tariffs.faq.q4")}</h3>
                <p className="text-gray-600">{t("tariffs.faq.a4")}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Tariffs;

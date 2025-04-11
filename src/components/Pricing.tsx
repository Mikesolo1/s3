
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check, ChevronRight } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import ContactDialog from './ContactDialog';

const Pricing = () => {
  const { t } = useLanguage();
  
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{t("pricing.title")}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("pricing.subtitle")}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden">
            <div className="bg-whatsapp p-6">
              <h3 className="text-white font-bold text-2xl">{t("pricing.compare")}</h3>
            </div>
            
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">{t("pricing.service")}</th>
                      <th className="text-center p-3">{t("pricing.plan")}</th>
                      <th className="text-center p-3">{t("pricing.meta")}</th>
                      <th className="text-center p-3">{t("pricing.commission")}</th>
                      <th className="text-center p-3">{t("pricing.total")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3">GETLOO</td>
                      <td className="text-center p-3">30 000</td>
                      <td className="text-center p-3">10 000 (~8 ₽) = 80 000 ₽</td>
                      <td className="text-center p-3">10 000 * (~5 ₽) = 50 000 ₽</td>
                      <td className="text-center p-3 font-bold">137 970 ₽</td>
                    </tr>
                    <tr className="border-b bg-green-50">
                      <td className="p-3 font-bold text-whatsapp">S3</td>
                      <td className="text-center p-3">30 000</td>
                      <td className="text-center p-3">10 000 (~8 ₽) = 80 000 ₽</td>
                      <td className="text-center p-3">10 000 * 0 = 0 ₽</td>
                      <td className="text-center p-3 font-bold">106 000 ₽</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-whatsapp/10 rounded-lg p-4 mt-6 flex items-center justify-between">
                <div className="font-bold text-lg">{t("pricing.savings")} <span className="text-whatsapp">31 970 ₽</span></div>
                <div>
                  <ContactDialog 
                    title={t("pricing.getStarted")}
                    description={t("pricing.formDescription")}
                    className="bg-whatsapp hover:bg-whatsapp-dark text-white"
                  >
                    {t("hero.button.start")}
                  </ContactDialog>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="mx-auto">
              <Link to="/tariffs">
                {t("pricing.viewall")} <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </div>
          
          <div className="mt-16 bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">{t("pricing.why.title")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="h-10 w-10 rounded-full bg-whatsapp/20 flex items-center justify-center text-whatsapp mr-3">
                    <Check className="h-5 w-5" />
                  </div>
                  <h4 className="font-semibold">{t("pricing.why.partner")}</h4>
                </div>
                <p className="text-gray-600">{t("pricing.why.partner.desc")}</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="h-10 w-10 rounded-full bg-whatsapp/20 flex items-center justify-center text-whatsapp mr-3">
                    <Check className="h-5 w-5" />
                  </div>
                  <h4 className="font-semibold">{t("pricing.why.prices")}</h4>
                </div>
                <p className="text-gray-600">{t("pricing.why.prices.desc")}</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="h-10 w-10 rounded-full bg-whatsapp/20 flex items-center justify-center text-whatsapp mr-3">
                    <Check className="h-5 w-5" />
                  </div>
                  <h4 className="font-semibold">{t("pricing.why.manager")}</h4>
                </div>
                <p className="text-gray-600">{t("pricing.why.manager.desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;


import React from 'react';
import { Button } from "@/components/ui/button";
import { Check, ChevronRight } from "lucide-react";

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Залетайте к нам на тест рассылок</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Бесплатная тестовая рассылка на 1000 сообщений
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden">
            <div className="bg-whatsapp p-6">
              <h3 className="text-white font-bold text-2xl">Сравните стоимость наших услуг</h3>
            </div>
            
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Сервис</th>
                      <th className="text-center p-3">Тариф</th>
                      <th className="text-center p-3">Оплата Meta</th>
                      <th className="text-center p-3">Комиссия на сообщение</th>
                      <th className="text-center p-3">Итого</th>
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
                <div className="font-bold text-lg">Экономия с S3: <span className="text-whatsapp">31 970 ₽</span></div>
                <div>
                  <Button className="bg-whatsapp hover:bg-whatsapp-dark text-white">
                    Начать бесплатно
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" className="mx-auto">
              Смотреть все тарифы <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          
          <div className="mt-16 bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Почему клиенты выбирают нас</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="h-10 w-10 rounded-full bg-whatsapp/20 flex items-center justify-center text-whatsapp mr-3">
                    <Check className="h-5 w-5" />
                  </div>
                  <h4 className="font-semibold">Официальный партнер</h4>
                </div>
                <p className="text-gray-600">Мы являемся официальным партнером Meta для WhatsApp Business API</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="h-10 w-10 rounded-full bg-whatsapp/20 flex items-center justify-center text-whatsapp mr-3">
                    <Check className="h-5 w-5" />
                  </div>
                  <h4 className="font-semibold">Прозрачные цены</h4>
                </div>
                <p className="text-gray-600">Никаких скрытых комиссий, оплата только за отправленные сообщения</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="h-10 w-10 rounded-full bg-whatsapp/20 flex items-center justify-center text-whatsapp mr-3">
                    <Check className="h-5 w-5" />
                  </div>
                  <h4 className="font-semibold">Личный менеджер</h4>
                </div>
                <p className="text-gray-600">Персональная поддержка на всех этапах использования сервиса</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

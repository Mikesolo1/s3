
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Check, ChevronLeft, Ban, Info } from "lucide-react";
import { Link } from 'react-router-dom';
import TariffDialog from '@/components/TariffDialog';
import ContactDialog from '@/components/ContactDialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

        {/* Tariff info section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="bg-whatsapp/10 p-4 rounded-lg mb-8">
              <h3 className="font-semibold mb-2">Важная информация о тарификации:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Info className="h-5 w-5 text-whatsapp mr-2 flex-shrink-0 mt-0.5" />
                  <span>Тарификация зависит от количества клиентов в базе</span>
                </li>
                <li className="flex items-start">
                  <Info className="h-5 w-5 text-whatsapp mr-2 flex-shrink-0 mt-0.5" />
                  <span>Количество отправляемых сообщений на стоимость не влияет</span>
                </li>
                <li className="flex items-start">
                  <Info className="h-5 w-5 text-whatsapp mr-2 flex-shrink-0 mt-0.5" />
                  <span>Оплата за отправленное сообщение происходит напрямую в facebook, без добавленной стоимости</span>
                </li>
              </ul>
            </div>
            
            <div className="overflow-x-auto rounded-lg border shadow mb-8">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Кол-во клиентов в базе</TableHead>
                    <TableHead>Стоимость</TableHead>
                    <TableHead className="text-right">Действие</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>до 15,000</TableCell>
                    <TableCell>12 тыс. руб.</TableCell>
                    <TableCell className="text-right">
                      <TariffDialog tariffName="До 15,000 клиентов" size="sm">Выбрать</TariffDialog>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>15,000 - 20,000</TableCell>
                    <TableCell>18 тыс. руб.</TableCell>
                    <TableCell className="text-right">
                      <TariffDialog tariffName="15,000 - 20,000 клиентов" size="sm">Выбрать</TariffDialog>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>20,000 - 30,000</TableCell>
                    <TableCell>22 тыс. руб.</TableCell>
                    <TableCell className="text-right">
                      <TariffDialog tariffName="20,000 - 30,000 клиентов" size="sm">Выбрать</TariffDialog>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>30,000 - 40,000</TableCell>
                    <TableCell>26 тыс. руб.</TableCell>
                    <TableCell className="text-right">
                      <TariffDialog tariffName="30,000 - 40,000 клиентов" size="sm">Выбрать</TariffDialog>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>40,000 - 50,000</TableCell>
                    <TableCell>38 тыс. руб.</TableCell>
                    <TableCell className="text-right">
                      <TariffDialog tariffName="40,000 - 50,000 клиентов" size="sm">Выбрать</TariffDialog>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>50,000 - 70,000</TableCell>
                    <TableCell>44 тыс. руб.</TableCell>
                    <TableCell className="text-right">
                      <TariffDialog tariffName="50,000 - 70,000 клиентов" size="sm">Выбрать</TariffDialog>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>70,000 - 100,000</TableCell>
                    <TableCell>60 тыс. руб.</TableCell>
                    <TableCell className="text-right">
                      <TariffDialog tariffName="70,000 - 100,000 клиентов" size="sm">Выбрать</TariffDialog>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>100,000 - 120,000</TableCell>
                    <TableCell>80 тыс. руб.</TableCell>
                    <TableCell className="text-right">
                      <TariffDialog tariffName="100,000 - 120,000 клиентов" size="sm">Выбрать</TariffDialog>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>120,000 - 150,000</TableCell>
                    <TableCell>96 тыс. руб.</TableCell>
                    <TableCell className="text-right">
                      <TariffDialog tariffName="120,000 - 150,000 клиентов" size="sm">Выбрать</TariffDialog>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>150,000 - 200,000</TableCell>
                    <TableCell>112 тыс. руб.</TableCell>
                    <TableCell className="text-right">
                      <TariffDialog tariffName="150,000 - 200,000 клиентов" size="sm">Выбрать</TariffDialog>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>200,000 - 300,000</TableCell>
                    <TableCell>140 тыс. руб.</TableCell>
                    <TableCell className="text-right">
                      <TariffDialog tariffName="200,000 - 300,000 клиентов" size="sm">Выбрать</TariffDialog>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>300,000 - 400,000</TableCell>
                    <TableCell>200 тыс. руб.</TableCell>
                    <TableCell className="text-right">
                      <TariffDialog tariffName="300,000 - 400,000 клиентов" size="sm">Выбрать</TariffDialog>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>свыше 400,000</TableCell>
                    <TableCell>индивидуально</TableCell>
                    <TableCell className="text-right">
                      <ContactDialog 
                        title="Индивидуальный расчет"
                        description="Для клиентских баз свыше 400,000 мы предлагаем индивидуальные условия"
                        includeMessage={true}
                        includeService={true}
                        service="Тариф для базы свыше 400,000"
                        size="sm"
                      >
                        Связаться
                      </ContactDialog>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            {/* CRM Integrations */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Интеграции с популярными CRM</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold">amoCRM</h4>
                  <p className="text-lg font-bold mt-2">6,000 руб.</p>
                  <ContactDialog 
                    title="Подключение amoCRM"
                    description="Оставьте свои контакты для подключения интеграции с amoCRM"
                    includeService={true}
                    service="Интеграция amoCRM"
                    className="mt-4 w-full"
                    size="sm"
                  >
                    Подключить
                  </ContactDialog>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold">Bitrix24</h4>
                  <p className="text-lg font-bold mt-2">6,000 руб.</p>
                  <ContactDialog 
                    title="Подключение Bitrix24"
                    description="Оставьте свои контакты для подключения интеграции с Bitrix24"
                    includeService={true}
                    service="Интеграция Bitrix24"
                    className="mt-4 w-full"
                    size="sm"
                  >
                    Подключить
                  </ContactDialog>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold">Yclients</h4>
                  <p className="text-lg font-bold mt-2">6,000 руб.</p>
                  <ContactDialog 
                    title="Подключение Yclients"
                    description="Оставьте свои контакты для подключения интеграции с Yclients"
                    includeService={true}
                    service="Интеграция Yclients"
                    className="mt-4 w-full"
                    size="sm"
                  >
                    Подключить
                  </ContactDialog>
                </div>
              </div>
            </div>
            
            {/* Additional Numbers */}
            <div className="mb-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Подключение дополнительных номеров</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white p-4 rounded-lg border">
                  <p className="font-semibold">+ 1 номер</p>
                  <p>+50% от тарифа</p>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <p className="font-semibold">каждый последующий</p>
                  <p>+25% от тарифа</p>
                </div>
              </div>
              <div className="bg-whatsapp/10 p-4 rounded-lg">
                <p className="font-medium">Пояснение:</p>
                <p>При использовании 2-х номеров стоимость будет 150% от тарифа вместо 200%, при использовании 3-х номеров 175%, при использовании 4-х номеров 200% и так далее</p>
              </div>
            </div>
            
            {/* Foreign Cards */}
            <div className="mb-8 p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-2">Карты иностранные</h3>
              <p className="text-lg">Комиссия 20%+6%</p>
            </div>
            
            {/* WhatsApp Business Manager */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Аккаунт WhatsApp Business Manager «под ключ»</h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-whatsapp mr-2 flex-shrink-0 mt-0.5" />
                    <span>Полная настройка аккаунта: Создание и оформление бизнес-аккаунта в Facebook с подключением WhatsApp Business Manager.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-whatsapp mr-2 flex-shrink-0 mt-0.5" />
                    <span>Что требуется: 1. Данные компании 2. Свидетельство о регистрации 3. Сайт с данными компании 4. Почта на домене сайта 5. Номер телефона</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-whatsapp mr-2 flex-shrink-0 mt-0.5" />
                    <span>Или сделаем под ключ самостоятельно</span>
                  </li>
                </ul>
                <div className="flex justify-between items-center mt-6">
                  <div>
                    <p className="text-sm text-gray-600">Срок: 48 ч.</p>
                    <p className="text-lg font-bold">Стоимость: 16 тыс. руб</p>
                  </div>
                  <ContactDialog 
                    title="Аккаунт WhatsApp Business Manager"
                    description="Оставьте свои контакты для создания аккаунта WhatsApp Business Manager «под ключ»"
                    includeService={true}
                    service="Аккаунт WhatsApp Business Manager"
                    size="sm"
                  >
                    Заказать
                  </ContactDialog>
                </div>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Подтверждение Business Manager</h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-whatsapp mr-2 flex-shrink-0 mt-0.5" />
                    <span>Покажем, где купить аккаунт FB и как его прогреть, стоимость акка 500-700р.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-whatsapp mr-2 flex-shrink-0 mt-0.5" />
                    <span>Подтвердим BM: Данные компании, Номер телефона</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-whatsapp mr-2 flex-shrink-0 mt-0.5" />
                    <span>Сайт/почта и все остальное мы сделаем сами</span>
                  </li>
                </ul>
                <div className="flex justify-between items-center mt-6">
                  <div>
                    <p className="text-sm text-gray-600">Срок: 24 ч.</p>
                    <p className="text-lg font-bold">Стоимость: 6 тыс. руб</p>
                  </div>
                  <ContactDialog 
                    title="Подтверждение Business Manager"
                    description="Оставьте свои контакты для подтверждения Business Manager"
                    includeService={true}
                    service="Подтверждение Business Manager"
                    size="sm"
                  >
                    Заказать
                  </ContactDialog>
                </div>
              </div>
            </div>
            
            {/* Price comparison */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Сравнение стоимости услуг</h3>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-center mb-4">
                  <span className="font-medium">Кол-во клиентов в базе:</span> 30,000 |
                  <span className="font-medium ml-2">Количество отправленных сообщений:</span> 10,000
                </p>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3"></th>
                        <th className="text-center p-3">Оплата Meta</th>
                        <th className="text-center p-3">Комиссия на сообщение</th>
                        <th className="text-center p-3">Тариф</th>
                        <th className="text-center p-3">Итого</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3">GETLOO</td>
                        <td className="text-center p-3">10 000 * (~8 ₽) = 80 000 ₽</td>
                        <td className="text-center p-3">10 000 * (~5 ₽) = 50 000 ₽</td>
                        <td className="text-center p-3">7 970 ₽</td>
                        <td className="text-center p-3 font-bold">137 970 ₽</td>
                      </tr>
                      <tr className="border-b bg-green-50">
                        <td className="p-3 font-bold text-whatsapp">S3</td>
                        <td className="text-center p-3">10 000 * (~8 ₽) = 80 000 ₽</td>
                        <td className="text-center p-3">10 000 * 0 = 0 ₽</td>
                        <td className="text-center p-3">26 000 ₽</td>
                        <td className="text-center p-3 font-bold">106 000 ₽</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="bg-whatsapp/10 rounded-lg p-4 mt-6 flex items-center justify-between">
                  <div className="font-bold text-lg">Экономия: <span className="text-whatsapp">31 970 ₽</span></div>
                  <div>
                    <ContactDialog 
                      title="Начать работу"
                      description="Оставьте свои контакты для подключения"
                      className="bg-whatsapp hover:bg-whatsapp-dark text-white"
                    >
                      Начать
                    </ContactDialog>
                  </div>
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

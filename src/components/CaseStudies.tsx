
import React from 'react';
import { Button } from "@/components/ui/button";
import { PlayCircle, ArrowRight, TrendingUp, DollarSign, Users } from "lucide-react";

const CaseCard = ({ 
  title, 
  client, 
  problem, 
  solution, 
  results 
}: { 
  title: string, 
  client: string, 
  problem: string, 
  solution: string[], 
  results: {label: string, value: string}[] 
}) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
    <div className="bg-whatsapp p-4">
      <h3 className="text-white font-bold text-xl">{title}</h3>
    </div>
    <div className="p-6">
      <div className="mb-4">
        <div className="text-sm text-gray-500 mb-1">Клиент</div>
        <div className="font-medium">{client}</div>
      </div>
      <div className="mb-4">
        <div className="text-sm text-gray-500 mb-1">Задача</div>
        <p>{problem}</p>
      </div>
      <div className="mb-4">
        <div className="text-sm text-gray-500 mb-1">Решение</div>
        <ul className="space-y-2">
          {solution.map((item, index) => (
            <li key={index} className="flex items-start">
              <ArrowRight className="h-5 w-5 text-whatsapp mr-2 flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <div className="text-sm text-gray-500 mb-1">Результаты</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
          {results.map((result, index) => (
            <div key={index} className="bg-gray-50 p-3 rounded-lg">
              <div className="text-whatsapp font-bold text-xl">{result.value}</div>
              <div className="text-sm text-gray-600">{result.label}</div>
            </div>
          ))}
        </div>
      </div>
      <Button variant="outline" className="w-full mt-2">
        <PlayCircle className="h-4 w-4 mr-2" /> Послушать отзыв
      </Button>
    </div>
  </div>
);

const CaseStudies = () => {
  return (
    <section id="cases" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Кейсы наших клиентов</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Реальные результаты от внедрения WhatsApp-маркетинга с нашим сервисом
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CaseCard
            title="ТОП-1 школа психологии"
            client="Школа психологии, лидер на рынке психологических курсов"
            problem="Быстро уведомить клиентов о старте нового продукта и повысить конверсию доходимости до вебинаров"
            solution={[
              "Автоматизировали рассылки WhatsApp",
              "Настроили воронку продаж",
              "Сделали интеграцию с AMOCRM"
            ]}
            results={[
              {label: "Увеличение доходимости на вебинар", value: "+10%"},
              {label: "Снижение цены заявки", value: "в 2 раза"}
            ]}
          />
          <CaseCard
            title="ТОП-1 школа астрологии"
            client="Школа астрологии, лидер на рынке астрологических прогнозов в России"
            problem="Реализовать приглашения на вебинары и повысить конверсию доходимости"
            solution={[
              "Автоматизировали рассылки WhatsApp",
              "Настроили воронку продаж",
              "Сделали интеграцию с AMOCRM"
            ]}
            results={[
              {label: "Увеличение доходимости на вебинар", value: "+7%"},
              {label: "Снижение стоимости чекина", value: "150₽"}
            ]}
          />
          <CaseCard
            title="Федеральная сеть магазинов «Алло Мама»"
            client="Сеть оффлайн магазинов аксессуаров для телефонов и гаджетов"
            problem="Настроить автоматизированные рассылки по сегментам ЦА: спящие клиенты, низкий чек, потерянные"
            solution={[
              "Автоматизировали рассылки WhatsApp",
              "Настроили воронку продаж",
              "Интегрировали промокоды"
            ]}
            results={[
              {label: "Увеличение доходимости в оффлайн магазины", value: "+7%"},
              {label: "Замеры через промокоды", value: "Рост продаж"}
            ]}
          />
        </div>
        
        <div className="mt-16">
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Кейс: Рассылка WhatsApp для возврата клиентов</h3>
                <div className="mb-4">
                  <div className="font-medium mb-1">Магазин одежды для детей (Казахстан)</div>
                  <p className="text-gray-600">Задача: Увеличить продажи, мотивируя клиентов возвращаться, покупать чаще и тратить больше</p>
                </div>
                <div className="bg-white p-4 rounded-lg mb-4">
                  <div className="text-sm text-gray-500 mb-2">Статистика:</div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div>
                      <div className="text-sm text-gray-600">Сообщений доставлено</div>
                      <div className="font-bold">571</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Сообщений прочитано</div>
                      <div className="font-bold">517</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Кол-во клиентов</div>
                      <div className="font-bold">34</div>
                    </div>
                  </div>
                </div>
                <div className="bg-whatsapp/10 p-4 rounded-lg">
                  <div className="text-lg font-bold mb-2">Результаты:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <TrendingUp className="h-8 w-8 text-whatsapp mr-3" />
                      <div>
                        <div className="font-bold">+5,000,000 ТГ</div>
                        <div className="text-sm text-gray-600">Рост выручки</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-8 w-8 text-whatsapp mr-3" />
                      <div>
                        <div className="font-bold">+6,000 ТГ</div>
                        <div className="text-sm text-gray-600">Рост среднего чека</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-center mb-4">
                    <div className="inline-block p-3 bg-green-100 rounded-full mb-2">
                      <Users className="h-6 w-6 text-whatsapp" />
                    </div>
                    <h4 className="text-lg font-bold">Совет от эксперта</h4>
                  </div>
                  <blockquote className="text-gray-600 italic mb-4">
                    "Продавать клиентам, которые у Вас уже покупали намного проще и дешевле чем привлекать новых"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-gray-200 mr-3"></div>
                    <div>
                      <div className="font-medium">Андрей Недорезов</div>
                      <div className="text-sm text-gray-500">CEO сервиса S3</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

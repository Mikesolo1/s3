
import React from 'react';
import { Button } from "@/components/ui/button";
import { PlayCircle, ArrowRight, TrendingUp, DollarSign, Users } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const CaseCard = ({ 
  title, 
  client, 
  problem, 
  solution, 
  results,
  listenText
}: { 
  title: string, 
  client: string, 
  problem: string, 
  solution: string[], 
  results: {label: string, value: string}[],
  listenText: string
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
        <PlayCircle className="h-4 w-4 mr-2" /> {listenText}
      </Button>
    </div>
  </div>
);

const CaseStudies = () => {
  const { t } = useLanguage();
  
  return (
    <section id="cases" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{t("cases.title")}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("cases.subtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CaseCard
            title={t("cases.psych.title")}
            client={t("cases.psych.client")}
            problem={t("cases.psych.problem")}
            solution={[
              t("cases.psych.solution1"),
              t("cases.psych.solution2"),
              t("cases.psych.solution3")
            ]}
            results={[
              {label: t("cases.psych.result1.label"), value: t("cases.psych.result1.value")},
              {label: t("cases.psych.result2.label"), value: t("cases.psych.result2.value")}
            ]}
            listenText={t("cases.listen")}
          />
          <CaseCard
            title={t("cases.astro.title")}
            client={t("cases.astro.client")}
            problem={t("cases.astro.problem")}
            solution={[
              t("cases.astro.solution1"),
              t("cases.astro.solution2"),
              t("cases.astro.solution3")
            ]}
            results={[
              {label: t("cases.astro.result1.label"), value: t("cases.astro.result1.value")},
              {label: t("cases.astro.result2.label"), value: t("cases.astro.result2.value")}
            ]}
            listenText={t("cases.listen")}
          />
          <CaseCard
            title={t("cases.allo.title")}
            client={t("cases.allo.client")}
            problem={t("cases.allo.problem")}
            solution={[
              t("cases.allo.solution1"),
              t("cases.allo.solution2"),
              t("cases.allo.solution3")
            ]}
            results={[
              {label: t("cases.allo.result1.label"), value: t("cases.allo.result1.value")},
              {label: t("cases.allo.result2.label"), value: t("cases.allo.result2.value")}
            ]}
            listenText={t("cases.listen")}
          />
        </div>
        
        <div className="mt-16">
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">{t("cases.clothes.title")}</h3>
                <div className="mb-4">
                  <div className="font-medium mb-1">{t("cases.clothes.client")}</div>
                  <p className="text-gray-600">{t("cases.clothes.task")}</p>
                </div>
                <div className="bg-white p-4 rounded-lg mb-4">
                  <div className="text-sm text-gray-500 mb-2">{t("cases.clothes.stats")}</div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div>
                      <div className="text-sm text-gray-600">{t("cases.clothes.delivered")}</div>
                      <div className="font-bold">571</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">{t("cases.clothes.read")}</div>
                      <div className="font-bold">517</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">{t("cases.clothes.clients")}</div>
                      <div className="font-bold">34</div>
                    </div>
                  </div>
                </div>
                <div className="bg-whatsapp/10 p-4 rounded-lg">
                  <div className="text-lg font-bold mb-2">{t("cases.clothes.results")}</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <TrendingUp className="h-8 w-8 text-whatsapp mr-3" />
                      <div>
                        <div className="font-bold">{t("cases.clothes.revenue.value")}</div>
                        <div className="text-sm text-gray-600">{t("cases.clothes.revenue")}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-8 w-8 text-whatsapp mr-3" />
                      <div>
                        <div className="font-bold">{t("cases.clothes.check.value")}</div>
                        <div className="text-sm text-gray-600">{t("cases.clothes.check")}</div>
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
                    <h4 className="text-lg font-bold">{t("cases.expert.title")}</h4>
                  </div>
                  <blockquote className="text-gray-600 italic mb-4">
                    {t("cases.expert.quote")}
                  </blockquote>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-gray-200 mr-3"></div>
                    <div>
                      <div className="font-medium">{t("cases.expert.name")}</div>
                      <div className="text-sm text-gray-500">{t("cases.expert.position")}</div>
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

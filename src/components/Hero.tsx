
import React from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-sm">
              <span className="rounded-full bg-whatsapp h-2 w-2 mr-1"></span>
              <span className="font-medium">Официальный партнер Meta</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Подключим продажи в <span className="text-whatsapp">WhatsApp</span> за 30 минут
            </h1>
            
            <p className="text-xl text-gray-600 max-w-lg">
              Без блокировок, с официальной регистрацией на вашу компанию и человеческим подходом к поддержке.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-whatsapp mr-2" />
                <span className="text-gray-700">Скорость интеграции — 30 минут</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-whatsapp mr-2" />
                <span className="text-gray-700">Персонализация — название и логотип вашей компании</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-whatsapp mr-2" />
                <span className="text-gray-700">Без блокировок — официальная регистрация</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-whatsapp hover:bg-whatsapp-dark text-white px-8 py-6 text-lg rounded-lg">
                Начать бесплатно
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg rounded-lg">
                Узнать стоимость
              </Button>
            </div>
          </div>
          
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-tr from-whatsapp/20 to-transparent rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-whatsapp flex items-center justify-center text-white font-bold text-xl mr-3">
                  S3
                </div>
                <div>
                  <div className="font-medium">S3 WhatsApp Business</div>
                  <div className="text-sm text-gray-500">Официальный партнер</div>
                </div>
              </div>
              
              <div className="bg-whatsapp-light rounded-lg p-4 mb-4">
                <p className="text-gray-700">👋 Здравствуйте! Мы поможем вам настроить продажи через WhatsApp за 30 минут. Начните бесплатное тестирование!</p>
              </div>
              
              <div className="flex justify-between">
                <div className="text-xs text-gray-500">Сегодня, 10:45</div>
                <div className="text-xs text-gray-500">Прочитано ✓✓</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

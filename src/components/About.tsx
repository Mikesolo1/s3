
import React from 'react';
import { Button } from "@/components/ui/button";
import { PlayCircle, Mail, Phone, MessageSquare } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Кто мы вообще такие S3?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            С нами легко и комфортно работать. Мы те ребята, которые глубоко разобрались в WhatsApp рассылках и маньячим за автоматизацию во всем
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <div className="flex items-center justify-center h-full">
                  <PlayCircle className="h-16 w-16 text-whatsapp" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-bold text-lg">Видео о нас</h3>
                  <p className="text-sm">Узнайте больше о нашем подходе к работе</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center">
                <div className="h-16 w-16 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <h3 className="font-bold text-lg">Андрей Недорезов</h3>
                  <p className="text-gray-600">CEO проекта S3</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600">
                  "Мы создали сервис, который решает реальные проблемы бизнеса. Наша миссия - сделать коммуникацию с клиентами эффективной, простой и доступной для компаний любого размера."
                </p>
              </div>
              <Button className="mt-4 w-full bg-whatsapp hover:bg-whatsapp-dark text-white">
                Связаться с нами
              </Button>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-3">Friendly-сервис с человеческим лицом</h3>
              <p className="text-gray-600">
                Мы понимаем, что за каждым бизнесом стоят люди. Поэтому наша поддержка всегда доступна, дружелюбна и готова помочь с любыми вопросами. Мы не просто предоставляем технологию, мы становимся вашим партнером в развитии бизнеса.
              </p>
            </div>
            
            <div className="bg-whatsapp/10 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Наши контакты</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-whatsapp mr-3" />
                  <span>+7 (993) 349-72-87</span>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-5 w-5 text-whatsapp mr-3" />
                  <span>@nedoorezov</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-whatsapp mr-3" />
                  <span>sales@s3.ru</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-3">Юридическая информация</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <div>ИП «ХХХ»</div>
                <div>ИНН: xxxxxxxxxx</div>
                <div>ОГРН: xxxxxxxxxx</div>
                <div>Веб-сайт: s-3.app</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

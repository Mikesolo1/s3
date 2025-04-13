
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageSquare } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';
import ContactDialog from './ContactDialog';

const About = () => {
  const { t } = useLanguage();
  const videoContainerRef = useRef<HTMLDivElement>(null);
  
  // Инициализация Vimeo плеера
  useEffect(() => {
    if (videoContainerRef.current) {
      // Проверяем, загружена ли уже библиотека Vimeo
      if (window.Vimeo && window.Vimeo.Player) {
        initializePlayer();
      } else {
        // Если библиотека еще не загружена, ждем ее загрузки
        const checkVimeo = setInterval(() => {
          if (window.Vimeo && window.Vimeo.Player) {
            clearInterval(checkVimeo);
            initializePlayer();
          }
        }, 100);
      }
    }
    
    function initializePlayer() {
      if (videoContainerRef.current) {
        // ID видео на Vimeo (замените на реальный ID)
        const vimeoVideoId = '890544349'; // Пример ID
        
        // Очищаем контейнер перед созданием плеера
        videoContainerRef.current.innerHTML = '';
        
        // Создаем iframe для Vimeo
        const iframe = document.createElement('iframe');
        iframe.src = `https://player.vimeo.com/video/${vimeoVideoId}?h=c97db7e86c&title=0&byline=0&portrait=0`;
        iframe.width = '100%';
        iframe.height = '100%';
        iframe.frameBorder = '0';
        iframe.allow = 'autoplay; fullscreen; picture-in-picture';
        iframe.style.position = 'absolute';
        iframe.style.top = '0';
        iframe.style.left = '0';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        
        // Добавляем iframe в контейнер
        videoContainerRef.current.appendChild(iframe);
      }
    }
    
    // Очистка при размонтировании компонента
    return () => {
      if (videoContainerRef.current) {
        videoContainerRef.current.innerHTML = '';
      }
    };
  }, []);
  
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
            <div className="relative">
              {/* Видео контейнер */}
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <div ref={videoContainerRef} className="w-full h-full relative">
                  {/* Vimeo iframe будет вставлен сюда через JavaScript */}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-bold text-lg">{t("about.video.title")}</h3>
                  <p className="text-sm">{t("about.video.subtitle")}</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center">
                <div className="h-16 w-16 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <h3 className="font-bold text-lg">{t("about.ceo.name")}</h3>
                  <p className="text-gray-600">{t("about.ceo.position")}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600">
                  {t("about.ceo.quote")}
                </p>
              </div>
              <ContactDialog
                title={t("partner.formTitle")}
                description={t("partner.formDescription")}
                includeMessage={true}
                buttonText={t("about.contact.button")}
                className="mt-4 w-full bg-whatsapp hover:bg-whatsapp-dark text-white"
              >
                {t("about.contact.button")}
              </ContactDialog>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-3">{t("about.friendly.title")}</h3>
              <p className="text-gray-600">
                {t("about.friendly.desc")}
              </p>
            </div>
            
            <div className="bg-whatsapp/10 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">{t("about.contacts.title")}</h3>
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
              <h3 className="font-bold text-lg mb-3">{t("about.legal.title")}</h3>
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

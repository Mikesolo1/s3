
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
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Инструмент, который хотят все маркетологи</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Максимум удобства — минимум усилий. Профессиональные инструменты WhatsApp Marketing для вашего бизнеса.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Zap className="h-6 w-6 text-whatsapp" />}
            title="Скорость"
            description="Запуск за 30 минут без сложных и долгих интеграций. Быстрый старт ваших продаж."
          />
          <FeatureCard
            icon={<UserCog className="h-6 w-6 text-whatsapp" />}
            title="Персонализация"
            description="Клиентам отображается название и логотип вашей компании, что повышает доверие и узнаваемость."
          />
          <FeatureCard
            icon={<Shield className="h-6 w-6 text-whatsapp" />}
            title="Без блокировок"
            description="Предоставляем готовые настроенные аккаунты, зарегистрированные на вашу компанию."
          />
          <FeatureCard
            icon={<Building className="h-6 w-6 text-whatsapp" />}
            title="Для любого масштаба"
            description="Легкое подключение WhatsApp Business API для рассылок от 1 000 сообщений до бесконечности."
          />
          <FeatureCard
            icon={<HeartHandshake className="h-6 w-6 text-whatsapp" />}
            title="Персональный менеджер"
            description="Выделяем персонального аккаунт-менеджера, который поможет решить любые вопросы."
          />
          <FeatureCard
            icon={<Clock className="h-6 w-6 text-whatsapp" />}
            title="Быстрая поддержка"
            description="С подключением справится любой. Даем простую видео-инструкцию и быструю поддержку."
          />
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Для кого наш сервис</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-xl mb-3 text-whatsapp">Онлайн-школы</h4>
              <p className="text-gray-600">
                Прогрев перед вебинаром, переписка с клиентами в CRM, рассылки и напоминания для активации новых и старых клиентов.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-xl mb-3 text-whatsapp">Услуги</h4>
              <p className="text-gray-600">
                Отправка результатов анализов, напоминания о записях и техобслуживании. Акции, сбор отзывов, программа лояльности.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-xl mb-3 text-whatsapp">Магазины</h4>
              <p className="text-gray-600">
                Отправка каруселей изображений для продаж, рассылки акций и скидок, персонализированные рекомендации товаров.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Интеграция с CRM</h3>
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h4 className="text-xl font-bold mb-3">Комфортная интеграция с вашими системами</h4>
              <p className="text-gray-600 mb-4">
                Мы комфортно и быстро интегрируемся в ваши CRM-системы или любую другую систему через API.
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


import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  LineChart, 
  PieChart, 
  MessageCircle, 
  Eye, 
  ExternalLink 
} from 'lucide-react';

const Stats = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Статистика и аналитика</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полная прозрачность и детальные отчеты по всем активностям в WhatsApp
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-bold mb-4">Пример статистики из личного кабинета</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <div className="font-medium">Сообщения отправлены</div>
                  <div className="bg-whatsapp text-white text-xs px-2 py-1 rounded">660</div>
                </div>
                <div className="flex items-center">
                  <div className="h-2 bg-whatsapp rounded-full w-full"></div>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <div className="font-medium">Сообщения доставлены</div>
                  <div className="bg-whatsapp text-white text-xs px-2 py-1 rounded">624</div>
                </div>
                <div className="flex items-center">
                  <div className="h-2 bg-whatsapp rounded-full w-[95%]"></div>
                  <div className="h-2 bg-gray-200 rounded-full w-[5%]"></div>
                </div>
                <div className="text-xs text-gray-500 mt-1 text-right">95% доставка</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <div className="font-medium">Сообщения прочитаны</div>
                  <div className="bg-whatsapp text-white text-xs px-2 py-1 rounded">571</div>
                </div>
                <div className="flex items-center">
                  <div className="h-2 bg-whatsapp rounded-full w-[92%]"></div>
                  <div className="h-2 bg-gray-200 rounded-full w-[8%]"></div>
                </div>
                <div className="text-xs text-gray-500 mt-1 text-right">92% прочитаны</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <div className="font-medium">Клик на сайт</div>
                  <div className="bg-whatsapp text-white text-xs px-2 py-1 rounded">218</div>
                </div>
                <div className="flex items-center">
                  <div className="h-2 bg-whatsapp rounded-full w-[35%]"></div>
                  <div className="h-2 bg-gray-200 rounded-full w-[65%]"></div>
                </div>
                <div className="text-xs text-gray-500 mt-1 text-right">35% кликов</div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium">Динамика открытий по дням</h4>
                <LineChart className="h-5 w-5 text-gray-500" />
              </div>
              <div className="h-32 flex items-end space-x-2">
                <div className="h-[70%] w-full bg-whatsapp/20 rounded-t-md relative">
                  <div className="absolute top-0 left-0 w-full text-xs text-center -mt-5">17 янв</div>
                </div>
                <div className="h-[90%] w-full bg-whatsapp rounded-t-md relative">
                  <div className="absolute top-0 left-0 w-full text-xs text-center -mt-5">18 янв</div>
                </div>
                <div className="h-[60%] w-full bg-whatsapp/70 rounded-t-md relative">
                  <div className="absolute top-0 left-0 w-full text-xs text-center -mt-5">19 янв</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-bold mb-4">WhatsApp vs СМС</h3>
            
            <table className="w-full mb-8">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Параметр</th>
                  <th className="text-center p-2">WhatsApp</th>
                  <th className="text-center p-2">СМС</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2">% доставляемости</td>
                  <td className="text-center p-2 font-medium">92%</td>
                  <td className="text-center p-2 text-gray-500">Неизвестен</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Статистика и аналитика</td>
                  <td className="text-center p-2">
                    <div className="flex justify-center">
                      <span className="bg-green-100 text-green-800 text-xs rounded px-2 py-1">Да</span>
                    </div>
                  </td>
                  <td className="text-center p-2">
                    <div className="flex justify-center">
                      <span className="bg-red-100 text-red-800 text-xs rounded px-2 py-1">Нет</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">CTR</td>
                  <td className="text-center p-2 font-medium">42%</td>
                  <td className="text-center p-2 text-gray-500">Низкий</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Общение</td>
                  <td className="text-center p-2">Двустороннее + боты</td>
                  <td className="text-center p-2">Одностороннее</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Уровень удержания клиентов</td>
                  <td className="text-center p-2 font-medium">50%</td>
                  <td className="text-center p-2 text-gray-500">Низкий</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Медиаконтент</td>
                  <td className="text-center p-2">
                    <div className="flex justify-center">
                      <span className="bg-green-100 text-green-800 text-xs rounded px-2 py-1">Да</span>
                    </div>
                  </td>
                  <td className="text-center p-2">
                    <div className="flex justify-center">
                      <span className="bg-red-100 text-red-800 text-xs rounded px-2 py-1">Нет</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            
            <div className="bg-whatsapp/10 p-4 rounded-lg">
              <h4 className="font-semibold mb-3">С нами вы экономите бюджеты</h4>
              <p className="text-gray-600 mb-4">
                Вы платите только за фактическое количество отправленных сообщений, без скрытых комиссий.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <MessageCircle className="h-5 w-5 text-whatsapp mr-1" />
                  <span className="text-sm">Отправка сообщений</span>
                </div>
                <div className="flex items-center">
                  <Eye className="h-5 w-5 text-whatsapp mr-1" />
                  <span className="text-sm">Чтение сообщений</span>
                </div>
                <div className="flex items-center">
                  <ExternalLink className="h-5 w-5 text-whatsapp mr-1" />
                  <span className="text-sm">Переходы по ссылкам</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

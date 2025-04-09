
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
import { useLanguage } from '@/contexts/LanguageContext';

const Stats = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{t("stats.title")}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("stats.subtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-bold mb-4">{t("stats.cabinet.title")}</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <div className="font-medium">{t("stats.sent")}</div>
                  <div className="bg-whatsapp text-white text-xs px-2 py-1 rounded">660</div>
                </div>
                <div className="flex items-center">
                  <div className="h-2 bg-whatsapp rounded-full w-full"></div>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <div className="font-medium">{t("stats.delivered")}</div>
                  <div className="bg-whatsapp text-white text-xs px-2 py-1 rounded">624</div>
                </div>
                <div className="flex items-center">
                  <div className="h-2 bg-whatsapp rounded-full w-[95%]"></div>
                  <div className="h-2 bg-gray-200 rounded-full w-[5%]"></div>
                </div>
                <div className="text-xs text-gray-500 mt-1 text-right">95% {t("stats.delivery")}</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <div className="font-medium">{t("stats.read")}</div>
                  <div className="bg-whatsapp text-white text-xs px-2 py-1 rounded">571</div>
                </div>
                <div className="flex items-center">
                  <div className="h-2 bg-whatsapp rounded-full w-[92%]"></div>
                  <div className="h-2 bg-gray-200 rounded-full w-[8%]"></div>
                </div>
                <div className="text-xs text-gray-500 mt-1 text-right">92% {t("stats.reads")}</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <div className="font-medium">{t("stats.clicks")}</div>
                  <div className="bg-whatsapp text-white text-xs px-2 py-1 rounded">218</div>
                </div>
                <div className="flex items-center">
                  <div className="h-2 bg-whatsapp rounded-full w-[35%]"></div>
                  <div className="h-2 bg-gray-200 rounded-full w-[65%]"></div>
                </div>
                <div className="text-xs text-gray-500 mt-1 text-right">35% {t("stats.click.rate")}</div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium">{t("stats.dynamics.title")}</h4>
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
            <h3 className="text-xl font-bold mb-4">{t("stats.vs.title")}</h3>
            
            <table className="w-full mb-8">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">{t("stats.vs.parameter")}</th>
                  <th className="text-center p-2">WhatsApp</th>
                  <th className="text-center p-2">СМС</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2">{t("stats.vs.delivery")}</td>
                  <td className="text-center p-2 font-medium">92%</td>
                  <td className="text-center p-2 text-gray-500">{t("stats.vs.unknown")}</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">{t("stats.vs.stats")}</td>
                  <td className="text-center p-2">
                    <div className="flex justify-center">
                      <span className="bg-green-100 text-green-800 text-xs rounded px-2 py-1">{t("stats.vs.yes")}</span>
                    </div>
                  </td>
                  <td className="text-center p-2">
                    <div className="flex justify-center">
                      <span className="bg-red-100 text-red-800 text-xs rounded px-2 py-1">{t("stats.vs.no")}</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">{t("stats.vs.ctr")}</td>
                  <td className="text-center p-2 font-medium">42%</td>
                  <td className="text-center p-2 text-gray-500">{t("stats.vs.low")}</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">{t("stats.vs.comm")}</td>
                  <td className="text-center p-2">{t("stats.vs.two.way")}</td>
                  <td className="text-center p-2">{t("stats.vs.one.way")}</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">{t("stats.vs.retention")}</td>
                  <td className="text-center p-2 font-medium">50%</td>
                  <td className="text-center p-2 text-gray-500">{t("stats.vs.low")}</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">{t("stats.vs.media")}</td>
                  <td className="text-center p-2">
                    <div className="flex justify-center">
                      <span className="bg-green-100 text-green-800 text-xs rounded px-2 py-1">{t("stats.vs.yes")}</span>
                    </div>
                  </td>
                  <td className="text-center p-2">
                    <div className="flex justify-center">
                      <span className="bg-red-100 text-red-800 text-xs rounded px-2 py-1">{t("stats.vs.no")}</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            
            <div className="bg-whatsapp/10 p-4 rounded-lg">
              <h4 className="font-semibold mb-3">{t("stats.economy.title")}</h4>
              <p className="text-gray-600 mb-4">
                {t("stats.economy.subtitle")}
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <MessageCircle className="h-5 w-5 text-whatsapp mr-1" />
                  <span className="text-sm">{t("stats.economy.send")}</span>
                </div>
                <div className="flex items-center">
                  <Eye className="h-5 w-5 text-whatsapp mr-1" />
                  <span className="text-sm">{t("stats.economy.read")}</span>
                </div>
                <div className="flex items-center">
                  <ExternalLink className="h-5 w-5 text-whatsapp mr-1" />
                  <span className="text-sm">{t("stats.economy.click")}</span>
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

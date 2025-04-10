
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from '@/contexts/LanguageContext';

const Team = () => {
  const { t } = useLanguage();
  
  const team = [
    {
      name: "Андрей Недорезов",
      position: "CEO",
      experience: t("team.nedorezov.experience"),
      background: t("team.nedorezov.background"),
      degree: "",
      initials: "АН"
    },
    {
      name: "Никита Киреев",
      position: "CTO",
      experience: t("team.kireev.experience"),
      background: t("team.kireev.background"),
      degree: "",
      initials: "НК"
    },
    {
      name: "Роман Бурбах",
      position: "CMO",
      experience: t("team.burbach.experience"),
      background: t("team.burbach.background"),
      degree: t("team.burbach.degree"),
      initials: "РБ"
    },
    {
      name: "Михаил Соломатин",
      position: "CRO",
      experience: t("team.solomatin.experience"),
      background: t("team.solomatin.background"),
      degree: "",
      initials: "МС"
    }
  ];
  
  return (
    <section id="team" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{t("team.title")}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("team.subtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg transition-all hover:shadow-xl">
              <div className="h-8 bg-whatsapp"></div>
              <CardContent className="pt-8 pb-6 text-center">
                <div className="flex justify-center -mt-12 mb-4">
                  <Avatar className="h-20 w-20 border-4 border-white shadow-md bg-whatsapp text-white">
                    <AvatarFallback>{member.initials}</AvatarFallback>
                    <AvatarImage src="" />
                  </Avatar>
                </div>
                <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                <div className="text-sm text-whatsapp font-semibold mb-3">
                  {member.position}
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>{member.experience}</p>
                  <p>{member.background}</p>
                  {member.degree && <p className="italic">{member.degree}</p>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;


import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const VideoSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("about.video.title")}</h2>
            <p className="text-lg text-gray-600">{t("about.video.subtitle")}</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative w-full" style={{padding: "56.25% 0 0 0"}}>
              <iframe 
                src="https://player.vimeo.com/video/1074867141?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}} 
                title="О компании S3"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

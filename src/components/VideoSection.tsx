
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const VideoSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("about.video.title")}
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            {t("about.video.subtitle")}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl">
          <div className="relative pb-[56.25%] h-0">
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://player.vimeo.com/video/1074867141?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="О компании S3"
            ></iframe>
          </div>
        </div>
      </div>
      
      {/* Load Vimeo Player JS */}
      <script async src="https://player.vimeo.com/api/player.js"></script>
    </section>
  );
};

export default VideoSection;

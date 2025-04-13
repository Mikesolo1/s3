
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import VimeoPlayer from './VimeoPlayer';

const VideoSection = () => {
  const { t } = useLanguage();
  const vimeoVideoId = '1074867141'; // Example ID
  
  return (
    <div className="relative">
      <div className="aspect-w-16 aspect-h-9 bg-gray-200">
        <VimeoPlayer videoId={vimeoVideoId} />
      </div>
  <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent flex items-start pointer-events-none">
     <div className="p-4 text-white mt-4">
      <h3 className="font-bold text-lg">{t("about.video.title")}</h3>
    <p className="text-sm">{t("about.video.subtitle")}</p>
    </div>
   </div>
    </div>
  );
};

export default VideoSection;

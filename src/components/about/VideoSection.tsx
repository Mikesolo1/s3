
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import VimeoPlayer from './VimeoPlayer';

const VideoSection = () => {
  const { t } = useLanguage();
  const vimeoVideoId = '890544349'; // Example ID
  
  return (
    <div className="relative">
      <div className="aspect-w-16 aspect-h-9 bg-gray-200">
        <VimeoPlayer videoId={vimeoVideoId} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
        <div className="p-4 text-white">
          <h3 className="font-bold text-lg">{t("about.video.title")}</h3>
          <p className="text-sm">{t("about.video.subtitle")}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;

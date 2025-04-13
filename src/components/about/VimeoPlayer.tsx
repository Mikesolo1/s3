import React, { useEffect, useRef } from 'react';

interface VimeoPlayerProps {
  videoId: string;
}

const VimeoPlayer = ({ videoId }: VimeoPlayerProps) => {
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!videoContainerRef.current) return;

    const initializePlayer = () => {
      if (!videoContainerRef.current) return;

      videoContainerRef.current.innerHTML = '';

      const iframe = document.createElement('iframe');
      iframe.src = `https://player.vimeo.com/video/${videoId}?title=0&byline=0&portrait=0&autoplay=0`;
      iframe.allow =
        'autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media';
      iframe.allowFullscreen = true;
      iframe.frameBorder = '0';
      iframe.title = 'Vimeo Video';
      iframe.style.position = 'absolute';
      iframe.style.top = '0';
      iframe.style.left = '0';
      iframe.style.width = '100%';
      iframe.style.height = '100%';

      videoContainerRef.current.appendChild(iframe);
    };

    if (window.Vimeo?.Player) {
      initializePlayer();
    } else {
      const script = document.createElement('script');
      script.src = 'https://player.vimeo.com/api/player.js';
      script.onload = initializePlayer;
      document.body.appendChild(script);
    }

    return () => {
      if (videoContainerRef.current) {
        videoContainerRef.current.innerHTML = '';
      }
    };
  }, [videoId]);

  return (
    <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl">
      <div ref={videoContainerRef} className="absolute top-0 left-0 w-full h-full" />
    </div>
  );
};

export default VimeoPlayer;

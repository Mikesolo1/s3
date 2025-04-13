import React, { useEffect, useRef } from 'react';

interface VimeoPlayerProps {
  videoId: string;
}

const VimeoPlayer = ({ videoId }: VimeoPlayerProps) => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (videoContainerRef.current) {
      // Check if Vimeo library is already loaded
      if (window.Vimeo && window.Vimeo.Player) {
        initializePlayer();
      } else {
        // If library not loaded yet, wait for it
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
        // Clear container before creating player
        videoContainerRef.current.innerHTML = '';
        
        // Create iframe for Vimeo
        const iframe = document.createElement('iframe');
        iframe.src = https://player.vimeo.com/video/${videoId}?h=c97db7e86c&title=0&byline=0&portrait=0;
        iframe.width = '100%';
        iframe.height = '100%';
        iframe.frameBorder = '0';
        iframe.allow = 'autoplay; fullscreen; picture-in-picture';
        iframe.style.position = 'absolute';
        iframe.style.top = '0';
        iframe.style.left = '0';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        
        // Add iframe to container
        videoContainerRef.current.appendChild(iframe);
      }
    }
    
    // Cleanup when component unmounts
    return () => {
      if (videoContainerRef.current) {
        videoContainerRef.current.innerHTML = '';
      }
    };
  }, [videoId]);
  
  return (
    <div ref={videoContainerRef} className="w-full h-full relative">
      {/* Vimeo iframe will be inserted here via JavaScript */}
    </div>
  );
};

export default VimeoPlayer;



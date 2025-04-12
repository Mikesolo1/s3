
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CaseStudies from '@/components/CaseStudies';
import Stats from '@/components/Stats';
import Pricing from '@/components/Pricing';
import Team from '@/components/Team';
import Partner from '@/components/Partner';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import VideoSection from '@/components/VideoSection';

const Index = () => {
  // Load Vimeo player script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <CaseStudies />
        <Stats />
        <VideoSection />
        <Pricing />
        <Team />
        <Partner />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

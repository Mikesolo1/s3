
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CaseStudies from '@/components/CaseStudies';
import Stats from '@/components/Stats';
import Pricing from '@/components/Pricing';
import Team from '@/components/Team';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <CaseStudies />
        <Stats />
        <Pricing />
        <Team />
        <Contact />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

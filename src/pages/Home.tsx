
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import HowWeHelp from '@/components/sections/HowWeHelp';
import SuccessStories from '@/components/sections/SuccessStories';
import CuratedBooks from '@/components/sections/CuratedBooks';
import ContactSection from '@/components/sections/ContactSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <HowWeHelp />
      <SuccessStories />
      <CuratedBooks />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;


import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import TeamSection from '@/components/sections/TeamSection';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default About;

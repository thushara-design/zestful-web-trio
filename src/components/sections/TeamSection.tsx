
import React from 'react';
import { Button } from '@/components/ui/button';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Maria",
      location: "New York, USA",
      role: "Full-stack engineering, AI integration",
      position: { left: "15%", top: "35%" }
    },
    {
      name: "Filipa", 
      location: "Lisbon, Portugal",
      role: "UX/UI design, motion design, branding",
      position: { left: "45%", top: "55%" }
    },
    {
      name: "Thushara",
      location: "Bengaluru, India", 
      role: "Product design, AI, Illustration",
      position: { right: "20%", top: "40%" }
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Meet the Kite team
          </h2>
          <p className="text-xl text-gray-600">
            Our team is brainstorming, designing, developing Kite from scratch across India, Portugal and the US.
          </p>
        </div>

        {/* World map with team markers */}
        <div className="relative bg-gray-50 rounded-2xl p-8 mb-16" style={{ minHeight: '400px' }}>
          {/* Simple world map outline */}
          <div className="absolute inset-8">
            <svg viewBox="0 0 800 400" className="w-full h-full">
              {/* Simplified continents outline */}
              <path d="M100 200 Q150 150 200 200 Q250 180 300 200 Q350 220 400 200" 
                    stroke="#e5e7eb" strokeWidth="2" fill="none" />
              <path d="M450 180 Q500 160 550 180 Q600 200 650 180" 
                    stroke="#e5e7eb" strokeWidth="2" fill="none" />
              <path d="M200 250 Q250 230 300 250 Q350 270 400 250" 
                    stroke="#e5e7eb" strokeWidth="2" fill="none" />
            </svg>

            {/* Team member markers */}
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={member.position}
              >
                <div className="w-4 h-4 bg-teal-500 rounded-full border-2 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Team member cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-gray-600 mb-2">
                {member.location}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                {member.role}
              </p>
              {index === 0 && (
                <Button variant="outline" size="sm">
                  Meet {member.name}
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

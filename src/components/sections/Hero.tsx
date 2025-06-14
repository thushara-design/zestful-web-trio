
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's make career change easier, together.
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join open projects, find volunteering network, chat with fellow career changers
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800">
                Join our community
              </Button>
              <Button size="lg" variant="outline">
                More about Kite
              </Button>
            </div>
          </div>
          
          {/* Kite illustration placeholder */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Clouds */}
              <div className="absolute top-4 left-8 w-16 h-10 bg-yellow-200 rounded-full opacity-60"></div>
              <div className="absolute top-8 right-12 w-12 h-8 bg-yellow-200 rounded-full opacity-60"></div>
              
              {/* Kite */}
              <div className="w-64 h-64 relative">
                <div className="absolute inset-0 transform rotate-45">
                  <div className="w-32 h-32 bg-teal-500 transform -translate-x-8 -translate-y-8"></div>
                  <div className="w-32 h-32 bg-teal-300 transform translate-x-8 -translate-y-8"></div>
                  <div className="w-32 h-32 bg-orange-400 transform -translate-x-8 translate-y-8"></div>
                  <div className="w-32 h-32 bg-teal-400 transform translate-x-8 translate-y-8"></div>
                </div>
                {/* Kite string */}
                <div className="absolute bottom-0 left-1/2 w-0.5 h-24 bg-gray-400 transform -translate-x-0.5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

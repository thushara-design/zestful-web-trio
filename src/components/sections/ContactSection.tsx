
import React from 'react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Do you want to share your story?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Have any suggestions or do you want to share your career transition? We'd love to hear from you.
            </p>
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800">
              Contact us
            </Button>
          </div>
          
          {/* Career path diagram placeholder */}
          <div className="flex justify-center">
            <div className="w-80 h-64 bg-white rounded-lg p-8 shadow-sm">
              <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">Start</span>
                  </div>
                  <div className="w-8 h-0.5 bg-gray-300"></div>
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">Learn</span>
                  </div>
                </div>
                <div className="w-0.5 h-8 bg-gray-300"></div>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">Grow</span>
                  </div>
                  <div className="w-8 h-0.5 bg-gray-300"></div>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">Success</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

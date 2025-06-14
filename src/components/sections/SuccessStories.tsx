
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const SuccessStories = () => {
  const stories = [
    {
      title: "My Journey from Biology to Biostatistics",
      author: "Elana Ibrahim",
      duration: "32 minutes",
      bgColor: "bg-gray-100"
    },
    {
      title: "My Journey From Biology to Biostatistics",
      author: "Elana Ibrahim", 
      duration: "32 minutes",
      bgColor: "bg-gray-800 text-white"
    },
    {
      title: "Success Story 3",
      author: "Career Changer",
      duration: "25 minutes",
      bgColor: "bg-gradient-to-r from-purple-400 to-pink-400 text-white"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600">
            Stories of courage, growth and transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card key={index} className={`overflow-hidden hover:shadow-lg transition-shadow cursor-pointer ${story.bgColor}`}>
              <CardContent className="p-6">
                <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-b-[10px] border-b-gray-800 border-r-[6px] border-r-transparent ml-1"></div>
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  {story.title}
                </h3>
                <p className="text-sm opacity-80 mb-1">
                  {story.author}
                </p>
                <p className="text-sm opacity-60">
                  {story.duration}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;

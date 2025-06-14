
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Target, Book } from 'lucide-react';

const HowWeHelp = () => {
  const services = [
    {
      icon: Users,
      title: "Join our community",
      description: "We have a supportive community waiting for you to discover.",
      cta: "Join discord"
    },
    {
      icon: Target,
      title: "Create a plan with AI",
      description: "Confused about where to start? Build a plan and track your progress through the journey.",
      cta: "Start plan"
    },
    {
      icon: Book,
      title: "Browse resources",
      description: "We have curated a database of resources that can help you in your career transformation.",
      cta: "Start browsing"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How can we help you
          </h2>
          <p className="text-xl text-gray-600">
            Your next step toward brighter days!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-teal-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <Button variant="outline" className="w-full">
                  {service.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;

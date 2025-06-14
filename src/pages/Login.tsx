
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <section className="py-20">
        <div className="max-w-md mx-auto px-4">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">
                Welcome back to Kite
              </CardTitle>
              <p className="text-gray-600">
                Sign in to continue your career journey
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter your password" />
              </div>
              <Button className="w-full bg-gray-900 hover:bg-gray-800">
                Sign In
              </Button>
              <p className="text-center text-sm text-gray-600">
                Don't have an account? 
                <Button variant="link" className="p-0 ml-1 text-teal-600">
                  Join us today
                </Button>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Login;

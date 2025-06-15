
import { Users, Target, Book } from 'lucide-react';
import type { Book as BookType, Story, TeamMember, Service } from '@/types';

export const BOOKS: BookType[] = [
  {
    id: '1',
    title: "Never Search Alone",
    author: "Phyl Terry",
    cover: "bg-gray-100",
    price: "₹0"
  },
  {
    id: '2',
    title: "Job Moves",
    author: "Ethan Bernstein, Michael B. Horn, Bob Moesta",
    cover: "bg-orange-400",
    price: "₹0"
  },
  {
    id: '3',
    title: "Designing your life",
    author: "Bill Burnett, Dave Evans",
    cover: "bg-teal-400",
    price: "₹0"
  },
  {
    id: '4',
    title: "The 2-Hour Job Search",
    author: "Steve Dalton",
    cover: "bg-gradient-to-br from-orange-300 to-orange-100",
    price: "₹0"
  }
];

export const STORIES: Story[] = [
  {
    id: '1',
    title: "My Journey from Biology to Biostatistics",
    author: "Elana Ibrahim",
    duration: "32 minutes",
    bgColor: "bg-gray-100"
  },
  {
    id: '2',
    title: "My Journey From Biology to Biostatistics",
    author: "Elana Ibrahim",
    duration: "32 minutes",
    bgColor: "bg-gray-800 text-white"
  },
  {
    id: '3',
    title: "Success Story 3",
    author: "Career Changer",
    duration: "25 minutes",
    bgColor: "bg-gradient-to-r from-purple-400 to-pink-400 text-white"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: "Maria",
    location: "New York, USA",
    role: "Full-stack engineering, AI integration",
    position: { left: "15%", top: "35%" },
    hasButton: true
  },
  {
    id: '2',
    name: "Filipa",
    location: "Lisbon, Portugal",
    role: "UX/UI design, motion design, branding",
    position: { left: "45%", top: "55%" }
  },
  {
    id: '3',
    name: "Thushara",
    location: "Bengaluru, India",
    role: "Product design, AI, Illustration",
    position: { right: "20%", top: "40%" }
  }
];

export const SERVICES: Service[] = [
  {
    id: '1',
    icon: Users,
    title: "Join our community",
    description: "We have a supportive community waiting for you to discover.",
    cta: "Join discord"
  },
  {
    id: '2',
    icon: Target,
    title: "Create a plan with AI",
    description: "Confused about where to start? Build a plan and track your progress through the journey.",
    cta: "Start plan"
  },
  {
    id: '3',
    icon: Book,
    title: "Browse resources",
    description: "We have curated a database of resources that can help you in your career transformation.",
    cta: "Start browsing"
  }
];

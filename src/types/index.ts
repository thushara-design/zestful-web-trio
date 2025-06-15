
export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  price: string;
}

export interface Story {
  id: string;
  title: string;
  author: string;
  duration: string;
  bgColor: string;
}

export interface TeamMember {
  id: string;
  name: string;
  location: string;
  role: string;
  position: {
    left?: string;
    right?: string;
    top: string;
  };
  hasButton?: boolean;
}

export interface Service {
  id: string;
  icon: any;
  title: string;
  description: string;
  cta: string;
}

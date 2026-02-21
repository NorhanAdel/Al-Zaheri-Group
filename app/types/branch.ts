export type Branch = {
  id: string;
  slug: string;
  name: string;
  description: string;
  mainImage: string;
  audio?: string;
  vision: string[];
  mission: string[];
  goals: string[];
  values: string[];
  gallery: string[];
  videos?: string[];
};

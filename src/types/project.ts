
export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  techStack: string[];
  image: string;
  links: {
    demo?: string;
    github?: string;
    website?: string;
  };
  category: string;
  featured: boolean;
}

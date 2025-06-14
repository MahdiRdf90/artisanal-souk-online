
import { useState, useEffect } from 'react';
import { Project } from '@/types/project';
import projectsData from '@/data/projects.json';

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setProjects(projectsData.projects);
      setLoading(false);
    } catch (err) {
      setError('Failed to load projects');
      setLoading(false);
    }
  }, []);

  const getProjectById = (id: string): Project | undefined => {
    return projects.find(project => project.id === id);
  };

  const getFeaturedProjects = (): Project[] => {
    return projects.filter(project => project.featured);
  };

  return {
    projects,
    loading,
    error,
    getProjectById,
    getFeaturedProjects
  };
};

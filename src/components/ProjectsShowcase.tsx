
import { useState } from 'react';
import { useProjects } from '@/hooks/useProjects';
import { Project } from '@/types/project';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { toast } from '@/hooks/use-toast';

const ProjectsShowcase = () => {
  const { projects, loading, error, getFeaturedProjects } = useProjects();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReadMore = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleViewProject = (project: Project) => {
    if (project.links.demo) {
      window.open(project.links.demo, '_blank');
    } else if (project.links.website) {
      window.open(project.links.website, '_blank');
    } else {
      toast({
        title: "Coming Soon",
        description: "This project will be available soon!",
      });
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  if (loading) {
    return (
      <div className="min-h-64 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-craft-orange"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 p-8">
        <p>Error loading projects: {error}</p>
      </div>
    );
  }

  const featuredProjects = getFeaturedProjects();

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-background to-sand-beige">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-heritage-brown mb-4 glow-text-large">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our collection of handcrafted masterpieces, each telling a unique story 
            of traditional artistry and contemporary design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard
                project={project}
                onReadMore={handleReadMore}
                onViewProject={handleViewProject}
              />
            </div>
          ))}
        </div>

        {/* All Projects Button */}
        {projects.length > featuredProjects.length && (
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-craft-orange text-white rounded-lg font-semibold neon-button hover:bg-copper-accent transition-all duration-300 hover:scale-105">
              View All Projects ({projects.length})
            </button>
          </div>
        )}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default ProjectsShowcase;


import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Globe } from 'lucide-react';
import { Project } from '@/types/project';
import AnimatedButton from './AnimatedButton';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto animate-scale-in">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-craft-orange glow-text">
            {project.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Project Image */}
          <div className="relative rounded-lg overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-64 md:h-80 object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Project Description */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-heritage-brown">About This Project</h3>
            <p className="text-gray-600 leading-relaxed">{project.fullDescription}</p>
          </div>

          {/* Tech Stack */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-heritage-brown">Techniques & Materials</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <Badge 
                  key={index} 
                  variant="secondary"
                  className="bg-craft-orange/10 text-craft-orange border-craft-orange/20 hover:bg-craft-orange/20 transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Project Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-heritage-brown">Links</h3>
            <div className="flex flex-wrap gap-3">
              {project.links.demo && (
                <AnimatedButton 
                  variant="outline" 
                  size="sm"
                  glowEffect
                  onClick={() => window.open(project.links.demo, '_blank')}
                  className="neon-button-outline text-craft-orange border-craft-orange hover:bg-craft-orange hover:text-white"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Demo
                </AnimatedButton>
              )}
              {project.links.github && (
                <AnimatedButton 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open(project.links.github, '_blank')}
                  className="border-gray-400 hover:bg-gray-100"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Source
                </AnimatedButton>
              )}
              {project.links.website && (
                <AnimatedButton 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open(project.links.website, '_blank')}
                  className="border-blue-400 text-blue-600 hover:bg-blue-50"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Website
                </AnimatedButton>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;

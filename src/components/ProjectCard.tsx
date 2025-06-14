
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Eye } from 'lucide-react';
import { Project } from '@/types/project';
import AnimatedButton from './AnimatedButton';

interface ProjectCardProps {
  project: Project;
  onReadMore: (project: Project) => void;
  onViewProject: (project: Project) => void;
}

const ProjectCard = ({ project, onReadMore, onViewProject }: ProjectCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 neon-card border-heritage/20 bg-gradient-to-br from-warm-beige to-sand-beige">
      <CardContent className="p-0">
        {/* Project Image */}
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Category Badge */}
          <Badge 
            className="absolute top-3 left-3 bg-craft-orange/90 text-white border-none"
          >
            {project.category}
          </Badge>
          
          {/* Featured Badge */}
          {project.featured && (
            <Badge 
              className="absolute top-3 right-3 bg-heritage-brown text-white border-none glow-text"
            >
              Featured
            </Badge>
          )}
        </div>

        {/* Project Info */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-heritage-brown group-hover:text-craft-orange transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-gray-600 mt-2 line-clamp-2">{project.description}</p>
          </div>

          {/* Tech Stack Preview */}
          <div className="flex flex-wrap gap-1">
            {project.techStack.slice(0, 3).map((tech, index) => (
              <Badge 
                key={index} 
                variant="outline"
                className="text-xs bg-clay-brown/10 text-clay-brown border-clay-brown/30"
              >
                {tech}
              </Badge>
            ))}
            {project.techStack.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{project.techStack.length - 3} more
              </Badge>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex gap-3">
        <AnimatedButton
          variant="outline"
          size="sm"
          glowEffect
          onClick={() => onReadMore(project)}
          className="flex-1 neon-button-outline text-craft-orange border-craft-orange hover:bg-craft-orange hover:text-white"
        >
          <Eye className="w-4 h-4 mr-2" />
          Read More
        </AnimatedButton>
        
        <AnimatedButton
          size="sm"
          onClick={() => onViewProject(project)}
          className="flex-1 bg-heritage-brown hover:bg-clay-brown neon-button"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          View Project
        </AnimatedButton>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;

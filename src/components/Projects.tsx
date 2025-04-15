import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Folder, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Project data
const FEATURED_PROJECTS = [
  {
    title: "Portfolio Website",
    description: "A sleek, modern portfolio website built with React and Tailwind CSS. Features smooth animations, responsive design, and optimized performance.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    links: {
      github: "#",
      live: "#",
    },
  },
  {
    title: "E-Commerce Dashboard",
    description: "An admin dashboard for e-commerce platforms featuring analytics, inventory management, and order processing. Built with React, Material UI, and Express.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    links: {
      github: "#",
      live: "#",
    },
  },
  {
    title: "Task Management App",
    description: "A task management application with drag-and-drop functionality, priority levels, and team collaboration features. Uses Firebase for real-time updates.",
    image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
    links: {
      github: "#",
      live: "#",
    },
  },
];

const OTHER_PROJECTS = [
  {
    title: "Weather App",
    description: "A minimalist weather application that provides real-time forecasts and conditions based on user location.",
    tags: ["JavaScript", "OpenWeather API", "CSS"],
    links: {
      github: "#",
      live: "#",
    },
  },
  {
    title: "Recipe Finder",
    description: "Search for recipes based on ingredients you have. Features filtering options and step-by-step instructions.",
    tags: ["React", "Spoonacular API", "Styled Components"],
    links: {
      github: "#",
      live: "#",
    },
  },
  {
    title: "URL Shortener",
    description: "A simple URL shortening service built with Node.js and MongoDB. Tracks click statistics.",
    tags: ["Node.js", "Express", "MongoDB"],
    links: {
      github: "#",
      live: "#",
    },
  },
  {
    title: "Budget Tracker",
    description: "Personal finance application for tracking expenses, setting budgets, and visualizing spending habits.",
    tags: ["React", "Chart.js", "Firebase"],
    links: {
      github: "#",
      live: "#",
    },
  },
  {
    title: "Movie Database",
    description: "Browse and search for movies and TV shows. View ratings, cast information, and trailers.",
    tags: ["React", "TMDB API", "CSS Modules"],
    links: {
      github: "#",
      live: "#",
    },
  },
  {
    title: "Markdown Editor",
    description: "Real-time markdown editor with preview and export functionality. Supports keyboard shortcuts.",
    tags: ["Vue.js", "Marked.js", "SCSS"],
    links: {
      github: "#",
      live: "#",
    },
  },
  {
    title: "Markdown Editor",
    description: "Real-time markdown editor with preview and export functionality. Supports keyboard shortcuts.",
    tags: ["Vue.js", "Marked.js", "SCSS"],
    links: {
      github: "#",
      live: "#",
    },
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredOtherProjects = filter === 'all' 
    ? OTHER_PROJECTS 
    : OTHER_PROJECTS.filter(project => 
        project.tags.some(tag => tag.toLowerCase() === filter.toLowerCase())
      );

  const allTags = [...new Set(OTHER_PROJECTS.flatMap(project => project.tags))];

  return (
    <section id="projects" className="min-h-screen">
      <div className="section-padding" ref={ref}>
        <h2 className="text-3xl font-bold mb-2">
          <span className="heading-gradient">My Projects</span>
        </h2>
        <div className="h-1 w-20 bg-portfolio-accent mb-16"></div>
        
        {/* Featured Projects */}
        <div className="space-y-32 mb-32">
          {FEATURED_PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;
            const { ref: projectRef, inView: projectInView } = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });
            
            return (
              <div 
                key={index} 
                ref={projectRef}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 ${
                  projectInView ? 'animate-fade-in-up' : 'opacity-0'
                }`}
              >
                {/* Image */}
                <div className="lg:w-3/5 relative group">
                  <div className="relative overflow-hidden rounded-lg aspect-video">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-portfolio-navy/50 group-hover:opacity-0 transition-opacity duration-300"></div>
                  </div>
                </div>
                
                {/* Content */}
                <div className={`lg:w-2/5 flex flex-col ${isEven ? 'lg:items-end' : 'lg:items-start'}`}>
                  <p className="font-mono text-portfolio-accent mb-2">Featured Project</p>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <div className={`project-card ${isEven ? 'lg:-ml-16' : 'lg:-mr-16'} z-10 mb-4`}>
                    <p className="text-portfolio-slate">{project.description}</p>
                  </div>
                  <div className={`flex flex-wrap gap-2 mb-6 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
                    {project.tags.map((tag, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary"
                        className="font-mono text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.links.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-portfolio-slate hover:text-portfolio-accent transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.links.live} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-portfolio-slate hover:text-portfolio-accent transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Other Projects */}
        <h3 className="text-2xl font-bold mb-8 text-center">Other Noteworthy Projects</h3>
        
        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <Button 
            variant={filter === 'all' ? 'default' : 'outline'}
            size="sm" 
            onClick={() => setFilter('all')}
            className="font-mono text-xs"
          >
            All
          </Button>
          {allTags.map((tag, index) => (
            <Button 
              key={index}
              variant={filter === tag ? 'default' : 'outline'}
              size="sm" 
              onClick={() => setFilter(tag)}
              className="font-mono text-xs"
            >
              {tag}
            </Button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOtherProjects.map((project, index) => (
            <div 
              key={index}
              className={`project-card flex flex-col h-full group ${
                inView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex justify-between items-center mb-6">
                <Folder className="text-portfolio-accent" size={36} />
                <div className="flex gap-4">
                  <a 
                    href={project.links.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-portfolio-slate hover:text-portfolio-accent transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <Github size={18} />
                  </a>
                  <a 
                    href={project.links.live} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-portfolio-slate hover:text-portfolio-accent transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <h4 className="text-xl font-semibold group-hover:text-portfolio-accent transition-colors mb-2">
                {project.title}
              </h4>
              <p className="text-portfolio-slate mb-6 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <span key={i} className="font-mono text-xs text-portfolio-slate">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React, { useState } from 'react';
import { ExternalLink, Github, Youtube, Code, ArrowLeft, BookOpen, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getProjectRelatedPosts, type BlogPost } from '../data/blogData';

// Define interface for project structure
interface Project {
  title: string;
  description: string;
  videoId: string;
  github: string;
  technologies: string[];
  features: string[];
  category: string;
  color: string;
  fallbackImage: string;
}

function Projects() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const projects: Project[] = [
    {
      title: "OpenExchange",
      description: "A non-profit organization fostering sustainable campus ecosystems through peer-to-peer exchange systems.",
      videoId: "bWNMV9OwQ2k",
      github: "https://github.com/OpnExc",
      technologies: ["Go", "MySQL", "MCP"],
      features: [
        "Hostel-Centric Listings",
        "Verified Transactions",
        "Community Management"
      ],
      category: "web",
      color: "blue",
      fallbackImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "UEB (Unified Energy Board)",
      description: "A blockchain-based peer-to-peer energy trading platform using Apache Kafka for real-time processing.",
      videoId: "yS8Os6J7KvA",
      github: "https://github.com/lendrik-kumar/hac2u",
      technologies: ["Blockchain", "Kafka", "Go"],
      features: [
        "Decentralized Energy Marketplace",
        "Real-time Load Detection",
        "3-Phase Meter Integration"
      ],
      category: "blockchain",
      color: "purple",
      fallbackImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "B_Carbon_Read",
      description: "CBR integrates an existing simple task book purchase blockchain with EnvFactor for carbon emission tracking.",
      videoId: "_7D6FJigGJs",
      github: "https://github.com/vaidikcode/SatHack-B_Carbon_Read",
      technologies: ["Go", "Blockchain", "Carbon Tracking"],
      features: [
        "Carbon Emission Tracking",
        "EnvFactor Blockchain Integration",
        "Purchase Chain Monitoring"
      ],
      category: "blockchain",
      color: "green",
      fallbackImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Handle image error
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>, fallbackSrc: string): void => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = fallbackSrc;
  };

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  // Open project details
  const openProjectDetails = (project: Project): void => {
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Get related blog post for a project
  const getRelatedBlogPost = (projectTitle: string): BlogPost | null => {
    const relatedPosts = getProjectRelatedPosts(projectTitle);
    return relatedPosts.length > 0 ? relatedPosts[0] : null;
  };

  // Function to get color class based on project color with vibrant tones
  const getColorClass = (color: string, type: 'bg' | 'text' | 'border', opacity?: string): string => {
    const opacitySuffix = opacity ? `/${opacity}` : '';
    switch (color) {
      case 'blue':
        return `${type}-blue-300${opacitySuffix}`; // Same as Education section
      case 'purple':
        return `${type}-purple-300${opacitySuffix}`; // Same as Experience section
      case 'green':
        return `${type}-green-300${opacitySuffix}`; // Same as Latest Work section
      default:
        return `${type}-blue-300${opacitySuffix}`;
    }
  };

  return (
    <div className="py-24 min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-indigo-900">
      {/* Simple dark background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-purple-900 to-indigo-900"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {selectedProject ? (
          <div className="mb-16">
            <button 
              onClick={() => setSelectedProject(null)}
              className="flex items-center mb-8 px-4 py-2 bg-opacity-20 bg-black rounded-md text-gray-300 hover:text-white hover:bg-opacity-30 transition border border-white/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to all projects
            </button>
            
            <div className="bg-black bg-opacity-30 p-6 rounded-xl border border-white/10 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left column with video */}
                <div>
                  <div className="relative overflow-hidden rounded-lg border border-white/10 shadow-md mb-6">
                    {/* Add a custom header before the iframe */}
                    <div 
                      className={`w-full h-16 flex items-center justify-between px-6 bg-gradient-to-r ${
                        selectedProject.color === 'blue' ? 'from-blue-900 to-blue-800/70' :
                        selectedProject.color === 'purple' ? 'from-purple-900 to-purple-800/70' :
                        'from-green-900 to-green-800/70'
                      }`}
                    >
                      <h3 className={`text-xl font-bold ${getColorClass(selectedProject.color, 'text')}`}>
                        {selectedProject.title} Demo
                      </h3>
                      
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full animate-pulse ${getColorClass(selectedProject.color, 'bg')}`}></div>
                        <div className="text-xs text-gray-300">Live Preview</div>
                      </div>
                    </div>
                    
                    <iframe
                      src={`https://www.youtube.com/embed/${selectedProject.videoId}`}
                      className="w-full aspect-video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={selectedProject.github}
                      className="flex items-center px-4 py-2 rounded-md bg-black bg-opacity-50 hover:bg-opacity-70 transition border border-white/10"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className={`w-5 h-5 mr-2 ${getColorClass(selectedProject.color, 'text')}`} />
                      <span className="text-gray-200">GitHub</span>
                    </a>
                    <a
                      href={`https://youtube.com/watch?v=${selectedProject.videoId}`}
                      className="flex items-center px-4 py-2 rounded-md bg-black bg-opacity-50 hover:bg-opacity-70 transition border border-white/10"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Youtube className="w-5 h-5 mr-2 text-red-400" />
                      <span className="text-gray-200">YouTube</span>
                    </a>
                    {getRelatedBlogPost(selectedProject.title) && (
                      <Link
                        to={`/blog/${getRelatedBlogPost(selectedProject.title)?.slug}`}
                        className="flex items-center px-4 py-2 rounded-md bg-black bg-opacity-50 hover:bg-opacity-70 transition border border-white/10"
                      >
                        <BookOpen className={`w-5 h-5 mr-2 ${getColorClass(selectedProject.color, 'text')}`} />
                        <span className="text-gray-200">Blog</span>
                      </Link>
                    )}
                  </div>
                </div>
                
                {/* Right column with details */}
                <div className="space-y-6">
                  <h3 className={`text-3xl font-bold ${getColorClass(selectedProject.color, 'text')}`}>
                    {selectedProject.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">{selectedProject.description}</p>
                  
                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-gray-200">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className={`px-3 py-1 rounded-md text-sm bg-black bg-opacity-40 ${getColorClass(selectedProject.color, 'text')}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-gray-200">Key Features</h4>
                    <ul className="space-y-2 text-gray-300">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <div className={`mt-1 w-2 h-2 rounded-full ${getColorClass(selectedProject.color, 'bg')}`}></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <h2 className="text-4xl font-bold mb-4 text-center gradient-text">
              Featured Projects
            </h2>
            <p className="text-gray-300 text-center mb-10 max-w-2xl mx-auto">
              Exploring innovative solutions through code and collaboration
            </p>
            
            {/* Filter tabs with simple design */}
            <div className="flex justify-center mb-10">
              <div className="flex bg-black bg-opacity-30 rounded-md p-1 border border-white/10">
                <button 
                  onClick={() => setActiveTab('all')}
                  className={`px-4 py-1.5 rounded-md transition ${activeTab === 'all' 
                    ? 'bg-blue-900/30 text-blue-300' 
                    : 'text-gray-400 hover:text-blue-300'}`}
                >
                  All Projects
                </button>
                <button 
                  onClick={() => setActiveTab('web')}
                  className={`px-4 py-1.5 rounded-md transition ${activeTab === 'web' 
                    ? 'bg-purple-900/30 text-purple-300' 
                    : 'text-gray-400 hover:text-purple-300'}`}
                >
                  Web
                </button>
                <button 
                  onClick={() => setActiveTab('blockchain')}
                  className={`px-4 py-1.5 rounded-md transition ${activeTab === 'blockchain' 
                    ? 'bg-green-900/30 text-green-300' 
                    : 'text-gray-400 hover:text-green-300'}`}
                >
                  Blockchain
                </button>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <div 
                  key={index} 
                  className="bg-black bg-opacity-30 rounded-xl overflow-hidden shadow-lg border border-white/10"
                >
                  {/* Project thumbnail with minimalist background image */}
                  <div className="relative">
                    <div 
                      className={`w-full h-48 flex items-center justify-center bg-gradient-to-br overflow-hidden ${
                        project.color === 'blue' ? 'from-blue-900/80 to-blue-800/60' :
                        project.color === 'purple' ? 'from-purple-900/80 to-purple-800/60' :
                        'from-green-900/80 to-green-800/60'
                      }`}
                    >
                      {/* Background minimalist image based on category */}
                      <img 
                        src={
                          project.category === 'web' 
                            ? "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                            : "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                        }
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
                      />
                      
                      {/* Title overlay in center */}
                      <div className="relative z-10 text-center p-4 glass-effect bg-black/30 rounded-lg border border-white/10">
                        <h4 className={`text-xl font-bold ${getColorClass(project.color, 'text')}`}>
                          {project.title.split(' ')[0]}
                        </h4>
                        <div className={`w-10 h-1 mx-auto mt-2 rounded ${getColorClass(project.color, 'bg')}`}></div>
                      </div>
                    </div>
                    
                    {/* Project title */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                      <h3 className={`text-lg font-bold ${getColorClass(project.color, 'text')}`}>
                        {project.title}
                      </h3>
                    </div>
                    
                    {/* Category badge */}
                    <div className="absolute top-3 right-3">
                      <span className={`px-2 py-1 bg-black bg-opacity-70 rounded-md text-xs ${getColorClass(project.color, 'text')}`}>
                        {project.category}
                      </span>
                    </div>
                    
                    {/* YouTube play button */}
                    <a 
                      href={`https://youtube.com/watch?v=${project.videoId}`}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black bg-opacity-60 flex items-center justify-center hover:bg-red-800 transition border border-white/20"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Youtube className="w-6 h-6 text-white" />
                    </a>
                  </div>
                  
                  <div className="p-4">
                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className={`px-2 py-0.5 rounded-md text-xs bg-black bg-opacity-30 ${getColorClass(project.color, 'text')}`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                    
                    {/* Action buttons */}
                    <div className="flex gap-2">
                      <button 
                        onClick={() => openProjectDetails(project)}
                        className={`flex-1 flex items-center justify-center px-3 py-2 rounded-md ${
                          getColorClass(project.color, 'bg')
                        } bg-opacity-20 hover:bg-opacity-30 text-sm ${getColorClass(project.color, 'text')}`}
                      >
                        <Code className="w-4 h-4 mr-1" />
                        Details
                      </button>
                      
                      <a
                        href={project.github}
                        className="flex-1 flex items-center justify-center px-3 py-2 rounded-md bg-black bg-opacity-30 hover:bg-opacity-50 text-sm text-gray-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-1" />
                        GitHub
                      </a>
                      
                      {getRelatedBlogPost(project.title) && (
                        <Link
                          to={`/blog/${getRelatedBlogPost(project.title)?.slug}`}
                          className="flex-1 flex items-center justify-center px-3 py-2 rounded-md bg-black bg-opacity-30 hover:bg-opacity-50 text-sm text-gray-300"
                        >
                          <BookOpen className="w-4 h-4 mr-1" />
                          Blog
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Projects;
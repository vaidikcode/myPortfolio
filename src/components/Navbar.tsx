import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, FolderKanban, BookOpen, Mail } from 'lucide-react';

function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'bg-white/10 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white';
  };

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-lg bg-black/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold gradient-text">VB</Link>
          <div className="flex space-x-2">
            <Link to="/" 
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${isActive('/')}`}>
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>
            <Link to="/projects" 
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${isActive('/projects')}`}>
              <FolderKanban className="w-5 h-5" />
              <span>Projects</span>
            </Link>
            <Link to="/blog" 
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${isActive('/blog')}`}>
              <BookOpen className="w-5 h-5" />
              <span>Blog</span>
            </Link>
            <Link to="/contact" 
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${isActive('/contact')}`}>
              <Mail className="w-5 h-5" />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getBlogPosts, type BlogPost } from '../data/blogData';

function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const posts = getBlogPosts();
  
  const filteredPosts = searchTerm 
    ? posts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : posts;

  // Function to get a minimalist image based on primary tag
  const getMinimalistImage = (tags: string[]): string => {
    const primaryTag = tags[0]?.toLowerCase();
    
    if (primaryTag.includes('blockchain')) {
      return "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
    } 
    else if (primaryTag.includes('go') || primaryTag.includes('backend')) {
      return "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
    }
    else if (primaryTag.includes('energy')) {
      return "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
    }
    else if (primaryTag.includes('open source')) {
      return "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
    }
    else if (primaryTag.includes('sustainability')) {
      return "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
    }
    else if (primaryTag.includes('work') || primaryTag.includes('wip')) {
      return "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
    }
    else {
      return "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
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
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-center text-white">
            The Blog
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Thoughts, insights, and stories from my journey in technology
          </p>
          
          {/* Search bar */}
          <div className="max-w-md mx-auto mb-16">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search posts by title or tag..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-md bg-black bg-opacity-30 border border-white/10 focus:border-white/30 focus:outline-none text-white"
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post: BlogPost, index: number) => (
            <Link
              to={`/blog/${post.slug}`}
              key={index} 
              className="group bg-black bg-opacity-20 hover:bg-opacity-30 rounded-lg overflow-hidden border border-white/5 transition-all duration-200"
            >
              {/* Blog thumbnail with minimalist background image */}
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
                <img 
                  src={post.coverImage || getMinimalistImage(post.tags)}
                  alt={post.title}
                  className="h-full w-full object-cover opacity-40"
                />
                
                {/* Primary tag badge */}
                <div className="absolute top-3 right-3 z-20">
                  <span className="px-2 py-0.5 bg-black bg-opacity-70 rounded text-xs text-white/80">
                    {post.tags[0]}
                  </span>
                </div>
              </div>
              
              <div className="p-5">
                {/* Title */}
                <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-white/90 transition-colors">
                  {post.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className="px-2 py-0.5 bg-white/5 rounded-sm text-xs text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {filteredPosts.length === 0 && searchTerm && (
          <div className="text-center py-16">
            <p className="text-gray-300 mb-4">No posts found matching "{searchTerm}"</p>
            <button
              onClick={() => setSearchTerm('')}
              className="px-4 py-2 rounded-md bg-black bg-opacity-30 hover:bg-opacity-50 transition border border-white/10 text-gray-300"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Blog;
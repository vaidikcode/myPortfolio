import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, Youtube, Share2 } from 'lucide-react';
import { getBlogPosts, type BlogPost } from '../data/blogData';

function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const posts = getBlogPosts();
  const post = posts.find(p => p.slug === slug);
  
  // Scroll to top when post changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  // Function to get a minimalist image based on primary tag
  const getMinimalistImage = (post: BlogPost): string => {
    if (!post) return "";
    
    const primaryTag = post.tags[0]?.toLowerCase();
    
    if (primaryTag.includes('blockchain')) {
      return "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80";
    } 
    else if (primaryTag.includes('go') || primaryTag.includes('backend')) {
      return "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80";
    }
    else if (primaryTag.includes('energy')) {
      return "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80";
    }
    else if (primaryTag.includes('open source')) {
      return "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80";
    }
    else if (primaryTag.includes('sustainability')) {
      return "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80";
    }
    else if (primaryTag.includes('work') || primaryTag.includes('wip')) {
      return "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80";
    }
    else {
      return "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80";
    }
  };
  
  if (!post) {
    return (
      <div className="py-24 min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-indigo-900">
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-purple-900 to-indigo-900"></div>
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-black bg-opacity-20 p-8 rounded-lg border border-white/5 text-center">
            <h1 className="text-3xl font-bold mb-6 text-white">Blog Post Not Found</h1>
            <p className="text-gray-300 mb-6">The blog post you're looking for doesn't exist or has been moved.</p>
            <Link 
              to="/blog" 
              className="inline-flex items-center px-6 py-3 rounded-md bg-black bg-opacity-30 hover:bg-opacity-50 transition border border-white/10"
            >
              <ArrowLeft className="w-5 h-5 mr-2" /> Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24 min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-indigo-900">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-purple-900 to-indigo-900"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="mb-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center px-4 py-2 bg-black/20 hover:bg-black/30 rounded text-gray-300 hover:text-white transition border border-white/5"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to all posts
          </Link>
        </div>
        
        <article className="max-w-3xl mx-auto">
          {/* Post header with image */}
          <div className="relative h-72 md:h-96 overflow-hidden rounded-t-lg mb-8">
            <img 
              src={post.coverImage || getMinimalistImage(post)}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/90"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h1 className="text-4xl font-bold text-white">{post.title}</h1>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-black/40 rounded text-sm text-gray-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Post content */}
          <div className="bg-black/20 rounded-b-lg p-8 border-t border-white/5">
            <div className="prose prose-invert prose-lg max-w-none">
              {post.content.map((paragraph, i) => (
                <p key={i} className="mb-6 text-gray-300 leading-relaxed">{paragraph}</p>
              ))}
            </div>
            
            {/* Social share button */}
            <div className="flex justify-center mt-12 pt-8 border-t border-white/5">
              <button className="p-3 bg-black/20 rounded-full hover:bg-black/30 transition" title="Share this post">
                <Share2 className="w-5 h-5 text-gray-400 hover:text-white" />
              </button>
            </div>
          </div>
          
          {/* Related Project Section - simplified */}
          {post.relatedProject && (
            <div className="bg-black/20 rounded-lg p-6 border border-white/5 mt-8">
              <h2 className="text-xl font-semibold mb-5 text-white">Related Project</h2>
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                {post.relatedProject.imageUrl && (
                  <div className="w-full sm:w-1/3">
                    <div className="rounded-lg overflow-hidden border border-white/5">
                      <img 
                        src={post.relatedProject.imageUrl}
                        alt={post.relatedProject.title}
                        className="w-full aspect-video object-cover opacity-50"
                      />
                    </div>
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-3 text-white">{post.relatedProject.title}</h3>
                  <p className="text-gray-300 mb-4">{post.relatedProject.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {post.relatedProject.github && (
                      <a 
                        href={post.relatedProject.github}
                        className="flex items-center px-4 py-2 rounded bg-black/30 hover:bg-black/40 transition border border-white/5"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2 text-white" />
                        <span className="text-gray-200">GitHub</span>
                      </a>
                    )}
                    {post.relatedProject.videoId && (
                      <a 
                        href={`https://youtube.com/watch?v=${post.relatedProject.videoId}`}
                        className="flex items-center px-4 py-2 rounded bg-black/30 hover:bg-black/40 transition border border-white/5"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Youtube className="w-4 h-4 mr-2 text-white" />
                        <span className="text-gray-200">YouTube</span>
                      </a>
                    )}
                    <Link
                      to="/projects"
                      className="flex items-center px-4 py-2 rounded bg-black/30 hover:bg-black/40 transition border border-white/5"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      <span className="text-gray-200">All Projects</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Recommended Posts - simplified */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-5 text-white">You might also like</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {posts
                .filter(p => p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost, i) => (
                  <Link 
                    key={i}
                    to={`/blog/${relatedPost.slug}`}
                    className="flex bg-black/20 hover:bg-black/30 rounded-lg overflow-hidden border border-white/5 transition-all"
                  >
                    <div className="p-4 flex items-center">
                      <div className="w-12 h-12 rounded flex-shrink-0 bg-black/40 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base font-medium text-white">
                          {relatedPost.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default BlogPost;
import React from 'react';
import { 
  Github, 
  Twitter, 
  Mail, 
  Book, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Users, 
  Zap, 
  Heart, 
  Calendar, 
  Clock, 
  BookOpen,
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { getBlogPosts } from '../data/blogData';

function Home() {
  // Get the latest 2 blog posts for the home page
  const latestPosts = getBlogPosts().slice(0, 2);
  
  return (
    <div>
      {/* Hero Section */}
      <header className="min-h-screen relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        
        {/* Profile Image */}
        <div className="absolute bottom-10 right-10 lg:bottom-20 lg:right-20 z-10">
          <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-white/30 shadow-lg">
            <img 
              src="/images/yourimage.jpg" 
              alt="Vaidik Bhardwaj" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-bold mb-6 gradient-text animate-float">
              Vaidik Bhardwaj
            </h1>
            <p className="text-2xl text-gray-200 mb-8 glass-effect p-4 rounded-lg inline-block">
              Backend Developer & Open Source Contributor
            </p>
            <div className="flex space-x-6">
              <a href="https://github.com/vaidikcode" 
                className="glass-effect px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-white/20 transition-all">
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a href="https://x.com/VaidikBhrdwj"
                className="glass-effect px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-white/20 transition-all">
                <Twitter className="w-5 h-5" />
                <span>Twitter</span>
              </a>
              <a href="mailto:vaidikbhardwaj00@gmail.com"
                className="glass-effect px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-white/20 transition-all">
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Me Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-indigo-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">About Me</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="glass-effect p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-10 h-10 text-blue-400 mr-4" />
                <h3 className="text-2xl font-bold text-blue-300">Education</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold">Bachelor of Technology</h4>
                  <p className="text-gray-300">TIET, Patiala</p>
                  <p className="text-gray-400">Computer Science, 2024-2028</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Relevant Coursework</h4>
                  <p className="text-gray-400">Data Structures, Algorithms, Database Systems, Operating Systems</p>
                </div>
              </div>
            </div>
            
            <div className="glass-effect p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <Briefcase className="w-10 h-10 text-purple-400 mr-4" />
                <h3 className="text-2xl font-bold text-purple-300">Experience</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold">Open Source Contributor</h4>
                  <p className="text-gray-300">ORAS Java SDK, Besu, Jeager, Checker Framework</p>
                  <p className="text-gray-400">2024 - Present</p>
                  <p className="text-gray-400 mt-2">I started contributing to Open Source to improve my Skills. I started with Besu to Improve Java, and then Jeager to get introduced to distributed systems and so on</p>
                </div>
              </div>
            </div>
            
            <div className="glass-effect p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <Heart className="w-10 h-10 text-red-400 mr-4" />
                <h3 className="text-2xl font-bold text-red-300">Interests</h3>
              </div>
              <p className="text-gray-400 mb-4">Beyond coding, I'm passionate about:</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                  <span>Reading Web Novels, Currently reading Lord of Mysteries</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                  <span>Playing with my Dog :)</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                  <span>BasketBall</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                  <span>Exploring Sustainable Tech Solutions</span>
                </li>
              </ul>
            </div>
            
            <div className="glass-effect p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <Book className="w-10 h-10 text-green-400 mr-4" />
                <h3 className="text-2xl font-bold text-green-300">Latest Work</h3>
              </div>
              <p className="text-gray-400 mb-6">Check out my recent projects:</p>
              <Link to="/projects" className="inline-flex items-center px-6 py-3 rounded-full bg-green-600 hover:bg-green-700 transition-colors">
                View All Projects <Code2 className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-b from-indigo-900 to-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-effect p-8 rounded-2xl card-hover">
              <Code2 className="w-12 h-12 mb-6 text-blue-400" />
              <h3 className="text-2xl font-semibold mb-4 text-blue-300">Languages</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>Go</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>Java</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>C</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>Python</span>
                </li>
              </ul>
            </div>
            <div className="glass-effect p-8 rounded-2xl card-hover">
              <Zap className="w-12 h-12 mb-6 text-purple-400" />
              <h3 className="text-2xl font-semibold mb-4 text-purple-300">Technologies</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>Docker</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>PostgreSQL</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>MySQL</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>Apache Kafka</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>System Design</span>
                </li>
              </ul>
            </div>
            <div className="glass-effect p-8 rounded-2xl card-hover">
              <Users className="w-12 h-12 mb-6 text-indigo-400" />
              <h3 className="text-2xl font-semibold mb-4 text-indigo-300">Tools</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                  <span>Git</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                  <span>GitHub Actions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                  <span>JUnit</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-indigo-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Latest Posts</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {latestPosts.map((post, i) => (
              <div key={i} className="glass-effect rounded-2xl overflow-hidden card-hover">
                <div className={`p-2 ${i === 0 ? 'bg-blue-500/20' : 'bg-purple-500/20'}`}>
                  <div className={`flex items-center space-x-2 text-sm ${i === 0 ? 'text-blue-300' : 'text-purple-300'} p-2`}>
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                    <span>•</span>
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-4 ${i === 0 ? 'text-blue-300' : 'text-purple-300'}`}>{post.title}</h3>
                  <p className="text-gray-300 mb-6">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag, index) => (
                      <span key={index} className={`px-3 py-1 ${i === 0 ? 'bg-blue-900/40' : 'bg-purple-900/40'} rounded-full text-sm`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link to={`/blog/${post.slug}`} className={`${i === 0 ? 'text-blue-400 hover:text-blue-300' : 'text-purple-400 hover:text-purple-300'} flex items-center`}>
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center">
            <Link to="/blog" 
                className="inline-flex items-center px-8 py-4 rounded-full glass-effect hover:bg-white/10 transition-all border border-indigo-500/30 text-lg font-medium">
              View All Posts <BookOpen className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
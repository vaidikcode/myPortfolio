import React, { useState } from 'react';
import { Mail, MessageSquare, User, Github, Twitter, Linkedin, Send } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Hero Section with similar styling to Home */}
      <header className="min-h-[40vh] relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        
        {/* Floating orbs like Home page */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500 rounded-full opacity-10 blur-xl animate-pulse"></div>
        <div className="absolute top-1/4 -right-20 w-60 h-60 bg-purple-500 rounded-full opacity-10 blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-green-500 rounded-full opacity-10 blur-xl animate-pulse" style={{animationDelay: '1.5s'}}></div>

        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-bold mb-6 gradient-text">
              Get in Touch
            </h1>
            <p className="text-2xl text-gray-200 mb-8 glass-effect p-4 rounded-lg inline-block">
              Let's discuss ideas and opportunities
            </p>
          </div>
        </div>
      </header>

      {/* Contact Form Section - using the same gradient background as Home About section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-indigo-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Contact Form</h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            {/* Form Card with Glass Effect */}
            <div className="glass-effect p-8 rounded-2xl order-2 md:order-1">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-md font-medium mb-3 flex items-center text-blue-300">
                    <User className="w-5 h-5 mr-2 text-blue-400" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black bg-opacity-30 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-md font-medium mb-3 flex items-center text-purple-300">
                    <Mail className="w-5 h-5 mr-2 text-purple-400" />
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black bg-opacity-30 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-md font-medium mb-3 flex items-center text-green-300">
                    <MessageSquare className="w-5 h-5 mr-2 text-green-400" />
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-black bg-opacity-30 border border-white/10 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full glass-effect px-6 py-4 rounded-full flex items-center justify-center space-x-2 hover:bg-white/20 transition-all text-white font-medium"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
            
            {/* Connect Info Card - styled like the Home About cards */}
            <div className="glass-effect p-8 rounded-2xl order-1 md:order-2">
              <div className="flex items-center mb-6">
                <Mail className="w-10 h-10 text-blue-400 mr-4" />
                <h3 className="text-2xl font-bold text-blue-300">Ways to Connect</h3>
              </div>
              
              <p className="text-gray-300 mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out through any of these channels:
              </p>
              
              <div className="space-y-6">
                <a href="https://github.com/vaidikcode" className="flex items-center py-3 px-4 rounded-lg bg-black bg-opacity-30 hover:bg-opacity-50 transition border border-white/10">
                  <Github className="w-6 h-6 text-blue-300 mr-3" />
                  <div>
                    <h4 className="text-lg font-medium text-white">GitHub</h4>
                    <p className="text-gray-400">@vaidikcode</p>
                  </div>
                </a>
                
                <a href="https://x.com/VaidikBhrdwj" className="flex items-center py-3 px-4 rounded-lg bg-black bg-opacity-30 hover:bg-opacity-50 transition border border-white/10">
                  <Twitter className="w-6 h-6 text-purple-300 mr-3" />
                  <div>
                    <h4 className="text-lg font-medium text-white">Twitter</h4>
                    <p className="text-gray-400">@VaidikBhrdwj</p>
                  </div>
                </a>
                
                <a href="https://www.linkedin.com/in/vaidik-bhardwaj-21a8b7320" className="flex items-center py-3 px-4 rounded-lg bg-black bg-opacity-30 hover:bg-opacity-50 transition border border-white/10">
                  <Linkedin className="w-6 h-6 text-blue-300 mr-3" />
                  <div>
                    <h4 className="text-lg font-medium text-white">LinkedIn</h4>
                    <p className="text-gray-400">vaidik-bhardwaj</p>
                  </div>
                </a>
                
                <a href="mailto:vaidikbhardwaj00@gmail.com" className="flex items-center py-3 px-4 rounded-lg bg-black bg-opacity-30 hover:bg-opacity-50 transition border border-white/10">
                  <Mail className="w-6 h-6 text-green-300 mr-3" />
                  <div>
                    <h4 className="text-lg font-medium text-white">Email</h4>
                    <p className="text-gray-400">vaidikbhardwaj00@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Response Time Section - additional helpful info with gradient styling */}
      <section className="py-16 bg-gradient-to-b from-indigo-900 to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Response Time</h3>
            <p className="text-gray-300 mb-6">
              I typically respond to messages within 24-48 hours. For urgent inquiries, please mention in your message.
              I am to lazy to implement the send message feature so just mail me.
            </p>
            <div className="glass-effect p-6 rounded-xl inline-block">
              <p className="text-lg text-white">Looking forward to connecting with you!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
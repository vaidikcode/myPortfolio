import React from 'react';
import { Github, Twitter, Mail, Linkedin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            <a href="https://github.com/vaidikcode" className="text-gray-400 hover:text-white">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://x.com/VaidikBhrdwj" className="text-gray-400 hover:text-white">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="mailto:vaidikbhardwaj00@gmail.com" className="text-gray-400 hover:text-white">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/vaidik-bhardwaj-21a8b7320" className="text-gray-400 hover:text-white">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-400">© 2024 Vaidik Bhardwaj. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer
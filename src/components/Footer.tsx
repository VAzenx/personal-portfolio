
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Social Media Links */}
          <div className="flex space-x-6 mb-6">
            <a 
              href="https://github.com" 
              target="_blank"
              rel="noreferrer"
              className="text-portfolio-slate hover:text-portfolio-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank"
              rel="noreferrer"
              className="text-portfolio-slate hover:text-portfolio-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank"
              rel="noreferrer"
              className="text-portfolio-slate hover:text-portfolio-accent transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank"
              rel="noreferrer"
              className="text-portfolio-slate hover:text-portfolio-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>
          
          {/* Copyright Text */}
          <div className="flex text-portfolio-slate text-sm font-mono">
            <p>Designed & Built with ❤️ Wutthipong Wongwai</p>
            <p>&copy; {year} All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

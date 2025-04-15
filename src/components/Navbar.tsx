
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = document.querySelectorAll('section[id]');
      
      // Detect if user has scrolled
      setScrolled(scrollY > 50);
      
      // Only update active section on homepage
      if (isHomePage) {
        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => {
          const sectionHeight = section.getBoundingClientRect().height;
          const sectionTop = (section as HTMLElement).offsetTop - 100;
          const sectionId = section.getAttribute('id') || '';
          
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            setActiveSection(sectionId);
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // Helper function to determine if a nav item is active
  const isActive = (href: string) => {
    if (href.startsWith('/#')) {
      const sectionId = href.substring(2);
      return isHomePage && activeSection === sectionId;
    } else {
      return location.pathname === href;
    }
  };

  return (
    <header 
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-auto rounded-full transition-all duration-300 border-2 border-slate-200 dark:border-blue-500 ${
        scrolled ? 'bg-white/20 dark:bg-black/20 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-5">
        <a href="/#home" className="text-portfolio-navy dark:text-white font-mono text-xl font-semibold hover:text-portfolio-accent dark:hover:text-portfolio-darkAccent transition-colors">
          Wutthipong<span className="text-portfolio-accent dark:text-portfolio-darkAccent">.</span>
        </a>

        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item, index) => (
              <a 
                key={index}
                href={item.href}
                className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-portfolio-navy dark:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-2 border-slate-200 dark:border-blue-500 absolute top-full left-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg py-5 px-4 mt-5 rounded-xl animate-fade-in">
          <nav className="flex flex-col gap-4">
            {NAV_ITEMS.map((item, index) => (
              <a 
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg border-b dark:border-white pb-1 font-medium ${
                  isActive(item.href) 
                    ? 'text-portfolio-accent dark:text-portfolio-darkAccent' 
                    : 'text-portfolio-navy dark:text-gray-300'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

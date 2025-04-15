
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center relative">
      <div 
        className={`section-padding rounded-xl border-2 hover:shadow-xl transition-shadow duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
      >
        <p 
          className="text-portfolio-accent font-mono mb-5 transform translate-y-[-20px] opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          Hello World, my name is
        </p>
        <h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 transform translate-y-[-20px] opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          <span className="heading-gradient">Wutthipong Wongwai.</span>
        </h1>
        <h2 
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-portfolio-slate mb-6 transform translate-y-[-20px] opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          I build things for the web.
        </h2>
        <p 
          className="max-w-xl mb-10 transform translate-y-[-20px] opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.8s' }}
        >
           <span className='text-portfolio-slate hover:heading-gradient transition-text duration-700'>" Believe you can and you're halfway there. "</span> 
        </p>
        <div 
          className="transform translate-y-[-20px] opacity-0 animate-fade-in-up"
          style={{ animationDelay: '1s' }}
        >
          <Button 
            className="bg-transparent border-2 border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent/10 transition-colors px-8 py-6 text-lg"
          >
            <a href="#projects">Check out my work</a>
          </Button>
        </div>
      </div>

      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-portfolio-accent animate-bounce cursor-pointer"
      >
        <span className="font-mono text-sm mb-2">Scroll Down</span>
        <ArrowDown size={20} />
      </a>
    </section>
  );
};

export default Hero;

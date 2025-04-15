
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleLinkHoverEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a' || 
          target.tagName.toLowerCase() === 'button' || 
          target.closest('a') || 
          target.closest('button')) {
        setLinkHovered(true);
      }
    };

    const handleLinkHoverLeave = () => {
      setLinkHovered(false);
    };

    const handleMouseDown = () => {
      setClicked(true);
    };

    const handleMouseUp = () => {
      setClicked(false);
    };

    const handleMouseEnter = () => {
      setHidden(false);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleLinkHoverEnter);
    document.addEventListener('mouseout', handleLinkHoverLeave);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleLinkHoverEnter);
      document.removeEventListener('mouseout', handleLinkHoverLeave);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed z-[999] pointer-events-none transition-transform duration-100 ${
          hidden ? 'opacity-0' : 'opacity-100'
        } ${clicked ? 'scale-75' : ''} ${linkHovered ? 'scale-150' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`w-6 h-6 rounded-full border-2 transition-all duration-150 ease-out ${
            linkHovered ? 'border-portfolio-accent bg-portfolio-accent/10' : 'border-gray-800'
          } ${clicked ? 'bg-gray-800/10' : ''}`}
        />
      </div>
      <div
        className={`fixed z-[999] pointer-events-none transition-transform duration-300 ${
          hidden ? 'opacity-0' : 'opacity-100'
        } ${linkHovered ? 'scale-0' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-1 h-1 rounded-full bg-gray-800" />
      </div>
    </>
  );
};

export default CustomCursor;

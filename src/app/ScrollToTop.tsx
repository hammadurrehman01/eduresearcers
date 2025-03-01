"use client"
import { ArrowUp, ArrowUp01, ArrowUpSquare } from 'lucide-react';

import { useEffect, useState } from 'react';

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (

    <button
      onClick={scrollToTop}
      className={` fixed bottom-5 left-3.5 p-1 rounded-sm bg-orange-600 text-white shadow-lg transition-opacity duration-300 
                  ${visible ? 'opacity-100 z-[999] scale-90 hover:scale-90 hover:animate-bounce duration-700 delay-700'  : 'opacity-0'}`}
      aria-label="Scroll to top"
    >
      <span className=" flex items-center"><ArrowUp /></span>
    </button>
  );
};

export default ScrollToTop;
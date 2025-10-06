import { Link } from "react-router-dom"
import { Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);

  const navRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px"
    };

    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsNavVisible(true);
        }
      });
    }, observerOptions);

    if (navRef.current) {
      navObserver.observe(navRef.current);
    }

    return () => {
      if (navRef.current) {
        navObserver.unobserve(navRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto p-4 md:p-6 relative z-10">
        <header 
          ref={navRef}
          className={`flex items-center justify-between transition-all duration-1000 ease-out ${isNavVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-[-20px]'
          }`}
        >
          <nav>
            <Link to='/' className="uppercase text-white">Tofunmithehuman®</Link>
          </nav>

          <nav className="hidden md:block">
            <ul className="text-[#777777] flex items-center gap-4 uppercase text-sm">
              <li><Link to='/' className="hover:text-white transition-colors duration-300">Home</Link></li>
              <li><Link to='/projects' className="hover:text-white transition-colors duration-300">Projects</Link></li>
              <li><Link to='/contact' className="hover:text-white transition-colors duration-300">Contact</Link></li>
            </ul>
          </nav>

          <nav className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </header>
      </div>

      <div className={`fixed inset-0 bg-black/90 z-50 flex flex-col justify-center items-center transition-all duration-500 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-[-100%]'}`}>
        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-white">
          <X size={24} />
        </button>
        <ul className="flex flex-col gap-8 uppercase text-lg text-[#777777] text-center">
          <li><Link to='/' onClick={() => setIsOpen(false)} className="hover:text-white transition-colors duration-300">Home</Link></li>
          <li><Link to='/projects' onClick={() => setIsOpen(false)} className="hover:text-white transition-colors duration-300">Projects</Link></li>
          <li><Link to='/contact' onClick={() => setIsOpen(false)} className="hover:text-white transition-colors duration-300">Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation
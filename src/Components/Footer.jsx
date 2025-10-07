import { Link } from "react-router-dom"
import { useState, useEffect, useRef } from "react"

const Footer = () => {
  const [isLogoVisible, setIsLogoVisible] = useState(false);
  const [isExploreVisible, setIsExploreVisible] = useState(false);
  const [isConnectVisible, setIsConnectVisible] = useState(false);

  const logoRef = useRef(null);
  const exploreRef = useRef(null);
  const connectRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px"
    };

    const logoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsLogoVisible(true);
        }
      });
    }, observerOptions);

    const exploreObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsExploreVisible(true);
        }
      });
    }, observerOptions);

    const connectObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsConnectVisible(true);
        }
      });
    }, observerOptions);

    if (logoRef.current) {
      logoObserver.observe(logoRef.current);
    }

    if (exploreRef.current) {
      exploreObserver.observe(exploreRef.current);
    }

    if (connectRef.current) {
      connectObserver.observe(connectRef.current);
    }

    return () => {
      if (logoRef.current) {
        logoObserver.unobserve(logoRef.current);
      }
      if (exploreRef.current) {
        exploreObserver.unobserve(exploreRef.current);
      }
      if (connectRef.current) {
        connectObserver.unobserve(connectRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div className="px-4">
        <footer className="max-w-screen-xl mx-auto py-16 border-t border-t-[#777777]/50">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div
              ref={logoRef}
              className={`transition-all duration-1000 ease-out ${isLogoVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
              }`}
            >
              <Link to='/' className="uppercase text-white">Tofunmithehuman®</Link>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-8 uppercase">
              <div
                ref={exploreRef}
                className={`transition-all duration-1000 ease-out ${isExploreVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
                }`}
              >
                <h1 className="text-white mb-2">Explore</h1>
                <ul className="text-[#777777] flex flex-col gap-2">
                  <li><Link to='/' className="hover:text-white transition-colors duration-300">Home</Link></li>
                  <li><Link to='/projects' className="hover:text-white transition-colors duration-300">Projects</Link></li>
                  <li><Link to='/contact' className="hover:text-white transition-colors duration-300">Contact</Link></li>
                </ul>
              </div>
               <div
                ref={connectRef}
                className={`transition-all duration-1000 ease-out ${isConnectVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
                }`}
              >
                <h1 className="text-white mb-2">Connect</h1>
                <ul className="text-[#777777] flex flex-col gap-2">
                  <li><Link to='https://github.com/Tofunmithehuman' target="_blank" className="hover:text-white transition-colors duration-300">GitHub</Link></li>
                  <li><Link to='https://www.instagram.com/tofunmithehuman' target="_blank" className="hover:text-white transition-colors duration-300">Instagram</Link></li>
                  <li><Link to='http://wa.me/2349046346648' target="_blank" className="hover:text-white transition-colors duration-300">Whatsapp</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer
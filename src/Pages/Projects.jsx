import { Link } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import { ArrowUpRight } from 'lucide-react';
import ScrollToTop from "../Components/ScrollToTop"
import Navigation from "../Components/Navigation"
import Footer from "../Components/Footer"
import Edenoceans from "../assets/edenoceans.png"
import LuraVpn from "../assets/luravpn.png"
import DaveMol from "../assets/davemol.png"
import Pinscore from "../assets/pinscore.png"
import AmaLagos from "../assets/amalagos.png"
import Heala from "../assets/heala.png"

const Projects = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);

  const headerRef = useRef(null);
  const projectsRef = useRef(null);

  const projects = [
    { img: Edenoceans, alt: "Edenoceans", name: "Edenoceans", url: "https://www.edenoceans.com/" },
    { img: LuraVpn, alt: "Lura VPN", name: "Lura VPN", url: "https://luravpn.com/" },
    { img: DaveMol, alt: "Dave Mol", name: "Dave Mol", url: "https://dave-mol.vercel.app/" },
    { img: Pinscore, alt: "Pinscore", name: "Pinscore", url: "https://www.pinscore.xyz/" },
    { img: AmaLagos, alt: "Ama Lagos", name: "AMA Lagos", url: "https://amalagos.ng/" },
    { img: Heala, alt: "Heala", name: "Heala", url: "https://heala.ng/" }
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px"
    };

    const headerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
        }
      });
    }, observerOptions);

    const projectsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsProjectsVisible(true);
        }
      });
    }, observerOptions);

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }

    if (projectsRef.current) {
      projectsObserver.observe(projectsRef.current);
    }

    return () => {
      if (headerRef.current) {
        headerObserver.unobserve(headerRef.current);
      }
      if (projectsRef.current) {
        projectsObserver.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <div>
      <Navigation />
      <div>
        <section>
          <div className="max-w-screen-xl mx-auto py-20 px-4">
            <div
              ref={headerRef}
              className={`transition-all duration-1000 ease-out ${isHeaderVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
                }`}
            >
              <h1 className="text-white text-4xl mb-12">Modern, sleek showcases.</h1>
            </div>

            <div
              ref={projectsRef}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8"
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`transition-all duration-1000 ease-out ${
                    isProjectsVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-12'
                  }`}
                  style={{
                    transitionDelay: isProjectsVisible ? `${index * 150}ms` : '0ms'
                  }}
                >
                  <img src={project.img} alt={project.alt} className="mb-4 rounded" />
                  <Link
                    to={project.url}
                    target="_blank"
                    className="text-white text-lg border-b inline-flex items-center justify-start gap-2"
                  >
                    {project.name} <ArrowUpRight />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Projects
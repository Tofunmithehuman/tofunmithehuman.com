import { Link } from "react-router-dom"
import ScrollToTop from "../Components/ScrollToTop"
import Navigation from "../Components/Navigation"
import Footer from "../Components/Footer"
import { useState, useEffect, useRef } from "react"
import WebApp from "../assets/webApp.jpg"
import Animation from "../assets/animation.jpg"
import Code from "../assets/code.jpg"

const Projects = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isFeatureOneVisible, setIsFeatureOneVisible] = useState(false);
  const [isFeatureTwoVisible, setIsFeatureTwoVisible] = useState(false);
  const [isFeatureThreeVisible, setIsFeatureThreeVisible] = useState(false);

  const headerRef = useRef(null);
  const featureOneRef = useRef(null);
  const featureTwoRef = useRef(null);
  const featureThreeRef = useRef(null);

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

    const featureOneObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsFeatureOneVisible(true);
        }
      });
    }, observerOptions);

    const featureTwoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsFeatureTwoVisible(true);
        }
      });
    }, observerOptions);

    const featureThreeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsFeatureThreeVisible(true);
        }
      });
    }, observerOptions);

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }

    if (featureOneRef.current) {
      featureOneObserver.observe(featureOneRef.current);
    }

    if (featureTwoRef.current) {
      featureTwoObserver.observe(featureTwoRef.current);
    }

    if (featureThreeRef.current) {
      featureThreeObserver.observe(featureThreeRef.current);
    }

    return () => {
      if (headerRef.current) {
        headerObserver.unobserve(headerRef.current);
      }
      if (featureOneRef.current) {
        featureOneObserver.unobserve(featureOneRef.current);
      }
      if (featureTwoRef.current) {
        featureTwoObserver.unobserve(featureTwoRef.current);
      }
      if (featureThreeRef.current) {
        featureThreeObserver.unobserve(featureThreeRef.current);
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

            <div className="flex flex-col gap-12 sm:gap-4">
              <div
                ref={featureOneRef}
                className={`flex flex-col-reverse md:flex-row items-center gap-4 transition-all duration-1000 ease-out ${isFeatureOneVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
                  }`}
              >
                <div className="md:w-1/2 text-3xl">
                  <div className="md:max-w-md mx-auto">
                    <Link to='https://www.edenoceans.com/' target="_blank" className="text-white mt-4">Edenoceans</Link>
                    <p className="text-[#777777]">From concept to launch, I craft blazing fast, responsive experiences using the latest web technologies.</p>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <img src={WebApp} alt="Project One" className="rounded-md" />
                </div>
              </div>
              <div
                ref={featureTwoRef}
                className={`flex flex-col-reverse md:flex-row-reverse items-center gap-4 transition-all duration-1000 ease-out ${isFeatureTwoVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
                  }`}
              >
                <div className="md:w-1/2 text-3xl">
                  <div className="md:max-w-md mx-auto">
                    <Link to='https://dave-mol.vercel.app/' target="_blank" className="text-white mt-4">Dave Mol</Link>
                    <p className="text-[#777777]">Every project feels alive with subtle, elegant motion that elevates the user experience.</p>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <img src={Animation} alt="Project Two" className="rounded-md" />
                </div>
              </div>
              <div
                ref={featureThreeRef}
                className={`flex flex-col-reverse md:flex-row items-center gap-4 transition-all duration-1000 ease-out ${isFeatureThreeVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
                  }`}
              >
                <div className="md:w-1/2 text-3xl">
                  <div className="md:max-w-md mx-auto">
                     <Link to='https://luravpn.com/' target="_blank" className="text-white mt-4">Lura VPN</Link>
                    <p className="text-[#777777]">I write robust, maintainable code with a focus on performance and scalability.</p>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <img src={Code} alt="Project Three" className="rounded-md" />
                </div>
              </div>
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
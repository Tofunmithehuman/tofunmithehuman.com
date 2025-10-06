import { Link } from "react-router-dom"
import ScrollToTop from "../Components/ScrollToTop"
import Navigation from "../Components/Navigation"
import Footer from "../Components/Footer"
import { useState, useEffect, useRef } from "react"

const Contact = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);

  const heroRef = useRef(null);
  const formRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px"
    };

    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsHeroVisible(true);
        }
      });
    }, observerOptions);

    const formObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsFormVisible(true);
        }
      });
    }, observerOptions);

    const contactObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsContactVisible(true);
        }
      });
    }, observerOptions);

    if (heroRef.current) {
      heroObserver.observe(heroRef.current);
    }

    if (formRef.current) {
      formObserver.observe(formRef.current);
    }

    if (contactRef.current) {
      contactObserver.observe(contactRef.current);
    }

    return () => {
      if (heroRef.current) {
        heroObserver.unobserve(heroRef.current);
      }
      if (formRef.current) {
        formObserver.unobserve(formRef.current);
      }
      if (contactRef.current) {
        contactObserver.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <div>
      <Navigation />
      <div>
        <section>
          <div className="max-w-screen-xl mx-auto pt-20 px-4">
            <div
              ref={heroRef}
              className={`transition-all duration-1000 ease-out ${isHeroVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
                }`}
            >
              <h1 className="text-4xl text-white">Get in touch—let’s connect with modern simplicity.</h1>
              <p className="text-3xl text-[#777777] mt-2">Whether you have an idea, want to hire me for your next project, or just want to say hello, my inbox is open. Responsive replies, guaranteed.</p>
            </div>
          </div>
        </section>

        <section>
          <form className="max-w-screen-xl mx-auto py-8 px-4">
            <div
              ref={formRef}
              className={`max-w-screen-sm transition-all duration-1000 ease-out ${isFormVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
                }`}
            >
              <div className="mb-4">
                <label>
                  <h4 className="mb-2 text-[#777777]">Name</h4>
                  <input type="text" placeholder="Jane Smith" className="bg-[#191919] text-[#999999] p-2 w-full rounded text-base focus:outline-none" />
                </label>
              </div>

              <div className="mb-4">
                <label>
                  <h4 className="mb-2 text-[#777777]">Email</h4>
                  <input type="email" placeholder="Jane@example.com" className="bg-[#191919] text-[#999999] p-2 w-full rounded text-base focus:outline-none" />
                </label>
              </div>

              <div className="mb-4">
                <label>
                  <h4 className="mb-2 text-[#777777]">Message</h4>
                  <textarea rows={4} placeholder="Your message..." className="bg-[#191919] text-[#999999] p-2 w-full rounded text-base focus:outline-none" />
                </label>
              </div>

              <button className="bg-white/90 w-full md:w-fit font-semibold text-black py-2 px-4 text-sm rounded uppercase cursor-pointer hover:bg-white duration-300">
                Submit
              </button>
            </div>
          </form>
        </section>

        <section>
          <div
            ref={contactRef}
            className={`max-w-screen-xl mx-auto py-8 px-4 md:text-right transition-all duration-1000 ease-out ${isContactVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
              }`}
          >
            <h1 className="text-white text-3xl">Contact Information</h1>
            <p className="text-[#777777]"><Link to="mailto:tofunmithehuman@gmail.com" className="hover:text-white transition-colors duration-300">tofunmithehuman@gmail.com</Link></p>
            <p className="text-[#777777]"><Link to="tel:+2349046346648" className="hover:text-white transition-colors duration-300">(+234) 9046346648</Link></p>
            <p className="text-[#777777]"><Link to="tel:+2347046346648" className="hover:text-white transition-colors duration-300">(+234) 7046346648</Link></p>
          </div>
        </section>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Contact
import { Link } from "react-router-dom"
import ScrollToTop from "../Components/ScrollToTop"
import Navigation from "../Components/Navigation"
import Footer from "../Components/Footer"
import { useState, useEffect, useRef } from "react"
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const heroRef = useRef(null);
  const formRef = useRef(null);
  const contactRef = useRef(null);
  const form = useRef(null);

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

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(form.current);
    const name = formData.get('name')?.trim();
    const email = formData.get('email')?.trim();
    const message = formData.get('message')?.trim();

    if (!name || !email || !message) {
      toast.error('Please fill in all fields to send your message.');
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Message sent successfully! I\'ll get back to you soon.');
        form.current.reset();
      } else {
        toast.error(data.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Navigation />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#000000',
            color: '#fff',
            border: '2px solid #777777',
            fontFamily: 'Outfit',
            fontSize: '10px',
          },
        }}
      />
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
          <form ref={form} onSubmit={sendEmail} className="max-w-screen-xl mx-auto py-8 px-4">
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
                  <input
                    type="text"
                    name="name"
                    placeholder="Jane Smith"
                    className="bg-[#191919] text-[#999999] py-2 px-4 w-full text-base focus:outline-none"
                    required
                  />
                </label>
              </div>

              <div className="mb-4">
                <label>
                  <h4 className="mb-2 text-[#777777]">Email</h4>
                  <input
                    type="email"
                    name="email"
                    placeholder="Jane@example.com"
                    className="bg-[#191919] text-[#999999] py-2 px-4 w-full text-base focus:outline-none"
                    required
                  />
                </label>
              </div>

              <div className="mb-4">
                <label>
                  <h4 className="mb-2 text-[#777777]">Message</h4>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Your message..."
                    className="bg-[#191919] text-[#999999] py-2 px-4 w-full  text-base focus:outline-none"
                    required
                  />
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-white/90 w-full md:w-26 h-9 font-semibold text-black py-2 px-4 text-sm rounded uppercase cursor-pointer hover:bg-white duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                  </>
                ) : (
                  'Submit'
                )}
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
            <p className="text-[#777777]"><a href="mailto:tofunmithehuman@gmail.com" className="hover:text-white transition-colors duration-300">tofunmithehuman@gmail.com</a></p>
            <p className="text-[#777777]"><a href="tel:+2349046346648" className="hover:text-white transition-colors duration-300">(+234) 9046346648</a></p>
            <p className="text-[#777777]"><a href="tel:+2347046346648" className="hover:text-white transition-colors duration-300">(+234) 7046346648</a></p>
          </div>
        </section>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Contact
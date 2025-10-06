import { Link } from "react-router-dom"
import { useState, useEffect, useRef } from "react"

const Error = () => {
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const errorRef = useRef(null);
  const messageRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px"
    };

    const errorObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsErrorVisible(true);
        }
      });
    }, observerOptions);

    const messageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsMessageVisible(true);
        }
      });
    }, observerOptions);

    const buttonObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsButtonVisible(true);
        }
      });
    }, observerOptions);

    if (errorRef.current) {
      errorObserver.observe(errorRef.current);
    }

    if (messageRef.current) {
      messageObserver.observe(messageRef.current);
    }

    if (buttonRef.current) {
      buttonObserver.observe(buttonRef.current);
    }

    return () => {
      if (errorRef.current) {
        errorObserver.unobserve(errorRef.current);
      }
      if (messageRef.current) {
        messageObserver.unobserve(messageRef.current);
      }
      if (buttonRef.current) {
        buttonObserver.unobserve(buttonRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center items-center py-20 px-4">
        <div 
          ref={errorRef}
          className={`text-center transition-all duration-1000 ease-out ${isErrorVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-12'
          }`}
        >
          <h1 className="text-white uppercase text-9xl md:text-[20rem] font-bold tracking-widest mb-4">404</h1>
        </div>
        <div 
          ref={messageRef}
          className={`max-w-md text-center transition-all duration-1000 ease-out ${isMessageVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-white text-2xl font-semibold">Page Not Found</h2>
          <p className="text-[#777777] text-lg mt-2">The page you're looking for doesn't exist or has been moved.</p>
        </div>
        <div 
          ref={buttonRef}
          className={`mt-8 transition-all duration-1000 ease-out ${isButtonVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-12'
          }`}
        >
            <Link to="/" className="bg-white/90 text-black px-8 py-3 rounded text-sm font-semibold uppercase hover:bg-white duration-300">
              Back to Home
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Error
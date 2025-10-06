import { Link } from "react-router-dom"
import ScrollToTop from "../Components/ScrollToTop"
import Navigation from "../Components/Navigation"
import Footer from "../Components/Footer"
import Hero from "../assets/hero.jpg"
import MobileHero from "../assets/MobileHero.jpg"
import { useState, useEffect, useRef } from "react"

const Home = () => {
    const [scale, setScale] = useState(1);
    const [isHeadingVisible, setIsHeadingVisible] = useState(false);
    const [isImageVisible, setIsImageVisible] = useState(false);
    const [isSectionTwoVisible, setIsSectionTwoVisible] = useState(false);
    const [isFeatureOneVisible, setIsFeatureOneVisible] = useState(false);
    const [isFeatureTwoVisible, setIsFeatureTwoVisible] = useState(false);
    const [isFeatureThreeVisible, setIsFeatureThreeVisible] = useState(false);
    const [isCtaVisible, setIsCtaVisible] = useState(false);

    const headingRef = useRef(null);
    const imageRef = useRef(null);
    const sectionTwoRef = useRef(null);
    const featureOneRef = useRef(null);
    const featureTwoRef = useRef(null);
    const featureThreeRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const rate = scrolled * 0.0005;
            setScale(Math.min(1 + rate, 2));
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.2,
            rootMargin: "0px"
        };

        const headingObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsHeadingVisible(true);
                }
            });
        }, observerOptions);

        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsImageVisible(true);
                }
            });
        }, observerOptions);

        const sectionTwoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsSectionTwoVisible(true);
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

        const ctaObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsCtaVisible(true);
                }
            });
        }, observerOptions);

        if (headingRef.current) {
            headingObserver.observe(headingRef.current);
        }

        if (imageRef.current) {
            imageObserver.observe(imageRef.current);
        }

        if (sectionTwoRef.current) {
            sectionTwoObserver.observe(sectionTwoRef.current);
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

        if (ctaRef.current) {
            ctaObserver.observe(ctaRef.current);
        }

        return () => {
            if (headingRef.current) {
                headingObserver.unobserve(headingRef.current);
            }
            if (imageRef.current) {
                imageObserver.unobserve(imageRef.current);
            }
            if (sectionTwoRef.current) {
                sectionTwoObserver.unobserve(sectionTwoRef.current);
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
            if (ctaRef.current) {
                ctaObserver.unobserve(ctaRef.current);
            }
        };
    }, []);

    return (
        <div>
            <Navigation />
            <div>
                <div>
                    <section>
                        <div className="max-w-screen-xl mx-auto py-20 px-4">
                            <div
                                ref={headingRef}
                                className={`uppercase text-4xl font-semibold transition-all duration-1000 ease-out ${isHeadingVisible
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-12'
                                    }`}
                            >
                                <h1 className="text-white">Animated. Modern. Black.</h1>
                                <h2 className="text-[#777777]">Software Developer Portfolio.</h2>
                            </div>

                            <div
                                ref={imageRef}
                                className={`mt-4 sm:mt-16 py-4 md:py-6 relative overflow-hidden rounded-md transition-all duration-1000 ease-out ${isImageVisible
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-16'
                                    }`}
                            >
                                <div className="w-full overflow-hidden rounded-md">
                                    <img
                                        src={Hero}
                                        alt="Tofunmithehuman Desk"
                                        className="w-full h-auto filter grayscale md:block hidden"
                                        style={{ transform: `scale(${scale})` }}
                                    /><img
                                        src={MobileHero}
                                        alt="Tofunmithehuman"
                                        className="w-full h-auto filter grayscale block md:hidden"
                                        style={{ transform: `scale(${scale})` }}
                                    />
                                </div>
                                <div className="absolute inset-0 bg-black opacity-50"></div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div
                            ref={sectionTwoRef}
                            className={`py-10 px-4 text-center text-3xl max-w-4xl mx-auto font-semibold transition-all duration-1000 ease-out ${isSectionTwoVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-12'
                                }`}
                        >
                            <h1 className="text-white">Hi, I’m Oluwatofunmi,</h1>
                            <h2 className="text-[#777777]">I build sleek, efficient, and scalable solutions with code. Passionate about beautiful UI, powerful backends, and seamless digital experience.</h2>
                        </div>
                    </section>


                    <section>
                        <div className="py-20 px-4 max-w-screen-xl mx-auto flex flex-col gap-12 sm:gap-4">
                            <div
                                ref={featureOneRef}
                                className={`flex flex-col-reverse md:flex-row items-center gap-4 transition-all duration-1000 ease-out ${isFeatureOneVisible
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-12'
                                    }`}
                            >
                                <div className="md:w-1/2 text-3xl">
                                    <div className="md:max-w-md mx-auto">
                                        <h1 className="text-white font-semibold mt-4">Modern web apps.</h1>
                                        <p className="text-[#777777]">From concept to launch, I craft blazing fast, responsive experiences using the latest web technologies.</p>
                                    </div>
                                </div>
                                <div className="md:w-1/2">
                                    <img src={Hero} alt="Modern web app" className="filter grayscale rounded-md" />
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
                                        <h1 className="text-white font-semibold mt-4">Smooth animations.</h1>
                                        <p className="text-[#777777]">Every project feels alive with subtle, elegant motion that elevates the user experience.</p>
                                    </div>
                                </div>
                                <div className="md:w-1/2">
                                    <img src={Hero} alt="Smooth animations" className="filter grayscale rounded-md" />
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
                                        <h1 className="text-white font-semibold mt-4">Clean, beautiful code.</h1>
                                        <p className="text-[#777777]">I write robust, maintainable code with a focus on performance and scalability.</p>
                                    </div>
                                </div>
                                <div className="md:w-1/2">
                                    <img src={Hero} alt="Clean, beautiful code" className="filter grayscale rounded-md" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div
                            ref={ctaRef}
                            className={`py-28 px-4 max-w-screen-xl mx-auto md:text-center transition-all duration-1000 ease-out ${isCtaVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-12'
                                }`}
                        >
                            <h1 className="text-white text-4xl sm:text-5xl">Let’s build something amazing together.</h1>
                            <div className="mt-4 md:mt-8">
                                <Link to='/contact' className="bg-white/90 w-full md:w-fit font-semibold text-black py-2 px-4 text-sm rounded uppercase cursor-pointer hover:bg-white duration-300">
                                    Contact me
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
            <ScrollToTop />
        </div>
    )
}

export default Home
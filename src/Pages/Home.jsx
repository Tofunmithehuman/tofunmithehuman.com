import { Link } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import { ArrowUpRight } from 'lucide-react';
import ScrollToTop from "../Components/ScrollToTop"
import Navigation from "../Components/Navigation"
import Footer from "../Components/Footer"
import Hero from "../assets/hero.jpg"
import MobileHero from "../assets/MobileHero.jpg"
import WebApp from "../assets/webApp.jpg"
import Animation from "../assets/animation.jpg"



const Home = () => {
    const [scale, setScale] = useState(1);
    const [isHeadingVisible, setIsHeadingVisible] = useState(false);
    const [isImageVisible, setIsImageVisible] = useState(false);
    const [isSectionTwoVisible, setIsSectionTwoVisible] = useState(false);
    const [isSectionThreeVisible, setIsSectionThreeVisible] = useState(false);
    const [isCtaVisible, setIsCtaVisible] = useState(false);

    const headingRef = useRef(null);
    const imageRef = useRef(null);
    const sectionTwoRef = useRef(null);
    const sectionThreeRef = useRef(null);
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

        const sectionThreeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsSectionThreeVisible(true);
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

        if (sectionThreeRef.current) {
            sectionThreeObserver.observe(sectionThreeRef.current);
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
            if (sectionThreeRef.current) {
                sectionThreeObserver.unobserve(sectionThreeRef.current);
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
                        <div className="py-20 px-4 max-w-screen-xl mx-auto">
                            <div
                                ref={sectionThreeRef}
                                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                            >
                                <div
                                    className={`transition-all duration-1000 ease-out ${isSectionThreeVisible
                                            ? 'opacity-100 translate-y-0'
                                            : 'opacity-0 translate-y-12'
                                        }`}
                                    style={{
                                        transitionDelay: isSectionThreeVisible ? '0ms' : '0ms'
                                    }}
                                >
                                    <img src={WebApp} alt="Modern web app" className="rounded-md mb-4" />
                                    <div className="text-3xl">
                                        <h1 className="text-white font-semibold">Modern web apps.</h1>
                                        <p className="text-[#777777] text-lg">From concept to launch, I craft blazing fast, responsive experiences using the latest web technologies.</p>
                                    </div>
                                </div>

                                <div
                                    className={`transition-all duration-1000 ease-out ${isSectionThreeVisible
                                            ? 'opacity-100 translate-y-0'
                                            : 'opacity-0 translate-y-12'
                                        }`}
                                    style={{
                                        transitionDelay: isSectionThreeVisible ? '150ms' : '0ms'
                                    }}
                                >
                                    <img src={Animation} alt="Smooth animations" className="rounded-md mb-4" />
                                    <div className="text-3xl">
                                        <h1 className="text-white font-semibold">Smooth animations.</h1>
                                        <p className="text-[#777777] text-lg">Every project feels alive with subtle, elegant motion that elevates the user experience.</p>
                                    </div>
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
                                <Link to='https://drive.google.com/file/d/1Tbb8oZofetTfJXWojyalNbfpQ3HLve2g/view?usp=sharing' target="_blank" className="flex justify-center mx-auto items-center gap-1 bg-white/90 w-full md:w-fit font-semibold text-black py-2 px-4 text-sm rounded uppercase cursor-pointer hover:bg-white duration-300">
                                    View Resume <ArrowUpRight className="text-black" />
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
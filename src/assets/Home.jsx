import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Navigation from "../Components/Navigation"
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import { Zap, FileJson, Settings, User, ArrowUpRight } from 'lucide-react';
import Animation from "../assets/animation.jpg"
import Edenoceans from "../assets/edenoceans.png"
import Overmode from "../assets/overmode.png"
import AmaLagos from "../assets/amalagos.png"
import Heala from "../assets/heala.png"

function Home() {
    const [isHeroVisible, setIsHeroVisible] = useState(false);
    const [isProjectsIntroVisible, setIsProjectsIntroVisible] = useState(false);
    const [isProjectsGridVisible, setIsProjectsGridVisible] = useState(false);
    const [isContactVisible, setIsContactVisible] = useState(false);

    const heroRef = useRef(null);
    const projectsIntroRef = useRef(null);
    const projectsGridRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

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

        const projectsIntroObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsProjectsIntroVisible(true);
                }
            });
        }, observerOptions);

        const projectsGridObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsProjectsGridVisible(true);
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

        if (projectsIntroRef.current) {
            projectsIntroObserver.observe(projectsIntroRef.current);
        }

        if (projectsGridRef.current) {
            projectsGridObserver.observe(projectsGridRef.current);
        }

        if (contactRef.current) {
            contactObserver.observe(contactRef.current);
        }

        return () => {
            if (heroRef.current) {
                heroObserver.unobserve(heroRef.current);
            }
            if (projectsIntroRef.current) {
                projectsIntroObserver.unobserve(projectsIntroRef.current);
            }
            if (projectsGridRef.current) {
                projectsGridObserver.unobserve(projectsGridRef.current);
            }
            if (contactRef.current) {
                contactObserver.unobserve(contactRef.current);
            }
        };
    }, []);

    return (
        <div>
            <Navigation />
            <div className="max-w-screen-xl mx-auto p-4">
                <div className="mt-10">
                    <section
                        id="about"
                        ref={heroRef}
                        className={`transition-all duration-1000 ease-out pt-10 ${isHeroVisible
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-12'
                            }`}
                    >
                        <h1 className="text-white text-3xl">Project Otunba</h1>
                        <h2 className="text-gray-500">Developer</h2>
                        <div className="text-gray-500 max-w-xl mt-4">
                            <p>I am a passionate web developer specializing in modern, scalable solutions for businesses and startups. I blend technology and creativity to deliver fast, secure, and beautiful websites.</p>
                            <p className="mt-2">With a strong background in JavaScript, React, and backend APIs, I am dedicated to crafting digital experiences with a focus on performance and pixel-perfect detail.</p>
                        </div>
                        <div>
                            <button onClick={() => scrollToSection('projects')} className="h-10 bg-red-500/80 hover:bg-red-500 duration-300 text-black rounded-full p-2 w-40 mt-4 text-md font-semibold uppercase cursor-pointer">
                                View Projects
                            </button>
                        </div>
                        <div className="text-gray-500 mt-4 text-sm">
                            <p className="flex items-center gap-2 mb-2"><Zap /> Fast Web Apps</p>
                            <p className="flex items-center gap-2 mb-2"><FileJson /> Clean Code</p>
                            <p className="flex items-center gap-2 mb-2"><Settings /> Modern Design</p>
                        </div>
                    </section>

                    <section id="projects" className="mt-20 sm:mt-40 pt-10 ">
                        <div
                            ref={projectsIntroRef}
                            className={`max-w-xl transition-all duration-1000 ease-out ${isProjectsIntroVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-12'
                                }`}
                        >
                            <User className="text-black bg-red-500 w-10 h-10 p-2 rounded-full" size={20} />
                            <h1 className="text-white text-lg mt-4">Project Otunba</h1>
                            <p className="text-gray-500">A showcase of selected web development projects spanning modern UI designs, robust backend integrations, and visually appealing, responsive websites.</p>
                        </div>

                        <div
                            ref={projectsGridRef}
                            className={`mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8 transition-all duration-1000 ease-out ${isProjectsGridVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-12'
                                }`}
                        >
                            <div>
                                <img src={Edenoceans} alt="Edenoceans" className="mb-4" />
                                <Link to="https://www.edenoceans.com/" target="_blank" className="text-white text-lg border-b inline-flex items-center justify-start gap-2">EdenOceans <ArrowUpRight /></Link>
                                <p className="text-gray-500 text-md mt-1">2025</p>
                            </div>
                            <div>
                                <img src={Overmode} alt="Overmode" className="mb-4" />
                                <Link to="https://overmode.com/" target="_blank" className="text-white text-lg border-b inline-flex items-center justify-start gap-2">Overmode <ArrowUpRight /></Link>
                                <p className="text-gray-500 text-md mt-1">2025</p>
                            </div>
                            <div>
                                <img src={AmaLagos} alt="Amalagos" className="mb-4" />  
                                <Link to="https://amalagos.ng/" target="_blank" className="text-white text-lg border-b inline-flex items-center justify-start gap-2">AmaLagos <ArrowUpRight /></Link>
                                <p className="text-gray-500 text-md mt-1">2024</p>
                            </div>
                            <div>
                                <img src={Heala} alt="Heala" className="mb-4" />
                                <Link to="https://heala.ng/" target="_blank" className="text-white text-lg border-b inline-flex items-center justify-start gap-2">Heala <ArrowUpRight /></Link>
                                <p className="text-gray-500 text-md mt-1">2024</p>
                            </div>
                        </div>
                    </section>

                    <section
                        id="contact"
                        ref={contactRef}
                        className={`mt-20 sm:mt-40 pt-10 transition-all duration-1000 ease-out ${isContactVisible
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-12'
                            }`}
                    >
                        <div>
                            <h1 className="text-white text-3xl mb-4">Get in Touch</h1>
                        </div>

                        <form className="max-w-screen-xl mx-auto">
                            <div className="max-w-screen-sm">
                                <div className="mb-4">
                                    <label>
                                        <h4 className="mb-2 text-[#777777]">Name</h4>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Jordan Morre"
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
                                            placeholder="Jordan@example.com"
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
                                            className="bg-[#191919] text-[#999999] py-2 px-4 w-full text-base focus:outline-none resize-none"
                                            required
                                        />
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="bg-red-500/80 w-full md:w-26 h-9 font-semibold text-black py-2 px-4 text-sm rounded uppercase cursor-pointer hover:bg-red-500 duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                                    submit
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
            <Footer />
            <ScrollToTop />
        </div>
    )
}

export default Home
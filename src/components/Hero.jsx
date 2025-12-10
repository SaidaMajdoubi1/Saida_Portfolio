import React from 'react'
import { FaDownload, FaArrowRight } from 'react-icons/fa'
import profileImage from '../assets/images/profilee.png'

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-black">
            <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12">

                {/* Text Content */}
                <div className="flex-1 text-left">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                        Hi, I'm <span className="text-neon">Saida</span>.
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-6">
                        Full Stack Developer | Web & Mobile Applications & Automation (n8n)
                    </p>

                    <p className="text-gray-400 mb-8 max-w-lg">
                        I engineer scalable web applications and intelligent automation systems that solve real-world problems. With a foundation in full-stack development and a passion for AI-driven efficiency, I blend technical precision with creative problem-solving to build modern digital experiences.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#projects"
                            className="px-6 py-3 bg-transparent border border-neon text-neon rounded-full font-medium hover:bg-neon hover:text-dark transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            View My Work <FaArrowRight />
                        </a>

                        <a
                            href="/CV/Saida-Majdoubi.pdf"
                            download
                            className="px-6 py-3 bg-neon text-dark rounded-full font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-neon/30 transition-all duration-300"
                        >
                            <FaDownload /> Download Resume
                        </a>
                    </div>
                </div>

                {/* Profile Image */}
                <div className="flex-1 flex justify-center lg:justify-end">
                    <div className="relative max-w-md h-[600px] overflow-hidden shadow-2xl rounded-lg">
                        <img
                            src={profileImage}
                            alt="Saida - Full Stack Developer"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30"></div>
                    </div>
                </div>
            </div>

            {/* Animated background elements */}
            <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-neon animate-ping"></div>
            <div className="absolute bottom-1/3 right-20 w-1 h-1 rounded-full bg-neon animate-pulse"></div>
        </section>
    );
};

export default Hero;

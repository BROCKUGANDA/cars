import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" }
      });

      tl.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1.2
      })
      .from(".hero-subtitle", {
        y: 50,
        opacity: 0,
        duration: 1
      }, "-=0.8")
      .from(".hero-button", {
        y: 20,
        opacity: 0,
        duration: 0.8
      }, "-=0.6");

      return () => {
        tl.kill();
      };
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen bg-lamborghini-black overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex flex-col justify-center">
        <div className="max-w-4xl">
          <motion.h1 
            className="hero-title text-6xl md:text-8xl font-bold text-lamborghini-yellow mb-6"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            LAMBORGHINI
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle text-xl md:text-2xl text-white mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Experience the pinnacle of Italian automotive excellence
          </motion.p>

          <motion.div 
            className="hero-button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <button className="bg-lamborghini-red text-white px-8 py-4 text-lg font-semibold 
                             hover:bg-lamborghini-yellow hover:text-lamborghini-black 
                             transition-colors duration-300 transform hover:scale-105">
              Discover More
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 
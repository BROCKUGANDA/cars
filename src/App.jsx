import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

// Import GSAP and ScrollTrigger for advanced animations
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    // Create speed lines
    const createSpeedLine = () => {
      const speedLinesContainer = document.querySelector('.speed-lines-container');
      if (!speedLinesContainer) return;

      const line = document.createElement('div');
      line.classList.add('speed-line');
      
      // Random position and size
      const top = Math.random() * 100;
      line.style.top = `${top}%`;
      line.style.width = `${Math.random() * 100 + 50}px`;
      line.style.opacity = Math.random() * 0.7 + 0.3;
      
      speedLinesContainer.appendChild(line);
      
      // Remove line after animation completes
      setTimeout(() => {
        line.remove();
      }, 2000);
    };

    // Create speed lines at intervals
    const interval = setInterval(createSpeedLine, 200);

    // Smooth scroll for navigation
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });

    return () => {
      clearInterval(interval);
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Gallery />
      {/* Add more sections here as needed */}
      <Footer />
    </div>
  );
};

export default App; 
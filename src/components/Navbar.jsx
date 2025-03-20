import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-lamborghini-black/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold text-lamborghini-yellow"
            whileHover={{ scale: 1.05 }}
          >
            LAMBORGHINI
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#gallery">Gallery</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-lamborghini-black/95"
            >
              <div className="py-4 space-y-4">
                <MobileNavLink href="#home" onClick={() => setIsMenuOpen(false)}>
                  Home
                </MobileNavLink>
                <MobileNavLink href="#gallery" onClick={() => setIsMenuOpen(false)}>
                  Gallery
                </MobileNavLink>
                <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>
                  About
                </MobileNavLink>
                <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </MobileNavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

const NavLink = ({ href, children }) => (
  <motion.a
    href={href}
    className="text-white hover:text-lamborghini-yellow transition-colors duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);

const MobileNavLink = ({ href, children, onClick }) => (
  <motion.a
    href={href}
    onClick={onClick}
    className="block px-4 py-2 text-white hover:text-lamborghini-yellow transition-colors duration-300"
    whileHover={{ x: 10 }}
  >
    {children}
  </motion.a>
);

export default Navbar; 
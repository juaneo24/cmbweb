import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 tire-track-bg"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <img
                src="/img/logo.png"
                alt="CMB Racing Team Logo"
                className="h-28 md:h-40 w-auto object-contain"
              />

          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="racing-title text-5xl md:text-7xl lg:text-8xl text-racing-yellow mb-4 glow-yellow"
          >
            CMB RACING
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="racing-subtitle text-xl md:text-2xl lg:text-3xl text-white mb-8 tracking-widest"
          >
            DESIGN. COMPETE. WIN.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              className="bg-racing-yellow text-black hover:bg-racing-yellow/90 text-lg px-8 py-6 racing-subtitle hover-glow transition-all duration-300 rounded-none border-2 border-transparent hover:border-racing-yellow"
            >
              <Link to="/quienes-somos">CONÓCENOS</Link>
            </Button>

            <Button
              asChild
              className="bg-transparent text-racing-yellow hover:text-white text-lg px-8 py-6 racing-subtitle border-2 border-racing-yellow hover:bg-racing-yellow hover:text-black transition-all duration-300 rounded-none"
            >
              <Link to="/galeria">GALERÍA</Link>
            </Button>

            <Button
              asChild
              className="bg-transparent text-racing-yellow hover:text-white text-lg px-8 py-6 racing-subtitle border-2 border-racing-yellow hover:bg-racing-yellow hover:text-black transition-all duration-300 rounded-none"
            >
              <Link to="/contacto">CONTACTO</Link>
            </Button>
          </motion.div>

          

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
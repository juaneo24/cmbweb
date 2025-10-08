import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 racing-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="racing-title text-4xl md:text-6xl text-racing-yellow mb-6">
            ¿QUIÉNES SOMOS?
          </h2>
          <div className="w-24 h-1 bg-racing-yellow mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <iframe
              title="vimeo-player"
              src="https://vimeo.com/1107576080"
              width="640"
              height="360"
              frameBorder="0"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              allowFullScreen
            ></iframe>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-200 text-lg leading-relaxed">
              <strong>CMB Racing Team</strong> es un equipo estudiantil de ingeniería de CETYS Universidad, fundado en 2001. Nuestro objetivo es desarrollar vehículos todo terreno tipo buggy para competir en <strong>Baja SAE</strong>, una competencia internacional que nos rata a aplicar conocimientos de ingeniería real en contextos dinámicos, colaborativos y profesionales. Con más de 20 generaciones de experiencia, representamos con orgullo a México y a nuestra institución.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Somos un grupo multidisciplinario de estudiantes apasionados por la ingeniería, comprometidos con la innovación, la excelencia técnica y el trabajo en equipo. Cada año diseñamos, manufacturamos y probamos un nuevo prototipo que representa el talento y la dedicación de nuestros integrantes.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              A través de este proyecto, los miembros desarrollan habilidades técnicas y blandas que los preparan para enfrentar retos reales en la industria automotriz y de ingeniería.
            </p>
          </motion.div>
        </div>
      </div>
      {/* Botones debajo del texto */}
      <div className="flex flex-wrap justify-center gap-6 mt-12">
        <a href="competencias" className="w-full md:w-auto bg-racing-yellow text-black racing-subtitle py-4 px-8 rounded-lg shadow hover:bg-racing-yellow/90 hover-glow transition-all duration-300 text-center font-semibold text-lg">Ver Competencias</a>
        <a href="subsistemas" className="w-full md:w-auto bg-racing-yellow text-black racing-subtitle py-4 px-8 rounded-lg shadow hover:bg-racing-yellow/90 hover-glow transition-all duration-300 text-center font-semibold text-lg">Ver Subsistemas</a>
        <a href="prototipo-z15" className="w-full md:w-auto bg-racing-yellow text-black racing-subtitle py-4 px-8 rounded-lg shadow hover:bg-racing-yellow/90 hover-glow transition-all duration-300 text-center font-semibold text-lg">Ver Prototipo</a>
        <a href="equipo" className="w-full md:w-auto bg-racing-yellow text-black racing-subtitle py-4 px-8 rounded-lg shadow hover:bg-racing-yellow/90 hover-glow transition-all duration-300 text-center font-semibold text-lg">Ver Equipo</a>
      </div>
      {/* Imagen centrada al final */}
      <div className="mt-20 flex justify-center">
        <img
          src="/img/equipo.jpg"
          alt="Collage de fotos del equipo CMB Racing"
          className="w-full max-w-3xl rounded-xl border border-white/10 shadow-lg"
        />
      </div>
    </section>
  );
};

export default About;

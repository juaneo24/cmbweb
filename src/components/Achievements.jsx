import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Star, MapPin } from 'lucide-react';

const Achievements = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const achievements = [
    {
      icon: Star,
      title: 'Mejor Equipo Mexicano',
      description: 'Participación destacada en Baja SAE Gorman 2024.'
    },
    {
      icon: Medal,
      title: 'Finalistas en Diseño',
      description: 'Reconocimiento constante en pruebas de diseño e inspección técnica.'
    },
    {
      icon: Award,
      title: 'Calidad de Prototipo',
      description: 'Elogios por la calidad, manufactura y presentación de nuestros vehículos.'
    }
  ];

  const locations = ['Arizona', 'Oregon', 'Utah', 'California', 'Washington', 'South Dakota'];

  const images = [
    { src: "/img/arizona2025.jpg", alt: "Competencia en Arizona 2025" },
    { src: "/img/gorman2024.jpg", alt: "Competencia en Gorman 2024" },
    { src: "/img/oregon2023.jpg", alt: "Competencia en Oregon 2023" },
    { src: "/img/tennessee2022.jpg", alt: "Competencia en Tennessee 2022" }
  ];

  return (
    <section id="achievements" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="racing-title text-4xl md:text-6xl text-racing-yellow mb-6">
            COMPETENCIAS BAJA SAE
          </h2>
          <div className="w-24 h-1 bg-racing-yellow mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            CMB Racing ha participado con orgullo durante más de 20 años, representando a México en múltiples sedes de Estados Unidos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="racing-subtitle text-2xl text-white mb-6">Sedes de Competencia</h3>
              <div className="flex flex-wrap gap-3">
                {locations.map((location, index) => (
                  <div key={index} className="flex items-center px-4 py-2 bg-racing-yellow/20 text-racing-yellow rounded-full text-sm border border-racing-yellow/30">
                    <MapPin className="w-4 h-4 mr-2" />
                    {location}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="racing-subtitle text-2xl text-white mb-6">Logros Destacados</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <achievement.icon className="w-6 h-6 mr-4 text-racing-yellow flex-shrink-0" />
                    <div>
                      <p className="font-bold text-white">{achievement.title}</p>
                      <p className="text-sm">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {images.map((img, i) => (
              <img
                key={i}
                onClick={() => setSelectedImg(img)}
                className={`w-full h-64 object-cover rounded-lg racing-card hover-glow transition-transform duration-300 hover:scale-105 cursor-pointer ${i % 2 === 1 ? 'mt-8' : ''}`}
                src={img.src}
                alt={img.alt}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Estilo de modal igual que galería */}
{selectedImg && (
  <div
    className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
    onClick={() => setSelectedImg(null)}
  >
    <div className="relative max-w-4xl w-full mx-4 md:mx-0">
      <img
        src={selectedImg.src}
        alt={selectedImg.alt}
        className="max-h-[80vh] w-full object-contain rounded-lg shadow-lg border border-white/10"
      />
      {/* Texto debajo de la imagen */}
      <div className="bg-black bg-opacity-80 text-white text-center py-2 rounded-b-lg">
        {selectedImg.alt}
      </div>

      {/* Botón cerrar (esquina superior derecha, fuera de la imagen) */}
      <button
        onClick={() => setSelectedImage(null)}
        className="absolute -top-5 -right-5 bg-racing-yellow text-black px-4 py-2 rounded-full shadow-lg hover:bg-white transition-colors duration-300 font-semibold"
      >
        ✕
      </button>

    </div>
  </div>
)}

    </section>
  );
};

export default Achievements;

import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

const Prototypes = () => {
  const prototype = {
    name: 'Z-15',
    description: 'Es el vehículo más reciente del equipo CMB Racing, desarrollado para la competencia Baja SAE 2025. Representa una evolución en diseño estructural, resistencia y desempeño dinámico.',
    objectives: [
      'Completar exitosamente las 3 horas de prueba de resistencia.',
      'Aprobar la inspección técnica desde el primer intento.',
      'Realizar con éxito todas las pruebas dinámicas.',
      'Posicionarse en el Top 10 de la presentación de negocios.',
      'Extender su vida útil para competir durante dos ciclos anuales.'
    ]
  };

  return (
    <section id="prototypes" className="py-20 racing-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="racing-title text-4xl md:text-6xl text-racing-yellow mb-6">
            NUESTRO PROTOTIPO Z-15
          </h2>
          <div className="w-24 h-1 bg-racing-yellow mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img
  src="/img/z1555.jpg"
  alt="Imagen destacada del prototipo Z-15"
  className="w-full max-h-[600px] object-contain rounded-xl racing-card hover-glow bg-black p-2"
/>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              {prototype.description}
            </p>

            <div>
              <h4 className="racing-subtitle text-xl text-white mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-racing-yellow" />
                OBJETIVOS DEL Z-15
              </h4>
              <ul className="space-y-3">
                {prototype.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <CheckCircle className="w-5 h-5 mr-3 text-racing-yellow flex-shrink-0 mt-1" />
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Prototypes;

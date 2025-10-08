import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Users, BrainCircuit, TrendingUp } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: BrainCircuit,
      title: 'Desarrollo de Habilidades',
      description: 'Aplicación real de ingeniería en CAD, simulación, manufactura y pruebas.'
    },
    {
      icon: Briefcase,
      title: 'Experiencia Profesional',
      description: 'Formación práctica, liderazgo y un portafolio técnico competitivo para la industria.'
    },
    {
      icon: Award,
      title: 'Participación Internacional',
      description: 'Oportunidad de competir en un escenario global y ganar experiencia profesional.'
    },
    {
      icon: Users,
      title: 'Trabajo Colaborativo',
      description: 'Capacitación en toma de decisiones, gestión de proyectos y trabajo en equipo.'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="racing-title text-4xl md:text-6xl text-racing-yellow mb-6">
            LO QUE GANAMOS
          </h2>
          <div className="w-24 h-1 bg-racing-yellow mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ser parte de CMB Racing es más que construir un vehículo; es una plataforma para el crecimiento profesional y personal.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="racing-card p-8 text-center hover-glow transition-all duration-300"
            >
              <div className="w-16 h-16 bg-racing-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="racing-subtitle text-lg text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="racing-card p-8 max-w-4xl mx-auto">
            <h3 className="racing-subtitle text-2xl text-racing-yellow mb-4 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 mr-3" />
              IMPULSANDO EL FUTURO
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Nuestros egresados son profesionales altamente capacitados, listos para enfrentar los retos de la industria automotriz y de ingeniería a nivel mundial.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
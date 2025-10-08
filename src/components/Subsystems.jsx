
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Cog, GitCommitHorizontal, Zap, Briefcase, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Subsystems = () => {
  const subsystems = [
    {
      icon: Shield,
      title: 'Chasis y Ergonomía',
      slug: 'chasis-y-ergonomia',
      description: 'Diseña la estructura principal (roll cage) y asegura la seguridad y comodidad del piloto.',
      features: ['Modelado CAD', 'Análisis estructural', 'Manufactura']
    },
    {
      icon: Cog,
      title: 'Tren Motriz',
      slug: 'tren-motriz',
      description: 'Transfiere la potencia del motor a las ruedas. Incluye motor, CVT, diferencial, y ejes.',
      features: ['Cálculos de torque', 'Diseño 3D', 'Ensamblaje mecánico']
    },
    {
      icon: GitCommitHorizontal,
      title: 'Suspensión, Dirección y Frenos',
      slug: 'suspension-direccion-y-frenos',
      description: 'Diseña sistemas de amortiguación, maniobrabilidad y frenado.',
      features: ['Integración de componentes', 'Pruebas dinámicas', 'Análisis estructural']
    },
    {
      icon: Zap,
      title: 'Sistema Eléctrico e Instrumentación',
      slug: 'sistema-electrico',
      description: 'Encargado del sistema eléctrico, sensores, cableado e integración de adquisición de datos.',
      features: ['Diseño de diagramas', 'Instalación de sensores', 'Monitoreo en pista']
    },
    {
      icon: Briefcase,
      title: 'Administración',
      slug: 'administracion',
      description: 'Encargado de logística, finanzas, patrocinios, imagen institucional y presentación de negocios.',
      features: ['Redes sociales', 'Gestión de recursos', 'Búsqueda de patrocinadores']
    }
  ];

  return (
    <section id="subsystems" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="racing-title text-4xl md:text-6xl text-racing-yellow mb-6">
            SUBSISTEMAS
          </h2>
          <div className="w-24 h-1 bg-racing-yellow mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nuestro equipo se organiza en cinco subsistemas, cada uno con funciones clave para el éxito del proyecto.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {subsystems.map((subsystem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="racing-card p-8 hover-glow transition-all duration-300 group flex flex-col items-center"
            >
              <div className="flex items-center mb-6 w-full">
                <div className="w-14 h-14 bg-racing-yellow rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <subsystem.icon className="w-7 h-7 text-black" />
                </div>
                <h3 className="racing-subtitle text-xl text-white">
                  {subsystem.title}
                </h3>
              </div>
              {/* Imagen representativa del subsistema */}
              <img
                src={
                  subsystem.slug === 'chasis-y-ergonomia' ? '/img/chasis/analisis-ansys.jpg' :
                    subsystem.slug === 'tren-motriz' ? '/img/tren/cvt.jpg' :
                      subsystem.slug === 'suspension-direccion-y-frenos' ? '/img/susp/susp.jpg' :
                        subsystem.slug === 'sistema-electrico' ? '/img/elect/luces.jpg' :
                          subsystem.slug === 'administracion' ? '/img/admin/presentaciones-eventos.jpg' :
                            '/img/default.jpg'
                }
                alt={`Imagen de ${subsystem.title}`}
                className="w-full h-40 object-cover rounded-xl mb-6 border border-white/10 shadow"
                loading="lazy"
                style={{ background: '#222' }}
              />
              <p className="text-gray-300 mb-6 leading-relaxed flex-grow text-center">
                {subsystem.description}
              </p>
              <ul className="space-y-2 mb-6">
                {subsystem.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <div className="w-2 h-2 bg-racing-yellow rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="mt-auto w-full border-racing-yellow/50 text-racing-yellow hover:bg-racing-yellow hover:text-black transition-colors duration-300">
                <Link to={`/subsistemas/${subsystem.slug}`} className="flex items-center justify-center w-full py-2">
                  Ver más <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
          ))}
          {/* Sexta tarjeta solo con foto grande */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: subsystems.length * 0.1 }}
            viewport={{ once: true }}
            className="racing-card hover-glow transition-all duration-300 flex flex-col items-center justify-center overflow-hidden"
            style={{ padding: 0 }}
          >
            <img
              src="/img/subs.jpg"
              alt="Foto especial"
              className="w-full h-full object-cover rounded-xl border border-white/10 shadow"
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.75rem', background: '#222' }}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="racing-card p-8 max-w-4xl mx-auto mb-8">
            <h3 className="racing-subtitle text-2xl text-racing-yellow mb-4">
              INTEGRACIÓN Y COLABORACIÓN
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              La verdadera innovación surge cuando todos los subsistemas trabajan en perfecta armonía. Nuestro enfoque integral garantiza que cada componente contribuya al rendimiento óptimo del vehículo como un todo cohesivo.
            </p>
          </div>
          <Button asChild variant="outline" className="mx-auto w-full max-w-md border-racing-yellow/50 text-racing-yellow hover:bg-racing-yellow hover:text-black transition-colors duration-300">
            <Link to="/" className="flex items-center justify-center w-full py-3 text-lg">
              Ir a inicio <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Subsystems;

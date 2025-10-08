import React from 'react';
import { motion } from 'framer-motion';
import { User, Wrench, Settings, Zap, Briefcase, GraduationCap } from 'lucide-react';

const Team = () => {
  const teamStructure = [
    { role: 'Capitán General', name: 'Ricardo Aldrete', icon: User, photo: '/img/team/ricardo.jpg', link: '#' },
    { role: 'Administración', name: 'Ricardo Aldrete', icon: Briefcase, photo: '/img/team/ricardo.jpg', link: '/subsistemas/administracion' },
    { role: 'Chasis y Ergonomía', name: 'Fernando Vivanco', icon: Wrench, photo: '/img/team/fernando.jpg', link: '/subsistemas/chasis-y-ergonomia' },
    { role: 'Tren Motriz', name: 'Juan González', icon: Settings, photo: '/img/team/juan.jpg', link: '/subsistemas/tren-motriz' },
    { role: 'Suspensión, Dirección y Frenos', name: 'Alan Amezcua', icon: Settings, photo: '/img/team/alan.jpg', link: '/subsistemas/suspension-direccion-y-frenos' },
    { role: 'Sistema Eléctrico', name: 'Juan Pablo Valdez', icon: Zap, photo: '/img/team/pablo.jpg', link: '/subsistemas/sistema-electrico' },
    { role: 'Asesor Académico', name: 'Prof. Luis Roberto Ham', icon: GraduationCap, photo: '/img/team/luis.jpg', link: '#' }
  ];

  return (
    <section id="team" className="py-20 racing-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="racing-title text-4xl md:text-6xl text-racing-yellow mb-6">
            ORGANIZACIÓN DEL EQUIPO
          </h2>
          <div className="w-24 h-1 bg-racing-yellow mx-auto mb-8"></div>

          {/* Subtítulo y descripción */}
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            <span className="block text-2xl font-bold text-white mb-2">Capitanes y Maestro Asesor</span>
            En el núcleo del equipo se encuentran los capitanes, responsables de dirigir con liderazgo cada subsistema, fomentar la colaboración y asegurar el cumplimiento de los objetivos del vehículo. <br />
            <strong>El Capitán General</strong> coordina todas las áreas, garantizando la comunicación entre los integrantes y tomando decisiones clave durante el desarrollo del proyecto. <br />
            <strong>El Maestro Asesor</strong>, por su parte, proporciona orientación técnica y académica al equipo, asegurando el cumplimiento de normativas, principios de ingeniería y el desarrollo integral de los miembros.
          </p>
        </motion.div>

        {/* Tarjetas del equipo */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamStructure.map((member, index) => (
              <motion.a
                href={member.link}
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="racing-card text-center p-6 hover-glow transition-all duration-300 group block rounded-lg hover:scale-[1.03]"
              >
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <img
                    className="w-full h-full rounded-full object-cover border-4 border-racing-yellow/50 group-hover:border-racing-yellow transition-all duration-300"
                    alt={`Foto de ${member.name}`}
                    src={member.photo}
                  />
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center border-2 border-black">
                    <member.icon className="w-5 h-5 text-racing-yellow" />
                  </div>
                </div>
                <h4 className="racing-subtitle text-lg text-white">{member.name}</h4>
                <p className="text-racing-yellow text-sm">{member.role}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;

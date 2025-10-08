import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://instagram.com/cetysminibaja',
      label: 'Instagram'
    },
    {
      icon: () => (
        <svg
          className="w-7 h-7"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5.03 3.66 9.2 8.44 9.93v-7.02H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.87h2.74l-.44 2.91h-2.3v7.02C18.34 21.27 22 17.1 22 12.07z" />
        </svg>
      ),
      href: 'https://www.facebook.com/cetysminibaja',
      label: 'Facebook'
    }
  ];

  return (
    <footer className="bg-racing-gray border-t border-racing-yellow/20">
      <div className="container mx-auto px-4 py-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Link to="/">
              <img
                src="/img/logo.png"
                alt="CMB Racing Team Logo"
                className="h-16 w-auto"
              />
            </Link>
          </div>

          {/* Redes sociales y correo juntos */}
          <div className="flex justify-center items-center space-x-6 mb-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-racing-yellow transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon />
              </a>
            ))}
            <a
              href="mailto:cmbracing@cetys.mx"
              className="text-gray-400 hover:text-racing-yellow transition-colors duration-300 inline-flex items-center"
              style={{ marginBottom: 0 }}
            >
              <Mail className="w-5 h-5 mr-2" /> cmbracing@cetys.mx
            </a>
          </div>

          {/* Listado de enlaces a todas las páginas principales */}
          <ul className="flex flex-wrap justify-center gap-4 mb-6 text-sm">
            <li><Link to="/" className="text-gray-400 hover:text-racing-yellow transition-colors duration-300">Inicio</Link></li>
            <li><Link to="/about" className="text-gray-400 hover:text-racing-yellow transition-colors duration-300">¿Quiénes Somos?</Link></li>
            <li><Link to="/competencias" className="text-gray-400 hover:text-racing-yellow transition-colors duration-300">Competencias</Link></li>
            <li><Link to="/subsistemas" className="text-gray-400 hover:text-racing-yellow transition-colors duration-300">Subsistemas</Link></li>
            <li><Link to="/prototipo-z15" className="text-gray-400 hover:text-racing-yellow transition-colors duration-300">Prototipo</Link></li>
            <li><Link to="/equipo" className="text-gray-400 hover:text-racing-yellow transition-colors duration-300">Equipo</Link></li>
            <li><Link to="/contacto" className="text-gray-400 hover:text-racing-yellow transition-colors duration-300">Contacto</Link></li>
            <li><Link to="/galeria" className="text-gray-400 hover:text-racing-yellow transition-colors duration-300">Galería</Link></li>
          </ul>

          {/* Derechos y ubicación */}
          <p className="text-gray-500 text-sm">
            © {currentYear} CMB Racing Team. Todos los derechos reservados.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            CETYS Universidad, Campus Mexicali
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

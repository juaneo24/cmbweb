import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSubsystemsOpen, setIsSubsystemsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: '¿Quiénes somos?', path: '/quienes-somos' },
    { 
      name: 'Subsistemas', 
      path: '/subsistemas',
      subItems: [
        { name: 'Chasis y Ergonomía', path: '/subsistemas/chasis-y-ergonomia'},
        { name: 'Tren Motriz', path: '/subsistemas/tren-motriz'},
        { name: 'Suspensión, Dirección y Frenos', path: '/subsistemas/suspension-direccion-y-frenos'},
        { name: 'Sistema Eléctrico', path: '/subsistemas/sistema-electrico'},
        { name: 'Administración', path: '/subsistemas/administracion'},
      ]
    },
    { name: 'Prototipo Z-15', path: '/prototipo-z15' },
    { name: 'Competencias', path: '/competencias' },
    { name: 'Equipo', path: '/equipo' },
    { name: 'Galería', path: '/galeria' },
    { name: 'Contacto', path: '/contacto' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-racing-yellow/20' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link to="/" className="flex items-center space-x-3 cursor-pointer">
              <img
                src="/img/logo.png"
                alt="CMB Racing Team Logo"
                className="h-16 w-auto object-contain"
              />
            </Link>
          </motion.div>

          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) =>
              item.subItems ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setIsSubsystemsOpen(true)}
                  onMouseLeave={() => setIsSubsystemsOpen(false)}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `font-medium transition-colors duration-300 hover:text-racing-yellow flex items-center ${
                        isActive ? 'text-racing-yellow' : 'text-white'
                      }`
                    }
                  >
                    {item.name}
                    <ChevronDown
                      className={`w-4 h-4 ml-1 transition-transform ${
                        isSubsystemsOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </NavLink>
                  <AnimatePresence>
                    {isSubsystemsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-racing-gray rounded-md shadow-lg p-2 border border-racing-yellow/20"
                      >
                        {item.subItems
                          .slice()
                          .sort((a, b) => a.name.localeCompare(b.name))
                          .map((subItem) => (
                            <NavLink
                              key={subItem.name}
                              to={subItem.path}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsSubsystemsOpen(false);
                              }}
                              className={({ isActive }) =>
                                `block px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-md hover:bg-racing-yellow hover:text-black ${
                                  isActive
                                    ? 'text-racing-yellow bg-black/50'
                                    : 'text-white'
                                }`
                              }
                            >
                              {subItem.name}
                            </NavLink>
                          ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `font-medium transition-colors duration-300 hover:text-racing-yellow ${
                      isActive ? 'text-racing-yellow' : 'text-white'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              )
            )}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:text-racing-yellow"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4 border-t border-racing-yellow/20 bg-black/95 backdrop-blur-md"
            >
              <div className="flex flex-col space-y-4 pt-4 px-4">
                {navItems.map((item) =>
                  item.subItems ? (
                    <div key={item.name}>
                      <NavLink
                        to={item.path}
                        onClick={(e) => {
                          e.preventDefault();
                          setIsSubsystemsOpen(!isSubsystemsOpen);
                        }}
                        className={({ isActive }) =>
                          `flex justify-between items-center w-full text-left font-medium transition-colors duration-300 hover:text-racing-yellow ${
                            isActive ? 'text-racing-yellow' : 'text-white'
                          }`
                        }
                      >
                        {item.name}
                        <ChevronDown
                          className={`w-4 h-4 ml-1 transition-transform ${
                            isSubsystemsOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </NavLink>
                      {isSubsystemsOpen && (
                        <div className="pl-4 mt-2 space-y-2">
                          {item.subItems
                            .slice()
                            .sort((a, b) => a.name.localeCompare(b.name))
                            .map((sub) => (
                              <NavLink
                                key={sub.name}
                                to={sub.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) =>
                                  `block text-left font-medium transition-colors duration-300 hover:text-racing-yellow ${
                                    isActive
                                      ? 'text-racing-yellow'
                                      : 'text-gray-300'
                                  }`
                                }
                              >
                                {sub.name}
                              </NavLink>
                            ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `text-left font-medium transition-colors duration-300 hover:text-racing-yellow ${
                          isActive ? 'text-racing-yellow' : 'text-white'
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
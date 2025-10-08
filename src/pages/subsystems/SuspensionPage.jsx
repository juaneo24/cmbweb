import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GitCommitHorizontal, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SuspensionPage = () => {
  return (
    <>
      <Helmet>
        <title>Suspensión, Dirección y Frenos | CMB Racing Team</title>
        <meta name="description" content="Detalles de Suspensión, Dirección y Frenos. Maniobrabilidad, amortiguación y capacidad de frenado." />
      </Helmet>
      <div className="pt-32 pb-16 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-racing-yellow p-4 rounded-lg mb-4">
              <GitCommitHorizontal className="w-12 h-12 text-black" />
            </div>
            <h1 className="racing-title text-4xl md:text-6xl text-racing-yellow mb-6">
              Suspensión, Dirección y Frenos
            </h1>
            <div className="w-24 h-1 bg-racing-yellow mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Control total sobre cualquier terreno. Agilidad, respuesta y poder de detención.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                className="w-full h-80 object-cover rounded-lg racing-card"
                alt="Análisis CAD de suspensión"
                src="/img/susp/analisis-susp.jpg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img
                className="w-full h-80 object-cover rounded-lg racing-card"
                alt="Subsistema ensamblado de suspensión"
                src="/img/susp/susp.jpg"
              />
            </motion.div>
          </div>

          <div className="text-white max-w-4xl mx-auto text-lg leading-relaxed mb-16">
            <p>
              El subsistema de <strong>Suspensión, Dirección y Frenos</strong> está encargado de garantizar la estabilidad, el confort y el control del vehículo en condiciones extremas. Cada componente se diseña y ajusta para maximizar la maniobrabilidad, minimizar la transferencia de carga y asegurar una respuesta rápida durante situaciones críticas.
            </p>
            <p className="mt-4">
              Se emplean análisis cinemáticos y dinámicos para definir la geometría óptima del sistema de suspensión, que incluye configuraciones independientes tipo <em>double wishbone</em> y amortiguadores ajustables. Esta geometría se simula digitalmente para anticipar el comportamiento bajo compresión, rebote y carga lateral.
            </p>
            <p className="mt-4">
              El sistema de dirección se configura mediante cremallera personalizada y ángulos de caster, camber y toe alineados con las exigencias del circuito. En cuanto al sistema de frenado, se utiliza freno hidráulico de disco en las cuatro ruedas, con pruebas de distribución de carga en pista que permiten una configuración eficaz del balanceo.
            </p>
            <p className="mt-4">
              Este subsistema trabaja en coordinación directa con el equipo de <strong>Chasis</strong> y <strong>Tren Motriz</strong>, lo cual asegura compatibilidad dimensional, rigidez estructural y rendimiento durante frenadas bruscas, curvas pronunciadas y saltos.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Button
              asChild
              variant="outline"
              className="border-racing-yellow text-racing-yellow hover:bg-racing-yellow hover:text-black transition-colors duration-300 px-8 py-6 racing-subtitle"
            >
              <Link to="/subsistemas">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Volver a Subsistemas
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SuspensionPage;

import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ChassisPage = () => {
  return (
    <>
      <Helmet>
        <title>Chasis y Ergonomía | CMB Racing Team</title>
        <meta name="description" content="Detalles del subsistema de Chasis y Ergonomía. Diseño de la estructura principal del vehículo, seguridad y comodidad del piloto." />
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
              <Shield className="w-12 h-12 text-black" />
            </div>
            <h1 className="racing-title text-4xl md:text-6xl text-racing-yellow mb-6">
              Chasis y Ergonomía
            </h1>
            <div className="w-24 h-1 bg-racing-yellow mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              La columna vertebral de nuestro vehículo, garantizando la máxima seguridad y el confort del piloto.
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
                alt="Análisis estructural del chasis en ANSYS"
                src="/img/chasis/analisis-ansys.jpg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img
                className="w-full h-80 object-cover rounded-lg racing-card"
                alt="Chasis terminado y pintado"
                src="/img/chasis/chasis-pintado.jpg"
              />
            </motion.div>
          </div>

          <div className="text-white max-w-4xl mx-auto text-lg leading-relaxed mb-16">
            <p>
              El subsistema de <strong>Chasis y Ergonomía</strong> representa uno de los pilares fundamentales en el diseño y manufactura de nuestro vehículo. Su principal objetivo es proporcionar una estructura resistente, ligera y funcional que garantice la integridad del piloto ante cualquier escenario de impacto, a la vez que permite una experiencia de conducción ergonómica y segura.
            </p>
            <p className="mt-4">
              El desarrollo del chasis inicia con el modelado tridimensional en <strong>SolidWorks</strong>, considerando las normativas del reglamento <em>Baja SAE</em>. Posteriormente, se realizan análisis estructurales por elementos finitos (<strong>FEA</strong>) mediante la plataforma <strong>ANSYS</strong>, lo que permite identificar concentraciones de esfuerzo y optimizar la geometría para mejorar el rendimiento estructural sin incrementar significativamente el peso.
            </p>
            <p className="mt-4">
              Durante la etapa de fabricación, se emplea soldadura <strong>MIG</strong> sobre tubos de acero estructural (especificaciones definidas por el reglamento). Este proceso se lleva a cabo en coordinación con otras áreas como <em>Suspensión</em> y <em>Tren Motriz</em>, asegurando compatibilidad dimensional y funcional. Asimismo, se realizan validaciones físicas y ajustes ergonómicos con base en las medidas antropométricas de los pilotos, priorizando visibilidad, accesibilidad a controles, y distribución de peso adecuada.
            </p>
            <p className="mt-4">
              En resumen, el trabajo del subsistema va más allá de soldar tubos: consiste en diseñar una estructura estratégica, alineada con criterios de <strong>seguridad, eficiencia y normativa internacional</strong>, que además integre armoniosamente al piloto dentro del sistema de competencia.
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

export default ChassisPage;

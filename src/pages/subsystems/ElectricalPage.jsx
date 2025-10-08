import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ElectricalPage = () => {
  return (
    <>
      <Helmet>
        <title>Sistema Eléctrico e Instrumentación | CMB Racing Team</title>
        <meta name="description" content="Detalles del Sistema Eléctrico e Instrumentación. Sensores, adquisición de datos y electrónica del vehículo." />
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
              <Zap className="w-12 h-12 text-black" />
            </div>
            <h1 className="racing-title text-4xl md:text-6xl text-racing-yellow mb-6">
              Sistema Eléctrico e Instrumentación
            </h1>
            <div className="w-24 h-1 bg-racing-yellow mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              El sistema nervioso del prototipo. Recolectando datos cruciales para la optimización del rendimiento.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <img className="w-full h-80 object-cover rounded-lg racing-card" alt="Caja de fusibles del vehículo" src="/img/elect/fusibles.jpg" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              <img className="w-full h-80 object-cover rounded-lg racing-card" alt="Sistema de luces traseras" src="/img/elect/luces.jpg" />
            </motion.div>
          </div>

          <div className="text-white max-w-4xl mx-auto text-lg leading-relaxed mb-16">
            <p className="mb-4">
              El subsistema de <strong>Sistema Eléctrico e Instrumentación</strong> tiene como objetivo principal garantizar la funcionalidad y fiabilidad de los componentes eléctricos del vehículo. Incluye la distribución de energía eléctrica mediante cableado automotriz, la protección con sistemas de fusibles y el correcto conexionado de todos los dispositivos críticos del sistema.
            </p>
            <p className="mb-4">
              Este subsistema también se encarga de la <strong>instrumentación</strong>, lo cual implica la integración de sensores analógicos y digitales para la recolección de datos operativos durante pruebas y competencias. Entre estos se incluyen sensores de velocidad, temperatura de motor, nivel de combustible, voltaje de batería, y señales del sistema de freno.
            </p>
            <p className="mb-4">
              Además, el equipo eléctrico implementa un sistema de luces LED de alta eficiencia para señalización y seguridad, cumpliendo con el reglamento de la competencia. Se ha desarrollado un tablero central personalizado para monitoreo del sistema mediante indicadores visuales y eventualmente se proyecta la incorporación de telemetría en tiempo real.
            </p>
            <p className="mb-4">
              La correcta implementación de este subsistema no solo mejora la confiabilidad y seguridad del vehículo, sino que proporciona al equipo datos esenciales para la toma de decisiones técnicas y estratégicas.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Button asChild variant="outline" className="border-racing-yellow text-racing-yellow hover:bg-racing-yellow hover:text-black transition-colors duration-300 px-8 py-6 racing-subtitle">
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

export default ElectricalPage;

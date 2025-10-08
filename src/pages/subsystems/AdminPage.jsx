import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Briefcase, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AdminPage = () => {
  return (
    <>
      <Helmet>
        <title>Administración | CMB Racing Team</title>
        <meta name="description" content="Detalles del subsistema de Administración. Logística, finanzas, patrocinios e imagen del equipo." />
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
              <Briefcase className="w-12 h-12 text-black" />
            </div>
            <h1 className="racing-title text-4xl md:text-6xl text-racing-yellow mb-6">
              Administración
            </h1>
            <div className="w-24 h-1 bg-racing-yellow mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              El motor que impulsa el proyecto fuera de la pista. Gestionando recursos para alcanzar nuestras metas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <img className="w-full h-80 object-cover rounded-lg racing-card" alt="Búsqueda de patrocinadores" src="/img/admin/busqueda-patrocinios.jpg" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              <img className="w-full h-80 object-cover rounded-lg racing-card" alt="Presentaciones y eventos" src="/img/admin/presentaciones-eventos.jpg" />
            </motion.div>
          </div>

          <div className="text-white max-w-4xl mx-auto text-lg leading-relaxed mb-16">
            <p className="mb-4">
              El subsistema de <strong>Administración</strong> desempeña un papel estratégico en la sostenibilidad y proyección del equipo. Es responsable de la planeación financiera, gestión de recursos, obtención de patrocinios, imagen institucional, y organización de eventos.
            </p>
            <p className="mb-4">
              A través de presentaciones empresariales, propuestas formales y estrategias de marketing, este subsistema se encarga de establecer relaciones con la industria, generar convenios de colaboración, y mantener la comunicación con nuestros aliados estratégicos.
            </p>
            <p className="mb-4">
              También gestiona la logística de viajes, compra de insumos, cronogramas de actividades y documentación administrativa, asegurando que cada proceso dentro del equipo esté debidamente respaldado y coordinado.
            </p>
            <p className="mb-4">
              Además, el área de Administración incluye el desarrollo de la presentación de negocios para la competencia Baja SAE, donde se simula la comercialización del vehículo ante inversionistas, evaluando factores como costos, mercado objetivo, y rentabilidad.
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

export default AdminPage;

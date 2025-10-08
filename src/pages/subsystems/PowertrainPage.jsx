import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cog, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PowertrainPage = () => {
  return (
    <>
      <Helmet>
        <title>Tren Motriz | CMB Racing Team</title>
        <meta name="description" content="Detalles del subsistema de Tren Motriz. Transferencia de potencia, motor, CVT, diferencial y más." />
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
              <Cog className="w-12 h-12 text-black" />
            </div>
            <h1 className="racing-title text-4xl md:text-6xl text-racing-yellow mb-6">
              Tren Motriz
            </h1>
            <div className="w-24 h-1 bg-racing-yellow mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              El corazón de la bestia. Optimizando cada caballo de fuerza para un rendimiento implacable.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <img className="w-full h-80 object-cover rounded-lg racing-card" alt="CVT instalado" src="/img/tren/cvt.jpg" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              <img className="w-full h-80 object-cover rounded-lg racing-card" alt="Vista interna del sistema de transmisión" src="/img/tren/transmision.jpg" />
            </motion.div>
          </div>

          <div className="text-white max-w-4xl mx-auto text-lg leading-relaxed mb-16">
            <p className="mb-4">
              El subsistema de <strong>Tren Motriz</strong> es el encargado de transferir la potencia generada por el motor hacia las ruedas del vehículo, de manera eficiente y controlada. Este sistema está conformado por varios componentes críticos como el motor, la transmisión CVT (transmisión continuamente variable), el eje de transmisión y el sistema diferencial.
            </p>
            <p className="mb-4">
              En el caso del prototipo CMB, se implementa un motor de combustión interna acoplado a un sistema CVT UMATEK, que permite modificar de forma automática la relación de transmisión, manteniendo el motor en su punto óptimo de potencia. Posteriormente, se conecta a una caja de transmisión tipo transaxle que permite seleccionar entre las posiciones de avance, reversa y neutro.
            </p>
            <p className="mb-4">
              Se han realizado pruebas y simulaciones para validar las relaciones de engranaje, buscando un equilibrio entre aceleración, torque y velocidad final. El diseño modular de este subsistema permite ajustes mecánicos rápidos y facilita el mantenimiento durante competencia.
            </p>
            <p className="mb-4">
              La confiabilidad del tren motriz es crucial para el desempeño en pista, por lo que se prioriza el uso de componentes robustos, una correcta alineación del sistema y un análisis térmico para evitar sobrecalentamiento en puntos clave del conjunto.
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

export default PowertrainPage;

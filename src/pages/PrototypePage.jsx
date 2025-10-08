import React from 'react';
import { Helmet } from 'react-helmet';
import Prototypes from '@/components/Prototypes';

const PrototypePage = () => {
  return (
    <>
      <Helmet>
        <title>Prototipo Z-15 | CMB Racing Team</title>
        <meta name="description" content="Descubre el prototipo Z-15, el vehículo más reciente de CMB Racing. Conoce sus características técnicas, objetivos y evolución." />
      </Helmet>
      <div className="pt-24">
        <Prototypes />
      </div>
    </>
  );
};

export default PrototypePage;
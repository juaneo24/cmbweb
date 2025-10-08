import React from 'react';
import { Helmet } from 'react-helmet';
import Achievements from '@/components/Achievements';

const CompetitionsPage = () => {
  return (
    <>
      <Helmet>
        <title>Competencias Baja SAE | CMB Racing Team</title>
        <meta name="description" content="Conoce la trayectoria de CMB Racing en las competencias de Baja SAE, nuestros logros destacados y las sedes en las que hemos participado." />
      </Helmet>
      <div className="pt-24">
        <Achievements />
      </div>
    </>
  );
};

export default CompetitionsPage;
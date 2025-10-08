import React from 'react';
import { Helmet } from 'react-helmet';
import Subsystems from '@/components/Subsystems';

const SubsystemsPage = () => {
  return (
    <>
      <Helmet>
        <title>Subsistemas | CMB Racing Team</title>
        <meta name="description" content="Explora los subsistemas técnicos y administrativos que componen CMB Racing Team: Chasis, Tren Motriz, Suspensión, Eléctrico y Administración." />
      </Helmet>
      <div className="pt-24">
        <Subsystems />
      </div>
    </>
  );
};

export default SubsystemsPage;
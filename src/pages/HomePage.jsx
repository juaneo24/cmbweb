
import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>CMB Racing Team | DESIGN. COMPETE. WIN.</title>
        <meta name="description" content="Sitio oficial de CMB Racing, el equipo de Baja SAE de CETYS Universidad. DESIGN. COMPETE. WIN." />
      </Helmet>
      <Hero />
    </>
  );
};

export default HomePage;

import React from 'react';
import { Helmet } from 'react-helmet';
import About from '@/components/About';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>¿Quiénes somos? | CMB Racing Team</title>
        <meta name="description" content="Conoce la historia, misión y visión de CMB Racing Team. Un equipo de ingeniería de CETYS Universidad con más de 20 años de experiencia en Baja SAE." />
      </Helmet>
      <div className="pt-24">
        <About />
      </div>
    </>
  );
};

export default AboutPage;
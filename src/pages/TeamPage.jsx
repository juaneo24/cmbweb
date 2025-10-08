import React from 'react';
import { Helmet } from 'react-helmet';
import Team from '@/components/Team';

const TeamPage = () => {
  return (
    <>
      <Helmet>
        <title>Equipo | CMB Racing Team</title>
        <meta name="description" content="Conoce a los miembros y la organización del equipo CMB Racing para el ciclo 2024-2025, incluyendo líderes de subsistemas y asesor académico." />
      </Helmet>
      <div className="pt-24">
        <Team />
      </div>
    </>
  );
};

export default TeamPage;
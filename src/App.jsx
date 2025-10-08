import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import SubsystemsPage from '@/pages/SubsystemsPage';
import PrototypePage from '@/pages/PrototypePage';
import CompetitionsPage from '@/pages/CompetitionsPage';
import TeamPage from '@/pages/TeamPage';
import GalleryPage from '@/pages/GalleryPage';
import ContactPage from '@/pages/ContactPage';

import ChassisPage from '@/pages/subsystems/ChassisPage';
import PowertrainPage from '@/pages/subsystems/PowertrainPage';
import SuspensionPage from '@/pages/subsystems/SuspensionPage';
import ElectricalPage from '@/pages/subsystems/ElectricalPage';
import AdminPage from '@/pages/subsystems/AdminPage';

function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quienes-somos" element={<AboutPage />} />
          <Route path="/subsistemas" element={<SubsystemsPage />} />
          <Route path="/prototipo-z15" element={<PrototypePage />} />
          <Route path="/competencias" element={<CompetitionsPage />} />
          <Route path="/equipo" element={<TeamPage />} />
          <Route path="/galeria" element={<GalleryPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          
          <Route path="/subsistemas/chasis-y-ergonomia" element={<ChassisPage />} />
          <Route path="/subsistemas/tren-motriz" element={<PowertrainPage />} />
          <Route path="/subsistemas/suspension-direccion-y-frenos" element={<SuspensionPage />} />
          <Route path="/subsistemas/sistema-electrico" element={<ElectricalPage />} />
          <Route path="/subsistemas/administracion" element={<AdminPage />} />
        </Routes>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandStory from './components/BrandStory';
import SommelierVirtual from './components/SommelierVirtual';
import Catalog from './components/Catalog';
import RitualEvents from './components/RitualEvents';
import Footer from './components/Footer';
import AgeVerificationModal from './components/AgeVerificationModal';
import WhatsAppFloatingBtn from './components/WhatsAppFloatingBtn';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A111C] text-[#F4F4F6] relative selection:bg-[#C89D54]/30 selection:text-[#DFB76C]">
      {/* Age Verification Modal on first visit */}
      <AgeVerificationModal />

      {/* Fixed Navigation Bar with blur */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section with 3D Floating Habano and Smoke Drift */}
        <Hero />

        {/* Sommelier Virtual Interactivo */}
        <SommelierVirtual />

        {/* Catálogo Seleccionado con Filtros y WhatsApp */}
        <Catalog />

        {/* Experiencias: Ritual de Copa & Catas Privadas */}
        <RitualEvents />

        {/* El Ritual del Buen Vivir Manifesto */}
        <BrandStory />
      </main>

      {/* Footer with Patagonia info & IG */}
      <Footer />

      {/* Floating WhatsApp Action Button with Gold Pulse */}
      <WhatsAppFloatingBtn />
    </div>
  );
}

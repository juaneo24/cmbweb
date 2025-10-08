import React from 'react';
import { Helmet } from 'react-helmet';
import Contact from '@/components/Contact';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contacto | CMB Racing Team</title>
        <meta name="description" content="Ponte en contacto con CMB Racing Team. Encuentra nuestro formulario, correo electrónico, redes sociales y ubicación. ¡Únete o patrocina!" />
      </Helmet>
      <div className="pt-24">
        <Contact />
      </div>
    </>
  );
};

export default ContactPage;
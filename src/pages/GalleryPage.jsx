import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const galleryImages = [
  { src: '/img/equipo.jpg', alt: 'Foto grupal del equipo CMB Racing' },
  { src: '/img/equiposmx.jpg', alt: 'Equipo CMB Racing representando a México' },
  { src: '/img/marana1.jpg', alt: 'Inicio de actividades en Marana' },
  { src: '/img/marana2.jpg', alt: 'Equipo en revisión técnica' },
  { src: '/img/marana3.jpg', alt: 'Prototipo Z-15 en revisión' },
  { src: '/img/z15.jpg', alt: 'Prototipo Z-15 completo' },
  { src: '/img/z151.jpg', alt: 'Prototipo Z-15 desde vista lateral' },
  { src: '/img/z152.jpg', alt: 'Preparación en zona de boxes' },
  { src: '/img/z153.jpg', alt: 'Vehículo sobre pista' },
  { src: '/img/z154.jpg', alt: 'Acción en la pista durante carrera' },
  { src: '/img/piloto.jpg', alt: 'Piloto del equipo CMB Racing' }
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Swipe handlers para móviles
  React.useEffect(() => {
    if (selectedImage === null) return;
    let touchStartX = null;
    let touchEndX = null;
    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
    };
    const handleTouchMove = (e) => {
      touchEndX = e.touches[0].clientX;
    };
    const handleTouchEnd = () => {
      if (touchStartX !== null && touchEndX !== null) {
        const diff = touchEndX - touchStartX;
        if (diff > 50) {
          // Swipe derecha (anterior)
          goToPrev();
        } else if (diff < -50) {
          // Swipe izquierda (siguiente)
          goToNext();
        }
      }
      touchStartX = null;
      touchEndX = null;
    };
    const modal = document.getElementById('gallery-modal');
    if (modal) {
      modal.addEventListener('touchstart', handleTouchStart);
      modal.addEventListener('touchmove', handleTouchMove);
      modal.addEventListener('touchend', handleTouchEnd);
    }
    return () => {
      if (modal) {
        modal.removeEventListener('touchstart', handleTouchStart);
        modal.removeEventListener('touchmove', handleTouchMove);
        modal.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [selectedImage]);

  const goToPrev = () => {
    if (selectedIndex > 0) {
      setSelectedImage(galleryImages[selectedIndex - 1]);
      setSelectedIndex(selectedIndex - 1);
    }
  };
  const goToNext = () => {
    if (selectedIndex < galleryImages.length - 1) {
      setSelectedImage(galleryImages[selectedIndex + 1]);
      setSelectedIndex(selectedIndex + 1);
    }
  };

  return (
    <>
      <Helmet>
        <title>Galería | CMB Racing Team</title>
        <meta name="description" content="Explora la galería de fotos y videos de CMB Racing. Imágenes de nuestro taller, el proceso de manufactura y nuestra participación en competencias." />
      </Helmet>

      <div className="pt-24 bg-black">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="racing-title text-4xl md:text-6xl text-racing-yellow mb-6">GALERÍA</h1>
            <div className="w-24 h-1 bg-racing-yellow mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Un vistazo a nuestro mundo: desde el taller hasta la pista de competencia.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
          >
            {galleryImages.map((image, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="break-inside-avoid"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover rounded-lg racing-card hover-glow transition-transform duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => { setSelectedImage(image); setSelectedIndex(i); }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {selectedImage && (
        <div id="gallery-modal" className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative flex flex-col items-center">
            <button
              onClick={() => { setSelectedImage(null); setSelectedIndex(null); }}
              className="absolute -top-5 -right-5 bg-racing-yellow text-black px-4 py-2 rounded-full shadow-lg hover:bg-white transition-colors duration-300 font-semibold"
            >
              ✕
            </button>
            {/* Botón anterior */}
            {selectedIndex > 0 && (
              <button
                onClick={goToPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-racing-yellow text-black px-3 py-2 rounded-full shadow-lg hover:bg-white transition-colors duration-300 font-semibold"
                aria-label="Anterior"
              >
                &#8592;
              </button>
            )}
            {/* Botón siguiente */}
            {selectedIndex < galleryImages.length - 1 && (
              <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-racing-yellow text-black px-3 py-2 rounded-full shadow-lg hover:bg-white transition-colors duration-300 font-semibold"
                aria-label="Siguiente"
              >
                &#8594;
              </button>
            )}
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] rounded-xl shadow-2xl transition-transform duration-300"
            />
            <p className="text-white text-center mt-4 text-lg font-light">{selectedImage.alt}</p>
          </div>
        </div>
      )}

    </>
  );
};

export default GalleryPage;

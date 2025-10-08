import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { motion } from 'framer-motion';
import { Mail, MapPin, Instagram, Send, User, MessageSquare, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import axios from 'axios';

const Contact = () => {
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos requeridos.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const formspreeEndpoint = 'https://formspree.io/f/xnnvryjk'; // New Endpoint
      await axios.post(formspreeEndpoint, {
        ...formData,
        _subject: `Nuevo mensaje de ${formData.name}: ${formData.subject || 'Sin asunto'}`,
      });

      toast({
        title: "¡Mensaje enviado!",
        description: "Gracias por contactarnos. Te responderemos pronto.",
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error al enviar",
        description: "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'cmbracing@cetys.mx',
      link: 'mailto:cmbracing@cetys.mx'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      value: '@cetysminibaja',
      link: 'https://instagram.com/cetysminibaja'
    },
    {
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-black"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5.03 3.66 9.2 8.44 9.93v-7.02H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.87h2.74l-.44 2.91h-2.3v7.02C18.34 21.27 22 17.1 22 12.07z" />
        </svg>
      ),
      title: 'Facebook',
      value: 'CMB Racing',
      link: 'https://www.facebook.com/cetysminibaja'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'CETYS Universidad, Campus Mexicali',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="racing-title text-4xl md:text-6xl text-racing-yellow mb-6">
            CONTACTO
          </h2>
          <div className="w-24 h-1 bg-racing-yellow mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ¿Interesado en patrocinar, unirte al equipo o conocer más sobre nuestro proyecto? ¡Nos encantaría escuchar de ti!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="racing-card p-8"
          >
            <h3 className="racing-subtitle text-2xl text-white mb-6 flex items-center">
              <MessageSquare className="w-6 h-6 mr-3 text-racing-yellow" />
              ENVÍANOS UN MENSAJE
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Nombre *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-racing-yellow focus:outline-none text-white" placeholder="Tu nombre completo" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-racing-yellow focus:outline-none text-white" placeholder="tu@email.com" />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Asunto</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-racing-yellow focus:outline-none text-white" placeholder="¿De qué quieres hablar?" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Mensaje *</label>
                <textarea name="message" value={formData.message} onChange={handleInputChange} required rows={6} className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-racing-yellow focus:outline-none text-white resize-none" placeholder="Cuéntanos más sobre tu interés en CMB Racing..."></textarea>
              </div>
              <ReCAPTCHA
                sitekey="6LdMtporAAAAAMfCHJMJaPZC8u_o1kCfX54Q-mXB"
                onChange={(token) => setRecaptchaToken(token)}
                className="flex justify-center"
              />
              <Button type="submit" disabled={isSubmitting} className="w-full bg-racing-yellow text-black hover:bg-racing-yellow/90 racing-subtitle py-6 hover-glow transition-all duration-300 flex items-center justify-center mt-4">
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                ) : (
                  <Send className="w-5 h-5 mr-2" />
                )}
                {isSubmitting ? 'ENVIANDO...' : 'ENVIAR MENSAJE'}
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="racing-subtitle text-2xl text-white mb-6">
                INFORMACIÓN DE CONTACTO
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="racing-card p-6 hover-glow transition-all duration-300 group">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-racing-yellow rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h4 className="racing-subtitle text-lg text-white mb-1">{info.title}</h4>
                        {info.link !== '#' ? (
                          <a href={info.link} target="_blank" rel="noopener noreferrer" className="text-racing-yellow hover:text-white transition-colors">{info.value}</a>
                        ) : (
                          <span className="text-gray-300">{info.value}</span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }}>
              <img className="w-full h-64 object-cover rounded-lg racing-card hover-glow" alt="Equipo CMB Racing en el taller" src="/img/equipo.jpg" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
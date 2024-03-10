import React from 'react';
import OrderWindow from '../../assets/images/OrderWindow.png';
import { motion } from 'framer-motion';
import { once } from 'events';
import DashboardGuardia from '../../assets/images/DashboardGuardia.png';

const HowItWorksCard = () => {
  return (
    <div
      href="#"
      className="flex mt-0 mb-10 flex-col items-center rounded-lg w-full md:max-w-full"
    >
      <div className="flex flex-col md:flex-row">
      <motion.div
          initial={{ opacity: 0, y: 1000 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1.5, delay: 1 }}
          className="flex flex-col justify-start p-4 leading-normal w-full md:w-1/2"
          viewport={{ once: true }}
        >
          <h5 className="mb-4 text-3xl md:text-5xl font-bold tracking-tight text-white">
            Revolutionera er nyckelhantering med Guardia
          </h5>
          <p className="mb-3 text-xl md:text-2xl text-gray-400">
            Genom att modernisera processen med GDPR-kompatibilitet minimerar vi onödig datalagring. Detta gör systemet mer relevant och minskar resursförbrukningen, vilket förbättrar prestandan avsevärt. Slipp onödiga sökningar efter personuppgifter som ska rensas ut – vi hanterar det åt dig! Effektivisera och säkra din verksamhet med vår lösning.
          </p>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1.5, delay: 0.5 }}
          className="rounded w-full md:w-1/2 object-contain md:h-auto shadow-2xl mb-10"
          src={DashboardGuardia}
          alt="OrderWindow"
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

export default HowItWorksCard;

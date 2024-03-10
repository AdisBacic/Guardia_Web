import React from 'react';
import { motion } from 'framer-motion';
import { once } from 'events';
import DashboardGuardia from "../../assets/images/DashboardGuardia.png";

const HowItWorksCard = () => {
  return (
    <div
      href="#"
      className="flex mt-10 mb-20 flex-col items-center rounded-lg bg-[#090A0F] w-full md:max-w-full"
    >
      <div className="flex flex-col md:flex-row">
      <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              duration: 1.5,
              delay: 0.5,

            },
          }}
          viewport={{ once: true}}
        >
          <h5 className="mb-4 text-3xl md:text-5xl font-bold tracking-tight text-white">
            Revolutionera Ditt Nyckelhanteringssystem med Guardia-appen
          </h5>
          <p className="mb-3 text-xl md:text-2xl text-gray-400">
            Genom att modernisera processen med GDPR-kompatibilitet minimerar vi onödig datalagring. Detta gör systemet mer relevant och minskar resursförbrukningen, vilket förbättrar prestandan avsevärt. Slipp onödiga sökningar efter personuppgifter som ska rensas ut – vi hanterar det åt dig! Effektivisera och säkra din verksamhet med vår lösning
          </p>
        </motion.div>
        
        <motion.img
       initial={{ opacity: 0, y: 100 }}
       whileInView={{
         opacity: 1,
         y: 0,
         transition: {
           type: "spring",
           duration: 1.5,
         },
       }}
       viewport={{ once: true }}

       className="rounded w-full md:w-1/2 object-contain md:h-auto shadow-2xl mb-10"
       src={DashboardGuardia}
      alt="DashboardGuardia"
    />
      </div>
    </div>
  );
};

export default HowItWorksCard;

import React from "react";
import DashboardGuardia from "../../assets/images/DashboardGuardia.png";
import { motion } from "framer-motion";

const BenefitsCard = () => {
  return (
    <div
      href="#"
      className="flex mt-0 mb-10 flex-col items-center rounded-lg w-full md:max-w-full"
    >
      <div className="flex flex-col md:flex-row">
        <motion.img
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1.5, delay: 0.5 }}
          className="rounded w-full md:w-1/2 object-cover object-center md:h-auto shadow-2xl mb-10"
          src={DashboardGuardia}
          alt="Dashboard Guardia"
          viewport={{ once: true }}
        />

        <motion.div
          initial={{ opacity: 0, y: 1000 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1.5, delay: 1 }}
          className="flex flex-col justify-start p-4 leading-normal w-full md:w-1/2"
          viewport={{ once: true }}
        >
          <h5 className="mb-4 text-3xl md:text-5xl font-bold tracking-tight text-white">
            Effektiv tids- och kostnadsbesparing med digital nyckelhantering
          </h5>
          <p className="mb-3 text-xl md:text-2xl text-gray-400">
            Vi strävar efter att tillhandahålla en användarvänlig och säker
            tjänst med Guardia, där du och dina kollegor har full kontroll över
            era nycklar och tillhörigheter, oavsett tidpunkt eller plats.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default BenefitsCard;

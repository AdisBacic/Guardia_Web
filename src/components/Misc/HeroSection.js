import React from 'react';

const HeroSection = () => {
  return (
    <div className="text-center py-16 md:py-20 lg:py-24">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Artikelhantering</span> <br></br> med GDPR
      </h1>
      <p className="mb-3 text-xl md:text-2xl text-gray-400">
      Guardia är din lösning för effektiv och säker hantering av nycklar och värdefulla tillgångar, med fullständig respekt för GDPR. <br></br> Säkerställ att all känslig information hanteras korrekt. </p>
    </div>
  );
};

export default HeroSection;

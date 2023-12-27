import React from 'react';

const PriceHeroSection = () => {
  return (
    <div className="text-center py-20 bg-gray-00">
      <h1 className="mb-6 text-4xl font-bold text-indigo-200 dark:text-indigo-200 lg:text-5xl">
        Spara <span className="text-indigo-500">Tid</span> och <span className="text-indigo-500">Pengar</span>
      </h1>
      <p className="mx-auto max-w-2xl text-lg font-medium text-gray-400">
        Nyckelhantering med Guardia kostar från 295 kr i månaden och 0 kr per användare. Inga start- eller uppstartsavgifter tillkommer. Inga bindningstider. Pengarna tillbaka om du inte är nöjd inom 30 dagar. Välj årsvis fakturering för bästa pris!
     </p>
    </div>
  );
};

export default PriceHeroSection;

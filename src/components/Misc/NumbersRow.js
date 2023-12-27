import React from 'react';

const NumbersRow = () => {
  return (
    <div className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto sm:grid-cols-4 xl:grid-cols-6 text-white sm:p-8">
      <div className="flex flex-col">
        <dt className="mb-2 text-3xl font-extrabold">0kr</dt>
        <dd className="text-gray-400">Startavgift</dd>
      </div>
      <div className="flex flex-col">
        <dt className="mb-2 text-3xl font-extrabold">Modern</dt>
        <dd className="text-gray-400">React Electron</dd>
      </div>
      <div className="flex flex-col">
        <dt className="mb-2 text-3xl font-extrabold">GDPR</dt>
        <dd className="text-gray-400">Byggd för experter</dd>
      </div>
      <div className="flex flex-col">
        <dt className="mb-2 text-3xl font-extrabold">Multi-Plattform</dt>
        <dd className="text-gray-400">Operativfri</dd>
      </div>
    </div>
  );
};
export default NumbersRow;

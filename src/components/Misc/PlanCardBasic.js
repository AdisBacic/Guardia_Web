import React from 'react';

const PlanCardBasic = () => {
  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Standard plan</h5>
      <div className="flex items-baseline text-gray-900 dark:text-white">
        <span className="text-3xl font-semibold"></span>
        <span className="text-5xl font-extrabold tracking-tight">295:-</span>
        <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/månad</span>
      </div>
      <ul role="list" className="space-y-5 my-7">
        {[
          { text: '50 Artiklar', available: true },
          { text: '3 Användare', available: true },
          { text: 'Fysisk Onboarding', available: true },
          { text: 'Live Statistik', available: false },
          { text: 'Brandad Design', available: false },
          { text: 'Kund features', available: false},
          { text: '24×7 Telefon & Email support', available: false },
        ].map((item, index) => (
          <li key={index} className={`flex items-center ${item.available ? '' : 'line-through decoration-gray-500'}`}>
            <svg className={`flex-shrink-0 w-4 h-4 ${item.available ? 'text-blue-600 dark:text-blue-500' : 'text-gray-400 dark:text-gray-500'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" clipRule="evenodd"/>
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanCardBasic;


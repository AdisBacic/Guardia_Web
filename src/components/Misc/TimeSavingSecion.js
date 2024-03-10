import React from 'react';

const TimeSavingSection = () => {
  return (
    <div className="p-4 mr-4 rounded-lg md:p-8 bg-[#090A0F]" id="time-saving" role="tabpanel" aria-labelledby="time-saving-tab">
      <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-white">Tidsbesparing</h2>
      <ul role="list" className="space-y-4 text-gray-400">
        <li className="flex space-x-2 rtl:space-x-reverse items-center">
          <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
          </svg>
          <span className="leading-tight">Effektivt tidsutnyttjande</span>
        </li>
        <li className="flex space-x-2 rtl:space-x-reverse items-center">
          <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
          </svg>
          <span className="leading-tight">Spara tid i arbetsprocessen</span>
        </li>
        <li className="flex space-x-2 rtl:space-x-reverse items-center">
          <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
          </svg>
          <span className="leading-tight">Optimera din dagliga rutin</span>
        </li>
        <li className="flex space-x-2 rtl:space-x-reverse items-center">
          <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
          </svg>
          <span className="leading-tight">
            <span className="font-semibold">Tidseffektivt</span> och <span className="font-semibold">bekvämt</span> 
          </span>
        </li>
      </ul>
    </div>
  );
};

export default TimeSavingSection;

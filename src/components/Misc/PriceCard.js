import React from 'react';
import Grow from '@mui/material/Grow'; // import Grow for grow effect
import Slide from '@mui/material/Slide';
import { useState, useEffect } from 'react';

import PriceHeroSection from './PriceHeroSection';
import PricePackagesBox from './PricePackagesBox';
const PriceCard = () => {




  const targetDate = new Date('2024-03-29T17:35:10');

  const [timeLeft, setTimeLeft] = useState(targetDate.getTime() - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      setTimeLeft(distance);

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div className="bg-[#090A0F] flex items-center justify-center mt-0 md:mt-0 lg:mt-0">
      <div className="cursor-default flex flex-col items-center bg-[#090A0F] w-full">
        <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
          <div><PriceHeroSection /></div>
        </Grow>


        {days === 0 && hours === 0 && minutes === 0 ? (
          <div className="flex justify-center items-center mt-0">
            <div className="text-center p-4  rounded-lg bg-[#090A0F]">
              <span className="text-xl font-bold text-white-500">The offer has ended.</span>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center mt-0 mb-0">
            <div className="bg-[#090A0F] rounded-lg p-4 shadow-lg">
              <p className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent text-2xl mt-2 mb-4 text-center">Lanseringserbjudande upp till 50% rabatt</p>

              <div className="flex items-center justify-between space-x-2">
                <div className="text-center">
                  <p className="text-white-500 text-xl font-mono font-bold">{String(days).padStart(2, '0')}</p>
                  <span className="text-white-400 text-xs uppercase">Dagar</span>
                </div>
                <span className="text-white-500 font-bold">:</span>
                <div className="text-center">
                  <p className="text-white-500 text-lg font-mono font-bold">{String(hours).padStart(2, '0')}</p>
                  <span className="text-white-400 text-xs uppercase">Timmar</span>
                </div>
                <span className="text-white-500 font-bold">:</span>
                <div className="text-center">
                  <p className="text-white-500 text-lg font-mono font-bold">{String(minutes).padStart(2, '0')}</p>
                  <span className="text-white-400 text-xs uppercase">Minuter</span>
                </div>
                <span className="text-white-500 font-bold">:</span>
                <div className="text-center">
                  <p className="text-white-500 text-lg font-mono font-bold">{String(seconds).padStart(2, '0')}</p>
                  <span className="text-white-400 text-xs uppercase">Sekunder</span>
                </div>
              </div>
            </div>
          </div>
        )}
        <Slide direction="up" in={true} mountOnEnter unmountOnExit>
          <div className="w-full mx-auto pb-20">
            <PricePackagesBox />
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default PriceCard;

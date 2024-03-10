import React from 'react';
import PlanCardBasic from './PlanCardBasic';
import PlanCardPrem from './PlanCardPrem';
import { useState, useEffect } from 'react';

const PricePackagesBox = () => {

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
        <div
            href="#"
            className="flex mt-10 mb-1 flex-col items-center rounded-lg bg-[#090A0F]  w-full md:max-w-full"
        >
            {days === 0 && hours === 0 && minutes === 0 ? null : (
                <>
                    <div className="text-white text-center text-2xl font-extrabold mt-0">
                        <span className='bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent'> Lanseringserbjudande upp till 50% rabatt  </span>
                    </div>

                    <div className="text-white text-center text-2xl font-extrabold mb-10">
                        {days} dagar {hours} timmar {minutes}m {seconds}s
                    </div>
                </>
            )}
            <div className="flex flex-col md:flex-row gap-4">
                <div>
                    <PlanCardBasic />
                </div>
                <div className=''>
                    <PlanCardPrem />
                </div>
            </div>
        </div>
    );
};

export default PricePackagesBox;

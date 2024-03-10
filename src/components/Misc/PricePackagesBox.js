import React from 'react';
import PlanCardBasic from './PlanCardBasic';
import PlanCardPrem from './PlanCardPrem';
import { useState, useEffect } from 'react';

const PricePackagesBox = () => {


    return (
        <div
            href="#"
            className="flex mt-10 mb-1 flex-col items-center rounded-lg bg-[#090A0F]  w-full md:max-w-full"
        >
           
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

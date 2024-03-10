import React from 'react';
import PlanCardBasic from './PlanCardBasic';
import PlanCardPrem from './PlanCardPrem';

const PricePackagesBox = () => {
    return (
        <div
            href="#"
            className="flex mt-20 mb-20 flex-col items-center rounded-lg bg-[#090A0F]  w-full md:max-w-full"
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

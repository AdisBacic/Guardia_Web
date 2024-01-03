import React from 'react';
import SupportForm from './SupportForm';

const SupportFormWithText = () => {
    return (
        <div
            href="#"
            className="flex mt-20 mb-20 flex-col items-center rounded-lg bg-gray-800  w-full md:max-w-full"
        >
            <div className="flex flex-col md:flex-row">

            <div className="flex flex-col justify-start p-4 leading-normal w-full md:w-1/2">
                    <h5 className="mb-4 text-3xl md:text-5xl font-bold tracking-tight text-white">
                        FAQ´s
                    </h5>
                    <p className="mb-3 text-xl md:text-2xl text-gray-400">
                        Upplev den smidighet och effektivitet vi erbjuder. Ingen bindningstid, vid priser som börjar på endast 299 kr/mån. Börja din resa mot enklare hantering redan idag!
                    </p>
                </div>

                <SupportForm />
            
            </div>
        </div>
    );
};

export default SupportFormWithText;

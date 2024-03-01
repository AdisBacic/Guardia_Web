import React from 'react';
import placeholderImage from '../../assets/images/elementor-placeholder-image.webp';
import DemoForm from './DemoForm';

const DemoFormWithText = () => {
    return (
        <div
            href="#"
            className="flex mt-20 mb-20 flex-col items-center rounded-lg bg-gray-800  w-full md:max-w-full"
        >
            <div className="flex flex-col md:flex-row">

                <DemoForm />
                <div className="flex flex-col justify-start p-4 leading-normal w-full md:w-1/2">
                    <h5 className="text-4xl mt-10 font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-500 lg:text-5xl mb-2 mx-auto">
                        Ta första steget mot en enklare vardag med Guardia! 
                    </h5>
                    <p className="mb-3 text-xl md:text-2xl text-gray-400">
                        Upplev den smidighet och effektivitet vi erbjuder. Ingen bindningstid, vid priser som börjar på endast 495 kr/mån. Börja din resa mot enklare hantering redan idag!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DemoFormWithText;

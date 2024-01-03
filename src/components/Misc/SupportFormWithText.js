import React from 'react';
import SupportForm from './SupportForm';
import SupportFaqs from './SupportFaqs';

const SupportFormWithText = () => {
    return (
      
            <div className="flex flex-col md:flex-row">

        
                <SupportForm />

                <div className="flex flex-col justify-start p-4 leading-normal w-full md:w-1/2">
                    <h4 className="text-2xl mt-10 font-bold text-indigo-200 lg:text-3xl mx-auto">
                        Vanliga <span className="text-indigo-500">Frågor</span> och <span className="text-indigo-500">Information</span>
                    </h4>
                    <div className="w-1/2 mx-auto mt-10 mb-10">
                        <SupportFaqs/>
                   </div>
                </div>

            </div>
        
    );
};

export default SupportFormWithText;

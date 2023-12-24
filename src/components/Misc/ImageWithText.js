import React from 'react';
import placeholderImage from '../../assets/images/elementor-placeholder-image.webp';
import ov from '../../assets/images/ov.png';

const ImageWithText = () => {
    return (
        <div className="relative">
            <img
                className="object-cover w-full h-96 md:h-128 lg:h-auto xl:h-auto lg:w-full xl:w-full md:w-full md:rounded-none md:rounded-lg lg:w-full xl:w-full" // Remove the "w-full" class from smaller screens
                src={ov}
                alt="Placeholder Image"
            />
            <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                <div className="bg-black bg-opacity-50 p-4">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">
                        Placeholder Rubrik
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg">
                        Placeholder text
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ImageWithText;

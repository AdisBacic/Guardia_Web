import React from 'react';
import placeholderImage from '../../assets/images/elementor-placeholder-image.webp';
import mainwindwGuardia from '../../assets/images/mainwindowGuardia.png';

const HowItWorksCard = () => {
    return (
        <div
            href="#"
            className="flex mt-20 mb-20 flex-col items-center rounded-lg bg-gray-800 w-full md:max-w-full"
        >
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col justify-start p-4 leading-normal w-full md:w-1/2">
                    <h5 className="mb-4 text-3xl md:text-5xl font-bold tracking-tight text-gray-900 text-white">
                        Revolutionera Ditt Nyckelhanteringssystem med Guardia-appen
                    </h5>
                    <p className="mb-3 text-xl md:text-2xl text-gray-400">
                    Genom att modernisera processen med GDPR-kompatibilitet minimerar vi onödig datalagring. Detta gör systemet mer relevant och minskar resursförbrukningen, vilket förbättrar prestandan avsevärt. Slipp onödiga sökningar efter personuppgifter som ska rensas ut – vi hanterar det åt dig! Effektivisera och säkra din verksamhet med vår lösning
                    </p>
                </div>
                <img
                    className="rounded w-full md:w-1/2 h-96 md:h-auto border border-gray-700 border-gray-700"
                    src={mainwindwGuardia}
                    alt=""
                />
            </div>
        </div>
    );
};

export default HowItWorksCard;

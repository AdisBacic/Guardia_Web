import React from 'react';
import placeholderImage from '../../assets/images/elementor-placeholder-image.webp';
import DashboardGuardia from '../../assets/images/DashboardGuardia.png';
import IntroVideo from './IntroVideo';


const BenefitsCard = () => {
    return (
        <div
            href="#"
            className="flex mt-20 mb-20 flex-col items-center rounded-lg bg-gray-800  w-full md:max-w-full"
        >
            <div className="flex flex-col md:flex-row">
                <img
                    className="rounded w-full md:w-1/2 h-96 md:h-auto border border-gray-700 border-gray-700"
                    src={DashboardGuardia}
                    alt=""
                />

                {/* <IntroVideo /> */}


                <div className="flex flex-col justify-start p-4 leading-normal w-full md:w-1/2">
                    <h5 className="mb-4 text-3xl md:text-5xl font-bold tracking-tight text-gray-900 text-white">
                        Effektiv tids- och kostnadsbesparing med digital nyckelhantering
                    </h5>
                    <p className="mb-3 text-xl md:text-2xl text-gray-400">
                        Vi strävar efter att tillhandahålla en användarvänlig och säker tjänst med Guardia, där du och dina kollegor har full kontroll över era nycklar och tillhörigheter, oavsett tidpunkt eller plats.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BenefitsCard;

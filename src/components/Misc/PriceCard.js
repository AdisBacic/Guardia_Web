import React from 'react';
import Grow from '@mui/material/Grow'; // import Grow for grow effect
import Slide from '@mui/material/Slide';

import PriceHeroSection from './PriceHeroSection';
import PricePackagesBox from './PricePackagesBox';
const PriceCard = () => {
    return (
        <div className="bg-gray-100 flex items-center justify-center mt-16 md:mt-24 lg:mt-30">
            <div className="cursor-default flex flex-col items-center bg-[#090A0F] w-full">
                <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
                    <div><PriceHeroSection /></div>
                </Grow>
            
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

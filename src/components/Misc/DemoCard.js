import React from 'react';
import Grow from '@mui/material/Grow'; // import Grow for grow effect
import Slide from '@mui/material/Slide';
import DemoFormWithText from './DemoFormWithText';
import DemoHeroSection from './DemoHeroSection';

const DemoCard = () => {
    return (

        <div className="bg-[#090A0F] flex items-center justify-center mt-16 md:mt-24 lg:mt-30">
            <div className="cursor-default flex flex-col items-center border-gray-700 bg-[#090A0F] w-full">
                <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
                    <div><DemoHeroSection /></div>
                </Grow>
                <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                    <div className="w-full mx-auto pb-20">
                    <DemoFormWithText />
                    </div>
                </Slide>
                </div>

            </div>
    );
};

export default DemoCard;

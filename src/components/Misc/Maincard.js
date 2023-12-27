import React from 'react';
import placeholderImage from '../../assets/images/elementor-placeholder-image.webp';
import Button from '@mui/material/Button';
import ServicesSection from '../Misc/Services';
import HeroSection from '../Misc/HeroSection';
import TextRow from '../Misc/TextRow';
import BenefitsSection from './BenefitsSection';
import TimeSavingSection from './TimeSavingSecion';
import ImageWithText from './ImageWithText';
import BenefitsCard from './BenefitsCard';
import HowItWorksCard from './HowItWorksCard';
import Grow from '@mui/material/Grow'; // import Grow for grow effect
import Slide from '@mui/material/Slide';
import Fade from '@mui/material/Fade';

const Maincard = () => {
    return (
        <div className="bg-gray-100 flex items-center justify-center mt-16 md:mt-24 lg:mt-30">
            <div className="cursor-default flex flex-col items-center bg-white border border-gray-200 border-gray-700 bg-gray-800 w-full">
                <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
                    <div><HeroSection /></div>
                </Grow>
                {/* <div className="w-full">
                    <ImageWithText />
                </div> */}
                <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                    <div className="w-full">
                        <BenefitsCard />
                        <HowItWorksCard />
                    </div>
                </Slide>

                <Fade in={true} timeout={800}>

                    <div className="flex flex-col p-4 leading-normal text-center">
                        <h5 className="mb-4 text-3xl md:text-5xl font-bold tracking-tight text-gray-900 text-white">
                            GDPR och personuppgifter
                        </h5>
                        <p className="mb-3 text-xl md:text-2xl text-gray-400">
                            På Guardia tar vi säkerheten och integriteten för våra användares personliga information på stort allvar. Därför har vi infört strikta åtgärder för att säkerställa att all känslig data hanteras i enlighet med GDPR-förordningarna.
                            Vår applikation använder avancerad krypteringsteknik för att skydda användardata från obehörig åtkomst eller stöld. Dessutom samlar vi endast in den minsta mängden information som behövs för att tillhandahålla våra tjänster, och vi delar eller säljer aldrig användardata till tredje parter.
                        </p>
                        {/* <div className="flex items-center justify-center mb-6 mt-6">
                            <div className='mr-10'>
                                <Button variant="outlined" size="medium">
                                    Hur gör vi?
                                </Button>
                            </div>
                            <Button variant="contained" color="success" size="medium">
                                Boka demo
                            </Button>
                        </div> */}

                        <div className="flex items-center justify-center md:justify-between lg:justify-center xl:justify-center">
                            <TextRow />
                        </div>
                        <div className="flex items-center justify-center md:justify-between lg:justify-center xl:justify-center">
                            <div className="w-full flex flex-wrap justify-center md:justify-between lg:justify-center xl:justify-center">
                                <ServicesSection />
                                <BenefitsSection />
                                <TimeSavingSection />
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Maincard;

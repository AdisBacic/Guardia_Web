import React from 'react';
import ServicesSection from '../Misc/Services';
import HeroSection from '../Misc/HeroSection';
import TextRow from '../Misc/TextRow';
import BenefitsSection from './BenefitsSection';
import TimeSavingSection from './TimeSavingSecion';
import BenefitsCard from './BenefitsCard';
import HowItWorksCard from './HowItWorksCard';
import Grow from '@mui/material/Grow';
import Slide from '@mui/material/Slide';
import Fade from '@mui/material/Fade';
import Container from '@mui/material/Container';
import IntroVideo from './IntroVideo';

const Maincard = () => {
    return (

        <div className="bg-gray-100 flex items-center justify-center mt-16 md:mt-24 lg:mt-10">
            <div className="cursor-default flex flex-col items-center border border-gray-700 bg-gray-800 w-full">
                <Container maxWidth="xl">
                    <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
                        <div><HeroSection /></div>
                    </Grow>
    
                    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                        <div className="w-full">
                            <BenefitsCard />
                            <HowItWorksCard />
                        </div>
                    </Slide>

                    <Fade in={true} timeout={800}>

                        <div className="flex flex-col p-4 leading-normal text-center">
                            <h5 className="mb-4 text-3xl md:text-5xl font-bold tracking-tight text-white">
                                GDPR och personuppgifter
                            </h5>
                            <p className="mb-3 text-xl md:text-2xl text-gray-400">
                                På Guardia tar vi säkerheten och integriteten för våra användares personliga information på stort allvar. Därför har vi infört strikta åtgärder för att säkerställa att all känslig data hanteras i enlighet med GDPR-förordningarna.
                                Vår applikation använder avancerad krypteringsteknik för att skydda användardata från obehörig åtkomst eller stöld. Dessutom samlar vi endast in den minsta mängden information som behövs för att tillhandahålla våra tjänster, och vi delar eller säljer aldrig användardata till tredje parter.
                            </p>

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
                </Container>

            </div>
        </div>

    );
};

export default Maincard;

import React from 'react';
import Button from '@mui/material/Button';
import MyCarousel from './Carousel';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
const MiddleSection = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => () => {
        navigate(path);
    };

    return (
        <div className="bg-[#090A0F] flex items-center justify-center flex-col">
            <div href="" className="cursor-default flex flex-col items-center  border border-gray-700 bg-[#090A0F] w-full">
                <Container maxWidth="xl">

                    <div className="flex flex-col justify-between p-4 leading-normal mb-20">
                        <h5 className="mb-4 text-3xl  text-center md:text-5xl font-bold tracking-tight text-white">
                            Kom Igång Snabbt och Enkelt
                        </h5>
                        <p className="mb-3 text-xl md:text-2xl text-gray-400">

                            Starta med Guardia inom 30 minuter! Med vårt enkla onboarding-flöde och intuitiva gränssnitt, kan du och ditt team börja använda tjänsten på nolltid. Inga bindningstider, inga startavgifter - bara enkel och effektiv tillgångshantering.
                        </p>
                        <div className="flex items-center mx-auto">
                        <Button variant="contained" color="success" size="medium" onClick={handleNavigate('/demo')}>
                            Boka demo
                        </Button>
                        </div>

                        <div id="anvandingsomraden-section" className="">
                            <MyCarousel />
                        </div>
                    </div>
                </Container>

            </div>
        </div>
    );
};

export default MiddleSection;

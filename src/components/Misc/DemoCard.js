import React from 'react';
import placeholderImage from '../../assets/images/elementor-placeholder-image.webp';
import Button from '@mui/material/Button';
import ServicesSection from '../Misc/Services';
import TextRow from '../Misc/TextRow';
import BenefitsSection from './BenefitsSection';
import TimeSavingSection from './TimeSavingSecion';
import ImageWithText from './ImageWithText';
import BenefitsCard from './BenefitsCard';
import HowItWorksCard from './HowItWorksCard';
import Grow from '@mui/material/Grow'; // import Grow for grow effect
import Slide from '@mui/material/Slide';
import Fade from '@mui/material/Fade';
import DemoForm from './DemoForm';
import DemoFormWithText from './DemoFormWithText';
import DemoHeroSection from './DemoHeroSection';

const DemoCard = () => {
    return (
        <div className="bg-gray-100  flex items-center justify-center mt-16 md:mt-24 lg:mt-30">
            <div className="cursor-default flex flex-col items-center border-gray-700 bg-gray-800 w-full">
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

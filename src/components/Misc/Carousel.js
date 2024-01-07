import React, { useState, useEffect } from 'react';
import placeholderImage from '../../assets/images/elementor-placeholder-image.webp';
import construction from '../../assets/images/Construction.jpg';
import fastighet from '../../assets/images/Fastighet.jpg';
import hotell from '../../assets/images/Hreception.jpg';
import securit from '../../assets/images/Securityguard.jpg';

const CarouselItem = ({ image, text }) => (
    <div className="relative flex justify-center items-center">
        <img src={image} alt="carousel-item" className="rounded-lg shadow-lg" />
        <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-xl font-semibold p-2 bg-black bg-opacity-50 rounded">
                {text}
            </span>
        </div>
    </div>
);
const MyCarousel = () => {
    const images = [
        { src: securit, text: "Guardia används av vakter på flera stora företag" },
        { src: hotell, text: "Oklart vem som ska låna eller låna ut, ser agressivt ut" },
        { src: fastighet, text: "Lånar sin cykelnyckel?" },
        { src: construction, text: "Kebabteknikern Ahmed använder Guardia dagligen" },
    ];    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 4000); 

        return () => clearInterval(interval);
    }, [images.length]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative mt-20">
        <div className="flex gap-4 overflow-hidden">
            <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div className="min-w-full snap-center" key={index}>
                        <CarouselItem image={image.src} text={image.text} />
                    </div>
                ))}
            </div>
        </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 mb-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`h-3 w-3 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                        aria-label={`Go to slide ${index + 1}`}
                        onClick={() => goToSlide(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default MyCarousel;

import React, { useState, useEffect } from 'react';
import construction from '../../assets/images/Construction.jpg';
import fastighet from '../../assets/images/Fastighet.jpg';
import hotell from '../../assets/images/Hreception.jpg';
import securit from '../../assets/images/Securityguard.jpg';

const CarouselItem = ({ image, title, description }) => (
    <div className="relative">
        <div className="absolute w-full top-0 left-0 bg-black bg-opacity-60 p-4">
            <div className="text-white">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-lg">{description}</p>
            </div>
        </div>
        <img src={image} alt="carousel-item" className="rounded-lg shadow-lg" />
    </div>
);

const MyCarousel = () => {
    const images = [
        {
            src: securit,
            title: "Säkerhetsbranschen",
            description: "Guardia används av säkerhetsproffs på flera stora företag för att effektivt hantera sin inventering av nycklar och säkerhetsutrustning."
        },
        {
            src: hotell,
            title: "Hotellbranschen",
            description: "Oavsett om du behöver låna eller låna ut nycklar och utrustning, erbjuder Guardia en användarvänlig lösning för hotellbranschen."
        },
        {
            src: fastighet,
            title: "Fastighetsbranschen",
            description: "Guardia förenklar processen att låna och spåra nycklar, vilket gör det till ett idealiskt verktyg för fastighetsförvaltningsföretag."
        },
        {
            src: construction,
            title: "Byggbranschen",
            description: "Till och med kebabteknikern Ahmed förlitar sig på Guardia för sina dagliga behov. Det är ett mångsidigt verktyg för att hantera nycklar och utrustning på byggarbetsplatser."
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 6000);

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
                            <CarouselItem image={image.src} title={image.title} description={image.description} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 mb-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`h-3 w-3 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                        aria-label={`Gå till bild ${index + 1}`}
                        onClick={() => goToSlide(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default MyCarousel;

import React, { useState, useEffect, useCallback } from 'react';
import construction from '../../assets/images/Construction.jpg';
import fastighet from '../../assets/images/Fastighet.jpg';
import hotell from '../../assets/images/Hreception.jpg';
import securit from '../../assets/images/Securityguard.jpg';


const CarouselItem = ({ image, title, description }) => (
    <div className="relative">
        {/* Image container */}
        <div className="w-full lg:max-w-xl xl:max-w-2xl 2xl:max-w-2xl mx-auto">
        <img src={image} alt="carousel-item" className="w-full h-full object-cover rounded-lg transition duration-500 ease-in-out transform hover:scale-105" />
        </div>
        {/* Text container */}
        <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-r from-black via-transparent to-black bg-opacity-60 p-4 flex items-center justify-center">
            <div className="text-white text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">{title}</h2>
            <p className="text-sm sm:text-base md:text-lg">{description}</p>
            </div>
        </div>
    </div>
);

const MyCarousel = () => {
    const images = [
        {
            src: securit,
            title: "Bevakningsbranschen",
            description: "Guardia förenklar hanteringen av nycklar och säkerhetsutrustning i bevakningsbranschen, med en GDPR-kompatibel applikation som säkerställer trygg och säker lån och återlämning, så du kan fokusera på att skydda andra."
        },
        {
            src: hotell,
            title: "Hotellbranschen",
            description: "För hotellbranschen erbjuder Guardia en smidig lösning för att hantera lån av nycklar och utrustning. Förenkla din vardag, så att du kan erbjuda dina gäster en bekväm och säker vistelse."
        },
        {
            src: fastighet,
            title: "Fastighetsbranschen",
            description: "Guardia stärker fastighetsbranschen genom att effektivisera hantering av nycklar och tillgångar, eliminera behovet av dyra skåp och komplicerade system, och spara både tid och pengar."
        },
        {
            src: construction,
            title: "Byggbranschen",
            description: "Guardia förbättrar byggbranschen med en pålitlig, GDPR-kompatibel lösning för artikelhantering som förenklar processer och säkerställer en högkvalitativ arbetsmiljö för alla projektstorlekar."
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 10000);

        return () => clearInterval(interval);
    }, [images.length]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };


    const handleKeyDown = useCallback(
        (event) => {
            if (event.key === 'ArrowLeft') {
                goToSlide((currentIndex - 1 + images.length) % images.length);
            } else if (event.key === 'ArrowRight') {
                goToSlide((currentIndex + 1) % images.length);
            }
        },
        [currentIndex, images.length]
    );

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    return (
        <div className="relative mt-20" tabIndex="0" aria-label="carousel" onKeyDown={handleKeyDown}>
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
                     aria-label={`Go to slide ${index + 1}`}
                     onClick={() => goToSlide(index)}
                 ></button>
                 ))}
           </div>
        </div>
    );
};

export default MyCarousel;
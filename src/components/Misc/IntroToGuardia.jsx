import React from "react";
import shieldImg from "../../assets/images/ShieldHighRes.png";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const IntroToGuardia = () => {

  const targetDate = new Date('2024-03-29T17:35:10');
  const [timeLeft, setTimeLeft] = useState(targetDate.getTime() - new Date().getTime());

  useEffect(() => {
      const interval = setInterval(() => {
          const now = new Date().getTime();
          const distance = targetDate.getTime() - now;
          setTimeLeft(distance);

          if (distance < 0) {
              clearInterval(interval);
              setTimeLeft(0);
          }
      }, 1000);

      return () => clearInterval(interval);
  }, [targetDate]);
  
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (<>
      {days === 0 && hours === 0 && minutes === 0 ? null : (
        <>
          <div className="text-white text-center text-2xl font-extrabold mt-20">
            <span className='bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent'> Lanseringserbjudande upp till 50% rabatt  </span> 
          </div>

          <div className="text-white text-center text-2xl font-extrabold mb-0">
            {days} dagar {hours} timmar {minutes}m {seconds}s 
          </div>
        </>
      )}
    <Container className="top-1/4 relative  rounded-xl">
      <div className="flex h-[50vh]">
        
        <div className="text-white w-full lg:w-2/3 ">

  
          <h1 className="text-4xl font-poppins-medium pb-8">
            Gör det enkelt att följa <span className="bg-gradient-to-r from-green-600 to-green-900 bg-clip-text text-transparent">GDPR</span> , Förändra ditt sätt att hantera data idag!
            
          </h1>
          <p className="text-gray-400 font-poppins-light pb-8">
            Framtiden inom hantering av nycklar och värdefulla tillgångar. GDPR-kompatibel och säker. Säkerställer korrekt behandling av känslig data.
          </p>

          
          <NavLink  to="/demo" className="pr-2">
            <Button variant="contained" className="bg-gradient-to-r from-green-600 to-green-900 rounded-none">Boka ett demo</Button>
          </NavLink>
          <NavLink to="/moreinfo">
            <Button   variant="outlined">Läs mer</Button>
          </NavLink>

         
        </div>
        <img src={shieldImg} alt="Guardia" className="hidden lg:block absolute -right-20 -bottom-0 h-full" />
      </div>
    </Container>
    </>
  );
};

export default IntroToGuardia;

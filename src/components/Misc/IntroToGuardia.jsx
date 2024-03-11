import React from "react";
import shieldImg from "../../assets/images/ShieldHighRes.png";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const IntroToGuardia = () => {
  const targetDate = new Date("2024-03-29T17:35:10");
  const [timeLeft, setTimeLeft] = useState(
    targetDate.getTime() - new Date().getTime()
  );

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
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <>
      {days === 0 && hours === 0 && minutes === 0 ? (
        <div className="flex justify-center items-center mt-20">
          <div className="text-center p-4  rounded-lg bg-[#090A0F]">
            <span className="text-xl font-bold text-white-500">
              The offer has ended.
            </span>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center mt-20 mb-5">
          <div className="bg-[#090A0F] rounded-lg p-4 shadow-lg">
            <p className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent text-2xl mt-2 mb-4 text-center">
              Lanseringserbjudande upp till 50% rabatt
            </p>

            <div className="flex items-center justify-between space-x-2">
              <div className="text-center">
                <p className="text-white-500 text-lg font-mono font-bold">
                  {String(days).padStart(2, "0")}
                </p>
                <span className="text-white-400 text-xs uppercase">Dagar</span>
              </div>
              <span className="text-white-500 font-bold">:</span>
              <div className="text-center">
                <p className="text-white-500 text-lg font-mono font-bold">
                  {String(hours).padStart(2, "0")}
                </p>
                <span className="text-white-400 text-xs uppercase">Timmar</span>
              </div>
              <span className="text-white-500 font-bold">:</span>
              <div className="text-center">
                <p className="text-white-500 text-lg font-mono font-bold">
                  {String(minutes).padStart(2, "0")}
                </p>
                <span className="text-white-400 text-xs uppercase">
                  Minuter
                </span>
              </div>
              <span className="text-white-500 font-bold">:</span>
              <div className="text-center">
                <p className="text-white-500 text-lg font-mono font-bold">
                  {String(seconds).padStart(2, "0")}
                </p>
                <span className="text-white-400 text-xs uppercase">
                  Sekunder
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <Container className="mt-10 relative rounded-xl pb-10 border">
        <div className="flex h-[50vh]">
          <div className="text-white w-full lg:w-4/5">
            <h1 className="text-4xl font-poppins-medium pb-8">
              Gör det enkelt att följa{" "}
              <span className="bg-gradient-to-r from-green-600 to-green-900 bg-clip-text text-transparent">
                GDPR
              </span>{" "}
              , förändra ditt sätt att hantera data idag!
            </h1>
            <p className="text-gray-400 font-poppins-light pb-8">
              Simpel och effektiv hantering av nycklar och värdefulla
              tillgångar. Kämpar ditt företag med pappersarbete, att följa
              GDPR-förordningar och rutin i det vardagliga arbetet? Guardia
              erbjuder en enkel webblösning eller app för att administrera
              utlåning och inlämning av artiklar. Automatisera processen och
              följ GDPR-förordningar med enkelhet. <br />
              Det ska vara enkelt att göra rätt.
            </p>
            <div className="pb-20">
              <NavLink to="/demo" className="pr-2">
                <Button
                  variant="contained"
                  className="bg-gradient-to-r from-green-600 to-green-900 rounded-none"
                >
                  Boka Demo
                </Button>
              </NavLink>
              <NavLink to="/moreinfo">
                <Button variant="outlined">Läs mer</Button>
              </NavLink>
            </div>
          </div>

          <img
            src={shieldImg}
            alt="Guardia"
            className="hidden lg:block absolute -right-40 -top-5 h-96 "
          />
        </div>
      </Container>
    </>
  );
};

export default IntroToGuardia;
